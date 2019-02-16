from django.db import models

# Create your models here.

class Ingredient(models.Model):
    created = models.DateTimeField(auto_now_add=True)
    name = models.CharField(max_length=100, blank=False)
    description = models.TextField(blank=True, default='')

    class Meta:
        ordering = ('created',)