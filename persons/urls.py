from django.urls import path
from .views import home_page, register_person, edit_person, delete_person, home_page_temaplate

urlpatterns = [
    path('', home_page_temaplate, name="home_page_template"),
    path('list-persons/', home_page, name="home_page"),
    path('registro/', register_person, name="register_person"),
    path('editar/<id>/', edit_person, name="edit_person"),
    path('eliminar/<id>/', delete_person, name="delete_person"),
]

