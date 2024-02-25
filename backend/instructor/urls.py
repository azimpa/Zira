from django.urls import path
from . import views

urlpatterns = [
    path("courses", views.CourseListCreateEdit.as_view(), name="course-list-create"),
    path("courses/<int:pk>/", views.CourseRetrieveUpdateDeleteView.as_view(), name="course-retrieve-update-delete")
]