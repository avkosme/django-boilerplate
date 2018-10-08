from django.contrib import admin
from django.conf import settings
from django.urls import path, re_path
from django.conf.urls.static import static
from page.views import Page

urlpatterns = [
    path('admin/', admin.site.urls),
    re_path(r'(?P<slug>[0-9a-z.\-\[\]]+)/$', Page.as_view(), name='page'),
    path('', Page.as_view(), {'slug': '/'}, name='home'),
] + static(settings.STATIC_URL, document_root=settings.STATIC_ROOT)
