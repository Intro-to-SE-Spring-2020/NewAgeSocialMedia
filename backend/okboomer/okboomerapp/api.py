from .models import Boom
from rest_framework import viewsets, permissions
from .serializers import BoomSerializer
from django.http import HttpResponse, JsonResponse

#Boom Viewset

class BoomViewSet(viewsets.ModelViewSet):


    def create(self, request):
        print(request.data)
        return JsonResponse({'foo': 'bar'})

    def list(self, request):
        print('inside BoomViewSet')
        queryset = Boom.objects.all()  # select * from Book
        # Boom.query.filter(username=)
        permission_classes = [
            permissions.AllowAny
        ]
        serializer_class = BoomSerializer

    def retrieve(self, request, pk=None):
        pass

    def update(self, request, pk=None):
        pass

    def partial_update(self, request, pk=None):
        pass

    def destroy(self, request, pk=None):
        pass

