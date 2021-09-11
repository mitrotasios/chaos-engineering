from django.shortcuts import render
from django.http import HttpResponse, JsonResponse
from rest_framework import generics, status, permissions
from rest_framework.decorators import api_view
#from django.views.decorators.csrf import csrf_exempt
from rest_framework.response import Response
from .serializers import ReviewSerializer
from .models import Review

# API route handling all reviews infromation
@api_view(['GET', 'POST', 'DELETE'])
def reviews_list(request):
    if request.method == "GET":
        # Fetch data from the database
        compensations = Review.objects.all()
        serializer = ReviewSerializer(compensations, many=True)
        return Response(serializer.data, status=status.HTTP_200_OK)
    elif request.method == "POST":
        # Save a new contribution to the database
        serializer = ReviewSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
    elif request.method == "DELETE":
        # Delete all entries from database (test purposes only)
        Review.objects.all().delete()
        return Response({"Message": "Deleted succesfully"}, status=status.HTTP_400_BAD_REQUEST)

# API route handling individual reviews contributions by id
@api_view(['GET', 'PUT', 'DELETE'])
def review_detail(request, id):
    # Check if requested contribution exists in database
    try:
        review = Review.objects.get(id=id)
    except Review.DoesNotExist:
        return Response({'Error': 'Item does not exist'}, status=status.HTTP_404_NOT_FOUND)
    
    if request.method == "GET":
        # Fetch contribution from the database
        serializer = ReviewSerializer(review)
        return Response(serializer.data, status=status.HTTP_200_OK)
    elif request.method == "PUT":
        # Update an existing contribution in the database
        serializer = ReviewSerializer(review, data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response({'Error': serializer.errors}, status=status.HTTP_400_BAD_REQUEST)
    elif request.method == "DELETE":
        # Delete a specific contribution
        review.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)

