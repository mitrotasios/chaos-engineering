from django.urls import path
from .views import compensations_list, compensation_detail

urlpatterns = [
    path('', compensations_list),
    path('/<int:id>', compensation_detail)
]