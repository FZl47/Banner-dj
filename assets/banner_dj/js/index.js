function _Banner_dj_init() {
    // let ajax = new XMLHttpRequest();
    // ajax.onreadystatechange = function () {
    //     if (this.readyState == 4 && this.status == 200) {
    //         let data = JSON.parse(this.responseText)
    //         console.log(data)
    //     }
    // };
    // ajax.open("POST", `${BACKEND_URL_BANNER_DJ}/banner-dj`,true);
    // ajax.send();


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
                CREATE_BANNER_DJ(banner)
            }
        }
    })

}

_Banner_dj_init()


function CREATE_BANNER_DJ(banner) {
    let image_element = document.createElement('img')
    image_element.classList.add('banner-dj-el')
    image_element.setAttribute('banner-id', banner.id)
    image_element.title = banner.name
    image_element.alt = banner.name
    image_element.src = banner.image
    // Style
    image_element.style.width = banner.style.width
    image_element.style.height = banner.style.height


    document.body.appendChild(image_element)
}