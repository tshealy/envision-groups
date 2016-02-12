# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import models, migrations


class Migration(migrations.Migration):

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Engineer',
            fields=[
                ('id', models.AutoField(verbose_name='ID', serialize=False, auto_created=True, primary_key=True)),
                ('name', models.TextField(null=True, blank=True)),
                ('version', models.IntegerField(null=True)),
                ('research', models.IntegerField(default=1, choices=[(0, 'No'), (1, 'Yes')])),
            ],
        ),
        migrations.CreateModel(
            name='Rating',
            fields=[
                ('id', models.AutoField(verbose_name='ID', serialize=False, auto_created=True, primary_key=True)),
                ('total_time', models.IntegerField(default=0)),
                ('QL1_2_inc', models.IntegerField(default=0, choices=[(0, 'Include'), (1, 'Exclude')])),
                ('QL1_2_loa', models.IntegerField(default=0, choices=[(0, 'No Added Value'), (1, 'Improved'), (2, 'Enhanced'), (5, 'Superior'), (13, 'Conserving'), (16, 'Restorative')])),
                ('QL1_2_exp', models.TextField(max_length=1000, null=True, blank=True)),
                ('QL2_3_inc', models.IntegerField(default=0, choices=[(0, 'Include'), (1, 'Exclude')])),
                ('QL2_3_loa', models.IntegerField(default=0, choices=[(0, 'No Added Value'), (1, 'Improved'), (2, 'Enhanced'), (4, 'Superior'), (8, 'Conserving'), (11, 'Restorative')])),
                ('QL2_3_exp', models.TextField(max_length=1000, null=True, blank=True)),
                ('QL2_5_inc', models.IntegerField(default=0, choices=[(0, 'Include'), (1, 'Exclude')])),
                ('QL2_5_loa', models.IntegerField(default=0, choices=[(0, 'No Added Value'), (1, 'Improved'), (3, 'Enhanced'), (6, 'Superior'), (12, 'Conserving'), (15, 'Restorative')])),
                ('QL2_5_exp', models.TextField(max_length=1000, null=True, blank=True)),
                ('QL3_2_inc', models.IntegerField(default=0, choices=[(0, 'Include'), (1, 'Exclude')])),
                ('QL3_2_loa', models.IntegerField(default=0, choices=[(0, 'No Added Value'), (1, 'Improved'), (3, 'Enhanced'), (6, 'Superior'), (11, 'Conserving'), (14, 'Restorative')])),
                ('QL3_2_exp', models.TextField(max_length=1000, null=True, blank=True)),
                ('QL3_3_inc', models.IntegerField(default=0, choices=[(0, 'Include'), (1, 'Exclude')])),
                ('QL3_3_loa', models.IntegerField(default=0, choices=[(0, 'No Added Value'), (1, 'Improved'), (3, 'Enhanced'), (6, 'Superior'), (11, 'Conserving'), (13, 'Restorative')])),
                ('QL3_3_exp', models.TextField(max_length=1000, null=True, blank=True)),
                ('NW1_2_inc', models.IntegerField(default=0, choices=[(0, 'Include'), (1, 'Exclude')])),
                ('NW1_2_loa', models.IntegerField(default=0, choices=[(0, 'No Added Value'), (1, 'Improved'), (4, 'Enhanced'), (9, 'Superior'), (14, 'Conserving'), (18, 'Restorative')])),
                ('NW1_2_exp', models.TextField(max_length=1000, null=True, blank=True)),
                ('NW2_3_inc', models.IntegerField(default=0, choices=[(0, 'Include'), (1, 'Exclude')])),
                ('NW2_3_loa', models.IntegerField(default=0, choices=[(0, 'No Added Value'), (1, 'Improved'), (4, 'Enhanced'), (9, 'Superior'), (14, 'Conserving'), (18, 'Restorative')])),
                ('NW2_3_exp', models.TextField(max_length=1000, null=True, blank=True)),
                ('NW3_4_inc', models.IntegerField(default=0, choices=[(0, 'Include'), (1, 'Exclude')])),
                ('NW3_4_loa', models.IntegerField(default=0, choices=[(0, 'No Added Value'), (3, 'Improved'), (6, 'Enhanced'), (9, 'Superior'), (15, 'Conserving'), (19, 'Restorative')])),
                ('NW3_4_exp', models.TextField(max_length=1000, null=True, blank=True)),
                ('CR1_1_inc', models.IntegerField(default=0, choices=[(0, 'Include'), (1, 'Exclude')])),
                ('CR1_1_loa', models.IntegerField(default=0, choices=[(0, 'No Added Value'), (4, 'Improved'), (7, 'Enhanced'), (13, 'Superior'), (18, 'Conserving'), (25, 'Restorative')])),
                ('CR1_1_exp', models.TextField(max_length=1000, null=True, blank=True)),
                ('CR2_2_inc', models.IntegerField(default=0, choices=[(0, 'Include'), (1, 'Exclude')])),
                ('CR2_2_loa', models.IntegerField(default=0, choices=[(0, 'No Added Value'), (2, 'Improved'), (6, 'Enhanced'), (12, 'Superior'), (16, 'Conserving'), (20, 'Restorative')])),
                ('CR2_2_exp', models.TextField(max_length=1000, null=True, blank=True)),
                ('engineer', models.ForeignKey(to='engineer.Engineer')),
            ],
        ),
    ]
