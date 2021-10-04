from django.db import models

# Create your models here.


class ComunModel(models.Model):
    date_modified = models.DateTimeField(
        auto_now=True, help_text='date and time of the last modification')
    date_created = models.DateTimeField(
        auto_now_add=True, help_text='date and time when create de job')
    is_active = models.BooleanField(default=True)

    class Meta:
        abstract = True
        get_latest_by = 'date_created'
        ordering = ('-date_created', '-date_modified')


class Skill(ComunModel):
    name = models.CharField(max_length=50, null=False)

    def __str__(self):
        return self.name


class Job(ComunModel):
    title = models.CharField(max_length=100, null=False)
    description = models.TextField(max_length=1000, null=False)
    skill = models.ManyToManyField(Skill)

    def __str__(self):
        return '''title: {title} 
        description: {description}
        '''.format(title=self.title, description=self.description)

