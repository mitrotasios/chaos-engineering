from django.urls import path
from .views import company_info_list

urlpatterns = [
    path('', company_info_list),
]