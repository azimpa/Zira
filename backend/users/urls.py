from django.urls import path
from .views import UserRegistrationView, UserLoginView, UserDetailsView
from rest_framework_simplejwt.views import (
    TokenObtainPairView,
    TokenRefreshView,
)

urlpatterns = [
    path("register", UserRegistrationView.as_view(), name="user-registration"),
    path("login", UserLoginView.as_view(), name="user-login"),
    path("token/obtain/", TokenObtainPairView.as_view(), name="token-obtain"),
    path("token/refresh/", TokenRefreshView.as_view(), name="token-refresh"),
    path("userdetail/<int:pk>/", UserDetailsView.as_view(), name="user-details"),
]
