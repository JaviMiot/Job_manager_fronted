from django.contrib import admin
from public_jobs.models import Skill, Job
# Register your models here.


@admin.register(Job)
class JobAdmin(admin.ModelAdmin):
    list_display = ('title', 'description', 'skills')

    def skills(self, obj):
        return "\n".join([f'{skill.name},' for skill in obj.skill.all()])


@admin.register(Skill)
class SkillAdmin(admin.ModelAdmin):

    list_display = ('name', 'Ranking')

    def Ranking(self, obj):
        return len(obj.job_set.all())
