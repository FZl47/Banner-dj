from django.urls import path
from . import views

app_name = 'Banner_dj'
urlpatterns = [
    path('banner-dj',views.index),
    path('banner-dj/click',views.banner_click),
]