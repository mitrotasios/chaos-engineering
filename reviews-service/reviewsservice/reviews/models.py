from django.db import models


class Review(models.Model):
    # Review model attributes definition
    company = models.CharField(max_length=50, unique=False, null=False, default=False)
    location = models.CharField(max_length=50, unique=False, null=False, default=False)
    job_title = models.CharField(max_length=50, unique=False, null=False, default=False, blank=False)
    rating = models.IntegerField(null=False, default=False, blank=False)
    review = models.TextField(max_length=500, null=True, default="", blank=True)
    created_at = models.DateTimeField(auto_now_add=True)
