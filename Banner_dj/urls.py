from django.urls import path
from . import views

app_name = 'Banner_dj'
urlpatterns = [
    path('banner-dj',views.index)
]