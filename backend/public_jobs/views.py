from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status, viewsets


# * Get models
from public_jobs.models import Job, Skill

# * get serializer
from public_jobs.serializers import JobModelSerializer, JobCreateSerializer, SkillSerializer

# Create your views here.


class Jobs(viewsets.ModelViewSet):

    queryset = Job.objects.filter(is_active=True)

    def get_serializer_class(self):
        if self.action in ['list', 'retrieve']:
            return JobModelSerializer
        return JobCreateSerializer

class SkillsViewSet(viewsets.ReadOnlyModelViewSet):
    queryset = Skill.objects.all().order_by('-ranking')
    serializer_class = SkillSerializer
