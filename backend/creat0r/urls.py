from django.urls import path, include
from rest_framework.urlpatterns import format_suffix_patterns
from creat0r import views

urlpatterns = [
    path('api/', views.getUsers),
    path('webhooks/phyllo/123456789', views.phyllo_webhook)
]