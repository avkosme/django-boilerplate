# Generated by Django 2.2.3 on 2019-10-19 20:49

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Category',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=100)),
            ],
            options={
                'verbose_name_plural': 'Categories',
            },
        ),
        migrations.CreateModel(
            name='Origin',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=100)),
            ],
        ),
        migrations.CreateModel(
            name='Villain',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=100)),
                ('alternative_name', models.CharField(blank=True, max_length=100, null=True)),
                ('gender', models.CharField(choices=[('Male', 'Male'), ('Female', 'Female'), ('Others/Unknown', 'Others/Unknown')], max_length=100)),
                ('description', models.TextField()),
                ('is_immortal', models.BooleanField(default=False)),
                ('malevolence_factor', models.PositiveSmallIntegerField(help_text='How malevolent this villain is?')),
                ('power_factor', models.PositiveSmallIntegerField(help_text='How powerful this villain is?')),
                ('is_unique', models.BooleanField(default=True)),
                ('count', models.PositiveSmallIntegerField(default=1)),
                ('category', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='entities.Category')),
                ('origin', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='entities.Origin')),
            ],
            options={
                'abstract': False,
            },
        ),
        migrations.CreateModel(
            name='Hero',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=100)),
                ('alternative_name', models.CharField(blank=True, max_length=100, null=True)),
                ('gender', models.CharField(choices=[('Male', 'Male'), ('Female', 'Female'), ('Others/Unknown', 'Others/Unknown')], max_length=100)),
                ('description', models.TextField()),
                ('is_immortal', models.BooleanField(default=True)),
                ('benevolence_factor', models.PositiveSmallIntegerField(help_text='How benevolent this hero is?')),
                ('arbitrariness_factor', models.PositiveSmallIntegerField(help_text='How arbitrary this hero is?')),
                ('category', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='entities.Category')),
                ('father', models.ForeignKey(blank=True, null=True, on_delete=django.db.models.deletion.SET_NULL, related_name='+', to='entities.Hero')),
                ('mother', models.ForeignKey(blank=True, null=True, on_delete=django.db.models.deletion.SET_NULL, related_name='+', to='entities.Hero')),
                ('origin', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='entities.Origin')),
                ('spouse', models.ForeignKey(blank=True, null=True, on_delete=django.db.models.deletion.SET_NULL, related_name='+', to='entities.Hero')),
            ],
            options={
                'verbose_name_plural': 'Heroes',
            },
        ),
    ]
