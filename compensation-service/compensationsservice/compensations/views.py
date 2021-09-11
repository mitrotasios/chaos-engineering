from django.shortcuts import render
from django.http import HttpResponse, JsonResponse
from rest_framework import generics, status, permissions
from rest_framework.decorators import api_view
#from django.views.decorators.csrf import csrf_exempt
from rest_framework.response import Response
from .serializers import CompensationSerializer
from .models import Compensation

# Route handling all compensations
@api_view(['GET', 'POST', 'DELETE'])
def compensations_list(request):
    if request.method == "GET":
        # Fetch compensation information from database
        compensations = Compensation.objects.all()
        serializer = CompensationSerializer(compensations, many=True)
        return Response(serializer.data, status=status.HTTP_200_OK)
    elif request.method == "POST":
        # Save new compensation information to database
        serializer = CompensationSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
    elif request.method == "DELETE":
        # Delete all compensation infromation (for testing purposes)
        Compensation.objects.all().delete()
        return Response({"Message": "Deleted succesfully"}, status=status.HTTP_400_BAD_REQUEST)

# Route handling individual compensation contributions by id
@api_view(['GET', 'PUT', 'DELETE'])
def compensation_detail(request, id):
    # Check if contribution exists in database
    try:
        compensation = Compensation.objects.get(id=id)
    except Compensation.DoesNotExist:
        return Response({'Error': 'Item does not exist'}, status=status.HTTP_404_NOT_FOUND)
    
    if request.method == "GET":
        # Fetch compensation information from database
        serializer = CompensationSerializer(compensation)
        return Response(serializer.data, status=status.HTTP_200_OK)
    elif request.method == "PUT":
        # Update an existing compensation contribution in the database
        serializer = CompensationSerializer(compensation, data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response({'Error': serializer.errors}, status=status.HTTP_400_BAD_REQUEST)
    elif request.method == "DELETE":
        # Delete an existing compensation contribution from the database
        compensation.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)

