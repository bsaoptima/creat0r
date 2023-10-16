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

# Create your views here.
@api_view(["POST"])
def getUsers():
    pass


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
    return HttpResponse("Message received okay.", content_type="text/plain")
    