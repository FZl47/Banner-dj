from django.urls import path

from . import views

app_name = 'dj_banner'
urlpatterns = [
    path('dj-banner', views.index),
    path('dj-banner/click', views.banner_click),
]
