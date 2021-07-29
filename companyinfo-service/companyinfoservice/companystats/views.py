from django.shortcuts import render
from django.http import HttpResponse, JsonResponse
from rest_framework import generics, status, permissions
from rest_framework.decorators import api_view
#from django.views.decorators.csrf import csrf_exempt
from rest_framework.response import Response
import requests
import json
from companyinfoservice.config import BASE_URL
import companystats.parse_data as parse_data


@api_view(['GET'])
# Route for requesting company specific information or statistics 
def company_info_list(request):
    if request.method == "GET":
        # Make calls to other microservices in the cluster to retrieve relevant data
        compensations_url = "http://localhost:8888/" #BASE_URL+"compensations/"
        reviews_url = "http://localhost:8001/" #BASE_URL+"reviews/"
        response_data = []

        compensations_data = requests.get(compensations_url)
        compensations_data = json.loads(compensations_data.content)

        reviews_data = requests.get(reviews_url)
        reviews_data = json.loads(reviews_data.content)

        companies_list = list(parse_data.get_companies(reviews_data, compensations_data))
        average_ratings = parse_data.get_avg_ratings(companies_list, reviews_data)
        avg_compensations = parse_data.get_avg_compensations(companies_list, compensations_data)
        
        for company in companies_list: 
            company_info = {}
            company_info["company"] = company
            if company in average_ratings:
                company_info["average_rating"] = average_ratings[company]["average_rating"]            
                company_info["number_of_ratings"] = average_ratings[company]["number_of_ratings"]
            else:
                company_info["average_rating"] = None
                company_info["number_of_ratings"] = 0
            
            if company in avg_compensations:
                company_info["compensation_information"] = avg_compensations[company]
            else:
                company_info["compensation_information"] = None
            response_data.append(company_info)

        return Response({ "payload": response_data }, status=status.HTTP_200_OK)