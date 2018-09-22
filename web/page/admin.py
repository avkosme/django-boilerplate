from django.contrib import admin
from django import forms
from page.models import Page, Content


class PageAdmin(admin.ModelAdmin):
    list_display = ['name', 'status', 'template']
    list_filter = ['name', 'status', 'template']


class ContentAdmin(admin.ModelAdmin):
    list_display = ['name', 'status']
    list_filter = ['status']
    search_fields = ['content']

    class Media:
        js = ('js/tinymce/tinymce.min.js', 'js/tinymce/tiny-init.js')

    class CustomModelChoiceField(forms.ModelChoiceField):
        def label_from_instance(self, obj):
            return obj.name

    def formfield_for_foreignkey(self, db_field, request, **kwargs):
        if db_field.name == 'page':
            return self.CustomModelChoiceField(queryset=Page.objects)

        return super(ContentAdmin, self).formfield_for_foreignkey(
            db_field, request, **kwargs
        )


admin.site.register(Page, PageAdmin)
admin.site.register(Content, ContentAdmin)
