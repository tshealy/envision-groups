"""envision URL Configuration

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/1.8/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  url(r'^$', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  url(r'^$', Home.as_view(), name='home')
Including another URLconf
    1. Add an import:  from blog import urls as blog_urls
    2. Add a URL to urlpatterns:  url(r'^blog/', include(blog_urls))
"""
from django.conf.urls import include, url
from django.contrib import admin
from django.contrib.auth.forms import UserCreationForm
from django.views.generic.edit import CreateView
from django.contrib.auth.decorators import login_required
from django.views.generic import TemplateView
from engineer import views as engineer_views

urlpatterns = [
    url(r'^admin/', include(admin.site.urls)),
    url('^', include('django.contrib.auth.urls')),
    url(r'^rating/(?P<pk>\d+)/$', engineer_views.display_engineer, name="engineer_detail"),
    url(r'^$',engineer_views.EngineerCreate.as_view(), name='engineer_add'),
    url(r'^version/(?P<pk>\d+)/$', engineer_views.pick_version, name="pick_version"),
    # url(r'^$', TemplateView.as_view(template_name='index.html'), name='index'),
    # url(r'^ratings/',engineer_views.RatingCreate.as_view(), name='rating_add'),

    # url(r'^ratings/(?P<engineer_id>\d+)$',engineer_views.RatingCreate.as_view(), name='rating_add'),
]

