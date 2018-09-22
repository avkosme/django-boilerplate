from django.db import models
from django.utils.translation import gettext_lazy as _
from django.template.defaultfilters import slugify
from unidecode import unidecode


class PagePublic(models.Manager):
    def get_queryset(self):
        return super().get_queryset().filter(status=True)


# Create your models here.
class Page(models.Model):
    objects = models.Manager()
    page_public = PagePublic()

    created_at = models.DateTimeField(
        auto_now_add=True,
        verbose_name=_('Время добавления'),
        help_text=_('Время добавления'),
    )
    name = models.CharField(
        verbose_name='Название страницы',
        help_text='Название страницы',
        blank=False,
        max_length=150,
    )
    slug = models.CharField(
        verbose_name='Url страницы',
        help_text='Url страницы',
        blank=True,
        default=False,
        max_length=250,
    )
    status = models.BooleanField(
        verbose_name='Статус',
        help_text='Статус активна/скрыта',
        default=False,
    )
    title_tag = models.TextField(
        verbose_name='Тег Title',
        help_text='Тег Title',
        blank=False,
        max_length=150,
    )
    meta_tag_description = models.TextField(
        verbose_name='Тег Description',
        help_text='Тег Description',
        blank=False,
        max_length=300,
    )
    meta_tag_keywords = models.TextField(
        verbose_name='Тег Keywords',
        help_text='Тег Keywords',
        blank=False,
        max_length=5000,
    )
    template = models.CharField(
        verbose_name=_('Название шаблона'),
        help_text=_('Название шаблона'),
        blank=True,
        max_length=30,
    )

    def __str__(self):
        return ''.join((str(self.name)))

    def save(self, *args, **kwargs):
        if self.slug is not '/' and self.slug is '':
            self.slug = slugify(unidecode(self.name))
        super(Page, self).save(*args, **kwargs)

    class Meta:
        verbose_name = _('Страницы')
        verbose_name_plural = _('Страницы')


class Content(models.Model):
    created_at = models.DateTimeField(
        auto_now_add=True,
        verbose_name=_('Время добавления'),
        help_text=_('Время добавления'),
    )
    name = models.CharField(
        verbose_name=_('Заголовок'),
        help_text=_('Заголовок'),
        blank=False,
        max_length=250,
    )
    status = models.BooleanField(
        verbose_name=_('Статус'),
        help_text=_('Статус активно/скрыто'),
        default=False,
    )
    content = models.TextField(
        verbose_name=_('Содержимое'),
        help_text=_('Содержимое'),
        blank=False,
        max_length=50000,
    )
    page = models.ForeignKey(
        Page,
        on_delete=models.CASCADE,
        verbose_name=_('Страницы'),
        help_text=_('Страницы'),
    )
    order = models.IntegerField(
        verbose_name=_('Сортировка'),
        help_text=_('Сортировка'),
        blank=False,
        default=0,
    )

    class Meta:
        verbose_name = _('Содержимое')
        verbose_name_plural = _('Содержимое')
