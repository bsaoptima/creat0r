from django.shortcuts import render
import datetime as dt
import json
from django.conf import settings
from django.db.transaction import atomic, non_atomic_requests
from django.http import HttpResponse, HttpResponseForbidden
from django.views.decorators.csrf import csrf_exempt
from django.views.decorators.http import require_POST
from django.utils import timezone

from .models import * 
from .serializers import *
from rest_framework.views import APIView
from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework import status

from .phyllo_functions import *    

# Create your views here.
@api_view(["POST"])
def getAccounts(request):
    if request.method == "POST":
        accounts = Account.objects.all()
        serializer = AccountSerializer(accounts, many=True)
        return Response(
            {
                "accounts": serializer.data
            }
        )

""" Webhook Receiver """
@csrf_exempt
@require_POST
@non_atomic_requests
def phyllo_webhook(request):
    
    #delete messages that are more than a week old
    PhylloWebhookMessage.objects.filter(
        received_at__lte=timezone.now()-dt.timedelta(days=7)
    ).delete()
    
    #receive the payload
    payload = json.loads(request.body)
    #create the new message
    PhylloWebhookMessage.objects.create(
        received_at=timezone.now(),
        payload=payload,
    )
    
    if payload["event"] == "ACCOUNTS.CONNECTED":
        
        #check if the account already exists
        existing_account = Account.objects.filter(phyllo_account_id=payload["data"]["account_id"])
        
        if existing_account:
            return HttpResponse("Account already exists.", content_type="text/plain")
        
        else:
            account_details = PHYLLO_getAccount(payload["data"]["account_id"])
            profile_details = PHYLLO_getProfile(payload["data"]["account_id"])
            engagement_details = PHYLLO_getEngagement(payload["data"]["account_id"])
            account = Account.objects.create(
                phyllo_account_id = account_details["id"],
                username = account_details["username"],
                profile_pic_url = account_details["profile_pic_url"],
                phyllo_profile_id = profile_details["data"][0]["id"],
                followers = profile_details["data"][0]["reputation"]["follower_count"],
                posts = engagement_details["posts"],
                likes = engagement_details["likes"],
                views = engagement_details["views"],
            )
            
    if payload["event"] == "PROFILES.UPDATED" or payload["event"] == "PROFILES.ADDED":
        existing_account = Account.objects.filter(phyllo_account_id=payload["data"]["account_id"])
        profile_details = PHYLLO_getProfile(payload["data"]["account_id"])
        
        #update the account with engagement information
        existing_account.phyllo_profile_id = profile_details["data"][0]["id"]
        existing_account.followers = profile_details["data"][0]["reputation"]["follower_count"]
        existing_account.save()
        
        
    return HttpResponse("Message received okay.", content_type="text/plain")
    