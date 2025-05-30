def BannerStyleSerializer(style):
    return {
        'align_vertical': style.align_vertical,
        'align_horizontal': style.align_horizontal,
        'width': style.width,
        'height': style.height,
        'width_smallsize': style.width_smallsize,
        'height_smallsize': style.height_smallsize,
        'image_fit': style.image_fit,
    }


def BannerSerializer(banners):
    result = []

    for banner in banners:
        if banner.is_available():
            result.append({
                'id': banner.id,
                'name': banner.name,
                'image': banner.get_content(),
                'href': banner.href,
                'style': BannerStyleSerializer(banner.style)
            })

    return result
