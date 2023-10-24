from .models import *
from rest_framework import serializers

class AccountSerializer(serializers.ModelSerializer):
    class Meta:
        model = Account
        fields = [
            'id',
            'phyllo_account_id',
            'username',
            'profile_pic_url',
            'followers',
            'posts',
            'likes',
            'views',
        ]