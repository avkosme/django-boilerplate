from django.views import View
from django.http import HttpResponse
from django.template import loader
from page.models import Page as PageModel


class Page(View):
    @staticmethod
    def get(request, **kwargs):
        try:
            page = PageModel.page_public.filter(slug=kwargs.get('slug')).get()
        except PageModel.DoesNotExist:
            page = PageModel()
        template = loader.get_template(page.template if page.template else 'index.html')
        return HttpResponse(template.render({'page': page}, request))
