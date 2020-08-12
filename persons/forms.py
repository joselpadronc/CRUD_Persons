from django import forms
from django.forms import ModelForm
from persons.models import Person

class PersonForm(ModelForm):

	class Meta:
		model = Person
		fields = ['name', 'id_card', 'nationality', 'age']