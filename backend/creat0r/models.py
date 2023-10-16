from django.db import models

# Create your models here.
class User(models.Model):
    sdk_token = models.CharField(max_length=250, null=True, blank=True)
    
    #Phyllo Native Fields
    phyllo_user_id = models.CharField(max_length=250, null=True, blank=True)
    phyllo_user_name = models.CharField(max_length=250, null=True, blank=True)


class Account(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    username = models.CharField(max_length=250, null=True, blank=True)
    profile_pic_url = models.CharField(max_length=250, blank=True, null=True)
    
class Platform(models.Model):
    phyllo_id = models.CharField(max_length=250, null=True, blank=True)
    name = models.CharField(max_length=250, null=True, blank=True)
    logo_url = models.CharField(max_length=250, null=True, blank=True)
    
    
class PhylloWebhookMessage(models.Model):
    received_at = models.DateTimeField(help_text="When the event was received")
    payload = models.JSONField(default=None, null=True)
    
    class Meta:
        indexes = [
            models.Index(fields=["received_at"])
        ]