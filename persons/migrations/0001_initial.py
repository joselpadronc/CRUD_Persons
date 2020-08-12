# Generated by Django 3.0.8 on 2020-07-22 02:32

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Person',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=255)),
                ('id_card', models.IntegerField(default=0, max_length=8)),
                ('nationality', models.CharField(max_length=255)),
                ('age', models.IntegerField(default=0, max_length=3)),
            ],
        ),
    ]
