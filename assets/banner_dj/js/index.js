const SIZE_SMALL_SCREEN_BANNERDJ = 768
let media_query_smallsize_banner = window.matchMedia(`(max-width: ${SIZE_SMALL_SCREEN_BANNERDJ}px)`)
chanageSizeWindowQueryBanner(media_query_smallsize_banner)
media_query_smallsize_banner.addListener(chanageSizeWindowQueryBanner)



function GetBannerDJListHide() {
    return _GetCookieByName('banner-dj-list-hide')
}

function _Banner_dj_init() {
    function can_show(banner_id) {
        let list_banner_id_hide = GetBannerDJListHide() || "[]"
        list_banner_id_hide = JSON.parse(list_banner_id_hide)
        if (list_banner_id_hide.includes(String(banner_id))) {
            return false
        }
        return true
    }


    let data = {
        'url': window.location.pathname
    }
    fetch(`${BACKEND_URL_BANNER_DJ}/banner-dj`, {
        method: 'POST',
        body: JSON.stringify(data)
    }).then(function (response) {
        return response.json()
    }).then(function (response) {
        let status = response.status
        let banners = response.banners
        if (status == 200) {
            for (let banner of banners) {
                if (can_show(banner.id)) {
                    CREATE_BANNER_DJ(banner)
                }
            }
            chanageSizeWindowQueryBanner(chanageSizeWindowQueryBanner)
        }
    })

}

_Banner_dj_init()


function CREATE_BANNER_DJ(banner) {
    let banner_element = document.createElement('div')

    let style_top = ``
    let style_bottom = ``
    let style_left = ``
    let style_right = ``
    let style_translate_x = '0'
    let style_translate_y = '0'

    let align_vertical = banner.style.align_vertical
    let align_horizontal = banner.style.align_horizontal


    if (align_horizontal == 'top') {
        style_top = '0'
    } else if (align_horizontal == 'middle') {
        style_top = '50%'
        style_translate_y = '-50%'
    } else if (align_horizontal == 'bottom') {
        style_bottom = '0'
    }

    if (align_vertical == 'right') {
        style_right = '0'
    } else if (align_vertical == 'center') {
        style_right = '50%'
        style_translate_x = '50%'
    } else if (align_vertical == 'left') {
        style_left = '0'
    }

    let style = `
        width:${banner.style.width};
        height:${banner.style.height};
        top:${style_top};
        bottom:${style_bottom};
        left:${style_left};
        right:${style_right};
        transform:translate(${style_translate_x},${style_translate_y})
    `

    let style_image = `
        object-fit:${banner.style.image_fit};
    `

    banner_element.setAttribute('width-smallsize', banner.style.width_smallsize)
    banner_element.setAttribute('height-smallsize', banner.style.height_smallsize)


    banner_element.style = style
    banner_element.setAttribute('style-init', style)
    banner_element.id = `banner-id-${banner.id}`
    banner_element.classList.add('banner-dj-el')
    banner_element.innerHTML = `
        <div>
            <button title="close" onclick="HideBannerDJ('${banner.id}')">
                <i class="fa fa-minus"></i>
            </button>
            <img src="${banner.image}" alt="${banner.name}" title="${banner.name}" onclick="GoToUrlBanner('${banner.id}')" banner-id="${banner.id}" style="${style_image}">
            <a href="${banner.href}" target="_blank" hidden></a>
        </div>
    `

    document.body.appendChild(banner_element)
}

function GoToUrlBanner(banner_id) {
    fetch(`${BACKEND_URL_BANNER_DJ}/banner-dj/click`, {
        method: 'POST',
        body: JSON.stringify({'banner_id': banner_id}),
    }).then(function (response) {
        return response.json()
    }).then(function (response) {
        document.querySelector(`#banner-id-${banner_id}`).querySelector('a').click()
    })
}

function HideBannerDJ(banner_id) {
    let ids = GetBannerDJListHide() || "[]"
    ids = JSON.parse(ids)
    ids.push(banner_id)
    ids = JSON.stringify(ids)
    _SetCookie('banner-dj-list-hide', ids)
    // Hide
    document.querySelector(`#banner-id-${banner_id}`).classList.add('animation-class-hide-banner-dj')
}


function _GetCookieByName(Name) {
    let Res = null
    let Cookie = document.cookie
    for (let i of Cookie.split(';')) {
        let S1 = i.split('=')[0]
        let S2 = i.split('=')[1]
        if (S1 == Name || S1 == ` ${Name}` || S1 == `${Name} `) {
            Res = S2
        }
    }
    return Res
}

function _SetCookie(Name, Value, ExpireDay = 30, Path = '/') {
    let T = new Date()
    T.setTime(T.getTime() + (ExpireDay * 24 * 60 * 60 * 1000))
    T = T.toUTCString()
    if (ExpireDay == 'Session') {
        T = ''
    }
    document.cookie = `${Name}=${Value};expires=${T};path=${Path}`
}

function chanageSizeWindowQueryBanner(x) {
    let allBanner = document.querySelectorAll('.banner-dj-el')
    if (x.matches || window.outerWidth < SIZE_SMALL_SCREEN_BANNERDJ) {
        for (let banner of allBanner) {
            banner.style.width = banner.getAttribute('width-smallsize')
            banner.style.height = banner.getAttribute('height-smallsize')
        }
    } else {
        for (let banner of allBanner) {
            banner.style = banner.getAttribute('style-init')
        }
    }
}

