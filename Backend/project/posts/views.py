from rest_framework import viewsets
from rest_framework.authentication import SessionAuthentication, BasicAuthentication, TokenAuthentication
from rest_framework.authtoken.models import Token
from rest_framework.decorators import api_view
from rest_framework.permissions import IsAuthenticated, IsAuthenticatedOrReadOnly, AllowAny
from rest_framework.response import Response
from django.contrib.auth.models import User

from .models import Post, Category
from .serializers import PostSerializer, UserSerializer, CategorySerializer


@api_view(['POST'])
def register(request):
    serializer = UserSerializer(data=request.data)
    if serializer.is_valid(raise_exception=True):
        user = User(username=request.data["username"])
        user.set_password(request.data["password"])
        user.save()
        token = Token.objects.create(user=user)
        return Response({'user': serializer.data['username'], 'token': token.key})
    raise Exception("Ошибка регистрации")


class PostViewSet(viewsets.ModelViewSet):
    serializer_class = PostSerializer
    queryset = Post.objects.all()
    authentication_classes = [SessionAuthentication, BasicAuthentication, TokenAuthentication,]
    permission_classes = [IsAuthenticatedOrReadOnly]

    def create(self, request, *args, **kwargs):
        try:
            author = User.objects.get(username=request.data['author'])
            category = Category.objects.get(name=request.data['category'])
            post = Post(title=request.data['title'],
                        content=request.data['content'],
                        author=author,
                        category=category)
            post.save()
        except Exception as e:
            raise Exception(e)
        return Response("ok")


class CategoryViewSet(viewsets.ModelViewSet):
    serializer_class = CategorySerializer
    queryset = Category.objects.all()
    authentication_classes = [SessionAuthentication, BasicAuthentication, TokenAuthentication,]
    permission_classes = [AllowAny,]
