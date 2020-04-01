from rest_framework import serializers
from okboomerapp.models import Boom

class BoomSerializer(serializers.ModelSerializer):
    class Meta:
        model = Boom
        fields= '__all__'
