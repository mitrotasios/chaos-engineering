from django.urls import path
from .views import compensations_list, compensation_detail

urlpatterns = [
    path('compensations/', compensations_list),
    path('compensations/<int:id>', compensation_detail)
]