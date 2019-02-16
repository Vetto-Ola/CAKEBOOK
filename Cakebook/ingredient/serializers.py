from rest_framework import serializers
from ingredient.models import Ingredient

class IngredientSerializer(serializers.Serializer):
    id =  serializers.IntegerField(read_only=True)
    name = serializers.CharField(required=True, allow_blank=False, max_length=100)
    description = serializers.CharField()

    def create(self, validated_data):
        """
        Create and return a new `Snippet` instance, given the validated data.
        """
        return Ingredient.objects.create(**validated_data)

    def update(self, instance, validated_data):
        """
        Update and return an existing `Snippet` instance, given the validated data.
        """
        instance.name = validated_data.get('name', instance.title)
        instance.description = validated_data.get('description', instance.code)
        instance.save()
        return instance