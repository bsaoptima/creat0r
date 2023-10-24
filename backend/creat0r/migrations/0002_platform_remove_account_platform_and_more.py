# Generated by Django 4.1.7 on 2023-10-16 13:14

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('creat0r', '0001_initial'),
    ]

    operations = [
        migrations.CreateModel(
            name='Platform',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('phyllo_id', models.CharField(blank=True, default=None, max_length=250, null=True)),
                ('name', models.CharField(blank=True, default=None, max_length=250, null=True)),
                ('logo_url', models.CharField(blank=True, default=None, max_length=250, null=True)),
            ],
        ),
        migrations.RemoveField(
            model_name='account',
            name='platform',
        ),
        migrations.RemoveField(
            model_name='user',
            name='username',
        ),
        migrations.AddField(
            model_name='account',
            name='profile_pic_url',
            field=models.CharField(blank=True, default=None, max_length=250, null=True),
        ),
        migrations.AddField(
            model_name='account',
            name='user',
            field=models.ForeignKey(default=None, on_delete=django.db.models.deletion.CASCADE, to='creat0r.user'),
            preserve_default=False,
        ),
        migrations.AddField(
            model_name='account',
            name='username',
            field=models.CharField(blank=True, default=None, max_length=250, null=True),
        ),
        migrations.AddField(
            model_name='user',
            name='phyllo_user_id',
            field=models.CharField(blank=True, default=None, max_length=250, null=True),
        ),
        migrations.AddField(
            model_name='user',
            name='phyllo_user_name',
            field=models.CharField(blank=True, default=None, max_length=250, null=True),
        ),
        migrations.AlterField(
            model_name='user',
            name='sdk_token',
            field=models.CharField(blank=True, default=None, max_length=250, null=True),
        ),
    ]
