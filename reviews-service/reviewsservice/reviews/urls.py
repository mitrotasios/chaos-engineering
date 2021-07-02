from django.urls import path
from .views import reviews_list, review_detail

urlpatterns = [
    path('reviews/', reviews_list),
    path('reviews/<int:id>', review_detail)
]