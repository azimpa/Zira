from django.db import models
from users.models import CustomUser
from django.core.validators import FileExtensionValidator
from adminzira.models import Category

class Course(models.Model):
    instructor = models.ForeignKey(CustomUser, on_delete=models.CASCADE)
    title = models.CharField(max_length=200)
    # category = models.ForeignKey(Category, on_delete=models.CASCADE)
    description = models.TextField()
    language = models.CharField(max_length=50, choices=[('english', 'English'), ('malayalam', 'Malayalam'), ('tamil', 'Tamil')])
    duration = models.DurationField(blank=True, null=True)
    price = models.DecimalField(max_digits=8, decimal_places=2, blank=True, null=True)
    level = models.CharField(max_length=20, choices=[('beginner', 'Beginner'), ('intermediate', 'Intermediate'), ('advanced', 'Advanced')])
    image = models.ImageField(upload_to="courses/images/", blank=True, null=True)
    video = models.FileField(upload_to="courses/videos/", validators=[FileExtensionValidator(['mp4', 'avi', 'mkv'])], blank=True, null=True)
    thumbnail = models.ImageField(upload_to="courses/thumbnails/", blank=True, null=True)
    is_active = models.BooleanField(default=True)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)
