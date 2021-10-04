from django.conf.urls import include
from django.db import router
from django.urls import path
from rest_framework.routers import DefaultRouter
from public_jobs.views import Jobs, SkillsViewSet


router = DefaultRouter()
router.register(r'skills', SkillsViewSet, basename='skills')
router.register(r'jobs', Jobs, basename='jobs')

urlpatterns = [
    path('', include(router.urls)),
]
