from django.http import JsonResponse
from django.views.decorators.csrf import csrf_exempt
from .serializers import BannerSerializer
from .models import Banner, Page
import json


@csrf_exempt
def index(request):
    try:
        data = json.loads(request.body)
    except:
        data = request.data

    context = {}
    status_code = 0
    url = data.get('url')
    page = Page.objects.filter(url__icontains=url).last()
    if page:
        status_code = 200
        context = {
            'banners': BannerSerializer(page.banner_set.all())
        }
    else:
        status_code = 404

    context['status'] = status_code
    return JsonResponse(context)


@csrf_exempt
def banner_click(request):
    try:
        data = json.loads(request.body)
    except:
        data = request.data

    banner_id = data.get('banner_id') or 0
    banner = Banner.objects.filter(id=banner_id).first()
    if banner:
        banner.count_click += 1
        banner.save()
    return JsonResponse({})


