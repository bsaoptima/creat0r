from django.contrib import admin
from .models import *

# Register your models here.
class PhylloWebhookMessageAdmin(admin.ModelAdmin):
    list_display = ('received_at', 'payload')
    
class AccountAdmin(admin.ModelAdmin):
    list_display = ('username', 'followers', 'views', 'likes')
    
class PlatformAdmin(admin.ModelAdmin):
    list_display = ('phyllo_id', 'name', 'logo_url')

# class UserAdmin(admin.ModelAdmin):
#     list_display = ('sdk_token', 'phyllo_user_id', 'phyllo_user_name')

admin.site.register(Account, AccountAdmin)
admin.site.register(Platform, PlatformAdmin)
# admin.site.register(User, UserAdmin)
admin.site.register(PhylloWebhookMessage, PhylloWebhookMessageAdmin)