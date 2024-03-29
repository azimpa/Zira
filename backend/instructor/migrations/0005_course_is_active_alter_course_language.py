# Generated by Django 5.0.1 on 2024-02-25 19:02

from django.db import migrations, models


class Migration(migrations.Migration):
    dependencies = [
        ("instructor", "0004_remove_course_video_url_course_thumbnail_and_more"),
    ]

    operations = [
        migrations.AddField(
            model_name="course",
            name="is_active",
            field=models.BooleanField(blank=True, default=True, null=True),
        ),
        migrations.AlterField(
            model_name="course",
            name="language",
            field=models.CharField(
                choices=[
                    ("english", "English"),
                    ("malayalam", "Malayalam"),
                    ("tamil", "Tamil"),
                ],
                max_length=50,
            ),
        ),
    ]
