# Generated by Django 3.2 on 2022-08-05 21:04

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('Banner_dj', '0001_initial'),
    ]

    operations = [
        migrations.AlterField(
            model_name='bannerstyle',
            name='height',
            field=models.CharField(default='auto', help_text='You can set "auto" or percentage or pixle value', max_length=10),
        ),
        migrations.AlterField(
            model_name='bannerstyle',
            name='width',
            field=models.CharField(default='auto', help_text='You can set "auto" or percentage or pixle value', max_length=10),
        ),
    ]