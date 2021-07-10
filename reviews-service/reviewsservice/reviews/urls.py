from django.urls import path
from .views import reviews_list, review_detail

urlpatterns = [
    path('', reviews_list),
    path('/<int:id>', review_detail)
]