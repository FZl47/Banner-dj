def BannerStyleSerializer(style):
    return {
        'float': style.float,
        'align_vertical': style.align_vertical,
        'align_horizontal': style.align_horizontal,
        'width': style.width,
        'height': style.height
    }


def BannerSerializer(banners):
    result = []

    for banner in banners:
        if banner.is_available():
            result.append({
                'id':banner.id,
                'name':banner.name,
                'image':banner.get_content(),
                'href':banner.href,
                'style': BannerStyleSerializer(banner.style)
            })

    return result
