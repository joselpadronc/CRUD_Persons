from django.urls import path
from .views import home_page, list_persons_view, register_person_view, edit_person_view, delete_person_view

urlpatterns = [
    path('', home_page, name="home_page"),
    path('list-persons/', list_persons_view, name="list_persons"),
    path('registro/', register_person_view, name="register_person"),
    path('editar/<id>/', edit_person_view, name="edit_person"),
    path('eliminar/<id>/', delete_person_view, name="delete_person"),
]
