from django.urls import path
from . import views

urlpatterns = [
    path("userlist", views.UserListView.as_view(), name="user-list"),
    path("userstatus/<int:pk>/", views.ToggleUserStatus.as_view(), name="userstatus"),
    # path("instructorlist", views.InstructorListVIew.as_view(), name="instructor-list"),
]
