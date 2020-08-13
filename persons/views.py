# Imports of lenguage
import json

# Imports of framework
from django.shortcuts import render, redirect
from django.core.paginator import Paginator
from django.http import HttpRequest, HttpResponse

# Imports of local
from persons.forms import PersonForm
from persons.models import Person
from django.contrib.auth.decorators import login_required

# Create your views here.

def home_page(request):
	persons = Person.objects.all()
	data = {
		'persons':persons
	}
	template_name = 'index.html'
	return render(request, template_name, data)


def list_persons_view(request):
	persons = Person.objects.all()

	list_persons = []

	for person in persons:
		data_person = {}
		data_person['id'] = person.id
		data_person['name'] = person.name
		data_person['id_card'] = person.id_card
		data_person['nationality'] = person.nationality
		data_person['age'] = person.age

		list_persons.append(data_person)

	data = json.dumps(list_persons)
	print (type(data))
	return HttpResponse(data, 'application/json')


@login_required
def register_person_view(request):
	data = {
		'form':PersonForm()
	}

	if request.method == 'POST':
		form = PersonForm(request.POST)

		if form.is_valid():
			form.save()
			data ['message'] = "Persona guardada correctamente"

	return render(request, 'register.html', data)


@login_required
def edit_person_view(request, id):
	person = Person.objects.get(id=id)

	data = {
		'form':PersonForm(instance=person)
	}

	if request.method == 'POST':
		form = PersonForm(request.POST, instance=person)

		if form.is_valid():
			form.save()
			data['message'] = 'Persona modificada correctamente'
			data['form'] = form

	return render(request, 'edit.html', data)


@login_required
def delete_person_view(request, id):
	person = Person.objects.get(id=id)

	person.delete()

	return redirect(to='home_page')