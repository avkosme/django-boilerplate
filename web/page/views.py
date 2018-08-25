from django.http import HttpResponse
from django.template import loader
from django.views import View


# Create your views here.

class Index(View):
    @staticmethod
    def get(request, **kwargs):
        template = loader.get_template('index.html')
        return HttpResponse(template.render({}, request))
