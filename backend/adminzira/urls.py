from django.urls import path
from . import views

urlpatterns = [
    path("userlist", views.UserListView.as_view(), name="user-list"),
    path("userstatus/<int:pk>/", views.ToggleUserStatus.as_view(), name="user-status"),
    path("instructorlist", views.InstructorListVIew.as_view(), name="instructor-list"),
    path("instructorstatus/<int:pk>/", views.ToggleInstructorStatus.as_view(), name="instructor-status"),
]
