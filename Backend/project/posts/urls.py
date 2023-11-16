from django.urls import path, include
from rest_framework import routers
from rest_framework.authtoken.views import obtain_auth_token

from .views import register, PostViewSet, CategoryViewSet

router = routers.DefaultRouter()
router.register('posts', PostViewSet)
router.register('categories', CategoryViewSet)

urlpatterns = [
    path('', include(router.urls)),
    path('register', register),
    path('login/', obtain_auth_token),
]