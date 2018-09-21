from uuid import uuid4
from django.db import models
from django.core.validators import RegexValidator
from rest_framework.authtoken.models import Token
from django.core.exceptions import ObjectDoesNotExist
from django.contrib.auth.models import AbstractUser, UserManager


class User(AbstractUser):
    objects = UserManager()

    @staticmethod
    def user_by_token(**kwargs):
        try:
            token = Token.objects.get(key=kwargs.get('token'))
        except ObjectDoesNotExist:
            user = User.objects.create_user(username=uuid4())
            token = Token.objects.create(user=user)

        user = User.objects.get(pk=token.user_id)

        return token, user


class Phone(models.Model):
    phone_regex = RegexValidator(
        regex=r'^\+?1?\d{9,10}$',
        message='Номер телефона должен иметь следующий формат: 9123456789'
    )

    number = models.CharField(
        validators=[phone_regex],
        max_length=12,
        blank=True,
        help_text='МобильныЙ телефон',
        verbose_name='МобильныЙ телефон',
    )

    user = models.ForeignKey(
        User,
        on_delete=models.CASCADE,
        help_text='Пользватель',
        verbose_name='Пользователь',
    )

    def __str__(self):
        return ' '.join((str(self.number), str(self.user)))
