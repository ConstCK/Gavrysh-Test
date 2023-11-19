from django.contrib.auth.models import User
from rest_framework import serializers

from .models import Post, Category


class UserSerializer(serializers.ModelSerializer):
    class Meta:
        fields = ['id', 'username', 'password']
        model = User
        extra_kwargs = {'password': {"write_only": True}}


class CategorySerializer(serializers.ModelSerializer):
    class Meta:
        fields = '__all__'
        model = Category


class PostSerializer(serializers.ModelSerializer):

    class Meta:
        fields = ["id", "title", 'author', 'category', 'content', "created_at"]
        model = Post
        depth = 1
