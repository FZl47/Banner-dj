# DJ Banner

## 🌟 Slick Banner Ads for Django

#### How to Get Started

- ### in first step you need to install `dj_banner`
     ```commandline
       pip install dj_banner
    ```

- ### *add* `dj_banner` app to `INSTALLED_APPS`
  ```python
    # config.settings.py
    INSTALLED_APPS = [
      ...
      'dj_banner',
      ...
  ]
   ```
- ### *add*  urls to `setting urls`
   ```python
  # config.urls.py
  urlpatterns = [
    ...
    path('', include('dj_banner.urls')),
    ...
  ]
  ```
- ### *add* static directory in settings static
  ```python
  # config.settings.py
  STATICFILES_DIRS = [
    ...
    'dj_banner/static',
    ...
  ]
  ```


- ### **run migrate command**
  ```commandline
    python manage.py migrate
  ```
  
- ### setup and load static files in base template
  - add styles
    ```html
    <link rel="stylesheet" href="{% static 'dj_banner/css/index.css' %}">
    <!-- Or just hardcode the file path -->
    <link rel="stylesheet" href="Path/to/your/index.css">
    ```
  - add scripts
      ```html
    <script src="{% static 'dj_banner/js/index.js' %}"></script>
    <!-- Or point directly to the JS file -->
    <script src="Path/to/your/index.js"></script>
    ```
  - set backend address: Add the domain URL to your template like this

    ```html
    <script>
        const DJ_BANNER_BACKEND_URL = 'YOUR_BACKEND_ADDRESS' // local(default): http://127.0.0.1:8000
    </script>
    ```


- **Create Your Objects by DJANGO ADMIN**: Build and customize your banner setup:
  - **Page**: Define the page where your banner will pop up.
  - **Banner Style**: Pick different styles and sizes for your banner.
  - **Banner**: The main object where you set all your banner details.

---

**Tip** 📝\
The default small size for *Banner Style* is set to **768px**, but you can tweak it in the `index.js` file to whatever vibe you’re going for :)
