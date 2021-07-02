from rest_framework import serializers
from .models import Compensation

class CompensationSerializer(serializers.ModelSerializer):
    class Meta:
        model = Compensation
        fields = '__all__'