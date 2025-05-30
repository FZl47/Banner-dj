from django.contrib import admin
from . import models

admin.site.register(models.Page)
admin.site.register(models.BannerStyle)
admin.site.register(models.Banner)
