# Generated by Django 3.2.4 on 2021-06-30 21:52

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Review',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('company', models.CharField(default=False, max_length=50)),
                ('location', models.CharField(default=False, max_length=50)),
                ('job_title', models.CharField(default=False, max_length=50)),
                ('rating', models.IntegerField(default=False)),
                ('review', models.TextField(blank=True, default='', max_length=500, null=True)),
                ('created_at', models.DateTimeField(auto_now_add=True)),
            ],
        ),
    ]