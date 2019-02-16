from rest_framework import serializers
from ingredient.models import Ingredient

class IngredientSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = Ingredient
        fields = ('url', 'name', 'description')