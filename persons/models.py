from django.db import models

# Create your models here.

class Person(models.Model):
	name = models.CharField(max_length=255)
	id_card = models.IntegerField(default=0)
	nationality = models.CharField(max_length=255)
	age = models.IntegerField(default=0)


	def __str__(self):
		return self.name