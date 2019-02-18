from django.db import models
from ingredient.models import Ingredient

class Cake(models.Model):
    created = models.DateTimeField(auto_now_add=True)
    name = models.CharField(max_length=100, blank=False)
    description = models.TextField(blank=True, default='')
    ingredients = models.ManyToManyField(Ingredient, blank=True)

    class Meta:
        ordering = ('created',)