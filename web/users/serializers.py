from rest_framework import serializers
from users.models import User, Phone
from core.helpers import to_snake_case


class PhoneSerializer(serializers.ModelSerializer):
    class Meta:
        model = Phone
        fields = ('number',)

    def save(self, **kwargs):
        return Phone.objects.create(number=kwargs.get('data').get('phone_number'), user=kwargs.get('user'))


class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ('first_name', 'email')

    def update(self, instance, validated_data):
        user = instance
        user.username = validated_data.get('email')
        user.first_name = validated_data.get('first_name')
        user.save()
        return user

    def create(self, validated_data):
        return User.create_user(validated_data.get('email'))

    @staticmethod
    def clean_data(data):
        r = {}
        for key, value in data.items():
            r[to_snake_case(key)] = value

        return r
