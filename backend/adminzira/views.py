from rest_framework import generics, status
from django.db.models import Q
from rest_framework.generics import ListAPIView
from users.models import CustomUser
from rest_framework.response import Response
from users.serializers import UserSerializer

# from django.contrib.auth import authenticate


class UserListView(ListAPIView):
    queryset = CustomUser.objects.exclude(Q(is_superuser=True) | Q(is_instructor=True))
    serializer_class = UserSerializer


class ToggleUserStatus(generics.UpdateAPIView):
    queryset = CustomUser.objects.all()
    serializer_class = UserSerializer

    def update(self, request, *args, **kwargs):
        instance = self.get_object()
        instance.is_active = not instance.is_active
        instance.save()
        serializer = self.get_serializer(instance)
        return Response(serializer.data)


class InstructorListVIew(ListAPIView):
    queryset = CustomUser.objects.filter(is_instructor=True)
    serializer_class = UserSerializer


class ToggleInstructorStatus(generics.UpdateAPIView):
    queryset = CustomUser.objects.all()
    serializer_class = UserSerializer

    def update(self, request, *args, **kwargs):
        instance = self.get_object()
        instance.is_approved = not instance.is_approved
        instance.save()
        serializer = self.get_serializer(instance)
        return Response(serializer.data)
