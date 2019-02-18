from ingredient.models import Ingredient
from ingredient.serializers import IngredientSerializer
from rest_framework import generics
from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework.reverse import reverse
from rest_framework import viewsets


@api_view(['GET'])
def api_root(request, format=None):
    return Response({
        'ingredients': reverse('ingredient-list', request=request, format=format)
    })

from rest_framework.decorators import action
from rest_framework.response import Response

class IngredientViewSet(viewsets.ModelViewSet):
    """
    This viewset automatically provides `list`, `create`, `retrieve`,
    `update` and `destroy` actions.

    Additionally we also provide an extra `highlight` action.
    """
    queryset = Ingredient.objects.all()
    serializer_class = IngredientSerializer

    def get_queryset(self):
        """ allow rest api to filter by submissions """
        queryset = Ingredient.objects.all()
        contains = self.request.query_params.get('contains', None)
        if contains is not None:
            queryset = queryset.filter(name__icontains=contains)
        
        return queryset