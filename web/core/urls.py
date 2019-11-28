from django.contrib import admin
from django.conf import settings
from django.conf.urls import include, url
from django.urls import path, re_path
from django.conf.urls.static import static
from page.views import Page
from events.admin import event_admin_site

urlpatterns = [
    path('entity-admin/', admin.site.urls),
    path('event-admin/', event_admin_site.urls),
    re_path(r'(?P<slug>[0-9a-z.\-\[\]]+)/$', Page.as_view(), name='page'),
    path('', Page.as_view(), {'slug': '/'}, name='home'),
] + static(settings.STATIC_URL, document_root=settings.STATIC_ROOT)

if settings.DEBUG:
    import debug_toolbar
    urlpatterns = [
        url(r'^__debug__/', include(debug_toolbar.urls)),
    ] + urlpatterns

