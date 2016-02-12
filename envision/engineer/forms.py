__author__ = 'trippshealy'
from django import forms
from django.contrib.auth.models import User
from .models import Engineer, Rating


class EngineerForm(forms.ModelForm):
    name = forms.CharField()
    version = forms.CharField()
    research = forms.IntegerField

    class Meta:
        model = Engineer
        fields = ('name', 'version', 'research')


class RatingForm(forms.ModelForm):

    class Meta:
        model = Rating
        fields = ['total_time',
            'QL1_2_inc', 'QL1_2_loa', 'QL1_2_exp',
            'QL2_3_inc', 'QL2_3_loa', 'QL2_3_exp',
            'QL2_5_inc', 'QL2_5_loa', 'QL2_5_exp',
            'QL3_2_inc', 'QL3_2_loa', 'QL3_2_exp',
            'QL3_3_inc', 'QL3_3_loa', 'QL3_3_exp',
            'NW1_2_inc', 'NW1_2_loa', 'NW1_2_exp',
            'NW2_3_inc', 'NW2_3_loa', 'NW2_3_exp',
            'NW3_4_inc', 'NW3_4_loa', 'NW3_4_exp',
            'CR1_1_inc', 'CR1_1_loa', 'CR1_1_exp',
            'CR2_2_inc', 'CR2_2_loa', 'CR2_2_exp',]


