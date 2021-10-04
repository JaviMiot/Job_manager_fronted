from django.db.models.query import QuerySet
from rest_framework import serializers
from public_jobs.models import Job, Skill


class JobModelSerializer(serializers.ModelSerializer):
    """Model Serializer to list and get description for jobs
    Use en list() and retrieve()
    """
    skill = serializers.StringRelatedField(many=True)

    class Meta:
        model = Job
        fields = '__all__'


class SkillSerializer(serializers.ModelSerializer):
    """Model serializer to skills use to show the list skills
    order_by Ranking"""
    class Meta:
        model = Skill
        fields = ('id', 'name', 'ranking')
        order_by = ('name',)


class JobCreateSerializer(serializers.ModelSerializer):
    """Model Serializer Job use to Create and update Jobs"""
    skill = SkillSerializer(many=True)

    class Meta:
        model = Job
        exclude = ('is_active',)

    def update(self, instance, data):
        instance.title = data['title']
        instance.description = data['description']
        new_skills_data = data.pop('skill')

        instance.skill.clear()  # Remove skills

        # update skills
        job_with_skills = self.add_skills(instance, new_skills_data)

        return job_with_skills

    def create(self, data):

        skills_data = data.pop('skill')
        job = Job.objects.create(**data)

        job_with_skills = self.add_skills(job, skills_data)

        return job_with_skills

    def add_skills(self, instance, skills):
        """Method to add skills

        Args:
            instance (models.db): instance of Job to add the skills
            skills (array of Skill objects): skills to add to

        Returns:
            model instance: return the Job with the skills
        """
        for skill in skills:
            skill['name'] = skill['name'].lower()

            try:
                new_skill = Skill.objects.get(name=skill['name'])
            except:
                new_skill = Skill.objects.create(**skill)

            new_skill.ranking += 1
            new_skill.save()
            instance.skill.add(new_skill)

        return instance
