# Generated by Django 4.1.7 on 2023-10-23 09:56

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('creat0r', '0003_remove_account_user_account_phyllo_account_id_and_more'),
    ]

    operations = [
        migrations.AddField(
            model_name='platform',
            name='followers',
            field=models.IntegerField(blank=True, default=0, null=True),
        ),
        migrations.AddField(
            model_name='platform',
            name='likes',
            field=models.IntegerField(blank=True, default=0, null=True),
        ),
        migrations.AddField(
            model_name='platform',
            name='phyllo_profile_id',
            field=models.CharField(blank=True, default=None, max_length=250, null=True),
        ),
        migrations.AddField(
            model_name='platform',
            name='posts',
            field=models.IntegerField(blank=True, default=0, null=True),
        ),
        migrations.AddField(
            model_name='platform',
            name='views',
            field=models.IntegerField(blank=True, default=0, null=True),
        ),
    ]