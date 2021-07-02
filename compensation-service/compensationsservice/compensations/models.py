from django.db import models

# Create your models here.

class Compensation(models.Model):
    company = models.CharField(max_length=50, unique=False, null=False, default=False)
    location = models.CharField(max_length=50, unique=False, null=False, default=False)
    job_title = models.CharField(max_length=50, unique=False, null=False, default=False, blank=False)
    years_of_experience = models.IntegerField(null=False, default=0, blank=True)
    total_compensation = models.IntegerField(null=False, default=False, blank=False)
    created_at = models.DateTimeField(auto_now_add=True)
