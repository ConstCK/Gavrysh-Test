from django.contrib.auth.models import User
from django.db import models


class Post(models.Model):
    title = models.CharField(max_length=128, verbose_name='Заголовок')
    content = models.TextField(verbose_name='Пост')
    created_at = models.DateTimeField(auto_now=True, verbose_name='Дата создания')
    author = models.ForeignKey(User, on_delete=models.CASCADE, verbose_name='Автор')
    category = models.ForeignKey('Category', on_delete=models.CASCADE, verbose_name='Категория', related_name='posts')

    def __str__(self):
        return f'Пост : {self.title}'

    class Meta:
        verbose_name = 'Пост'
        verbose_name_plural = 'Посты'
        ordering = ['-created_at',]


class Category(models.Model):
    name = models.CharField(max_length=128, unique=True, verbose_name='Категория')

    def __str__(self):
        return f'Категория : {self.name}'

    class Meta:
        verbose_name = 'Категория'
        verbose_name_plural = 'Категории'
        ordering = ['name',]
