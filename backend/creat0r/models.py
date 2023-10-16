from django.db import models

# Create your models here.
class User(models.Model):
    sdk_token = models.CharField(max_length=250)
    username = models.CharField(max_length=250)

class Account(models.Model):
    platform = models.CharField(max_length=250)
    
class PhylloWebhookMessage(models.Model):
    received_at = models.DateTimeField(help_text="When the event was received")
    payload = models.JSONField(default=None, null=True)
    
    class Meta:
        indexes = [
            models.Index(fields=["received_at"])
        ]