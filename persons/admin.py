from django.contrib import admin
from .models import Person

# Register your models here.
class PersonsAdmin(admin.ModelAdmin):
	list_display = ['name', 'id_card', 'nationality', 'age']

admin.site.register(Person, PersonsAdmin)