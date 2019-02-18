from rest_framework import serializers
from cake.models import Cake

class CakeSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = Cake
        fields = ('url', 'name', 'description','ingredients')