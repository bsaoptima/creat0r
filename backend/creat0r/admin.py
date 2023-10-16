from django.contrib import admin
from .models import *

# Register your models here.
class PhylloWebhookMessageAdmin(admin.ModelAdmin):
    list_display = ('received_at', 'payload')
    

admin.site.register(PhylloWebhookMessage, PhylloWebhookMessageAdmin)