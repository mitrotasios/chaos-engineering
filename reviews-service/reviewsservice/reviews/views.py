from django.shortcuts import render
from django.http import HttpResponse, JsonResponse
from rest_framework import generics, status, permissions
from rest_framework.decorators import api_view
#from django.views.decorators.csrf import csrf_exempt
from rest_framework.response import Response
from .serializers import ReviewSerializer
from .models import Review

# Create your views here.
@api_view(['GET', 'POST', 'DELETE'])
def reviews_list(request):
    if request.method == "GET":
        compensations = Review.objects.all()
        serializer = ReviewSerializer(compensations, many=True)
        return Response(serializer.data, status=status.HTTP_200_OK)
    elif request.method == "POST":
        serializer = ReviewSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
    elif request.method == "DELETE":
        Review.objects.all().delete()
        return Response({"Message": "Deleted succesfully"}, status=status.HTTP_400_BAD_REQUEST)

@api_view(['GET', 'PUT', 'DELETE'])
def review_detail(request, id):
    try:
        review = Review.objects.get(id=id)
    except Review.DoesNotExist:
        return Response({'Error': 'Item does not exist'}, status=status.HTTP_404_NOT_FOUND)
    
    if request.method == "GET":
        serializer = ReviewSerializer(review)
        return Response(serializer.data, status=status.HTTP_200_OK)
    elif request.method == "PUT":
        serializer = ReviewSerializer(review, data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response({'Error': serializer.errors}, status=status.HTTP_400_BAD_REQUEST)
    elif request.method == "DELETE":
        review.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)

"""
company = models.CharField(max_length=50, unique=False, null=False, default=False)
location = models.CharField(max_length=50, unique=False, null=False, default=False)
job_title = models.CharField(max_length=50, unique=False, null=False, default=False)
years_of_experience = models.IntegerField(null=False, default=0)
total_compensation = models.IntegerField(null=False, default=False)
created_at = models.DateTimeField(auto_now_add=True)
"""
    
