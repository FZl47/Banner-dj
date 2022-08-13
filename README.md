# Banner-dj
### Banner ADS for django
## بنر تبلیغاتی

![Banner-Dj](https://s6.uupload.ir/files/pizzle_-_google_chrome_8_13_2022_9_28_21_pm_(2)_lwvq.png)

#### نحوه استفاده
1. اضافه کردن اپ به پروژه خود و ثبت ان در **INSTALLED_APPS**
2. اضافه کردن فایل های استاتیک به پروژه خود
3. اضافه کردن urls به روت  (فایل urls اصلی) به این صورت :
 ```python
  path('',include('Banner_dj.urls')),
```
4. اجرای دستور **migrate**
5.  افزودن ادرس دامنه به تمپلیت خود به این صورت :
```javascript 
<script>
    const BACKEND_URL_BANNER_DJ = 'http://127.0.0.1:8000'
</script>
```
6. افزودن فایل جاوااسکریپت به تمپلیت خود به این صورت :
```javascript
  <script src="{% static 'banner_dj/js/index.js' %}"></script>
  //      یا ادرس فایل را به صورت مستقیم وارد کنید 
  <script src="Address File index.js Banner-Dj"></script>
```
7. ایجاد آبجکت های خود و استفاده از آن
- Page : برای تعریف آدرس یک صفحه که بنر در ان نمایش داده شود
- Banner Style :  برای نمایش بنر در حالت ها و سایز های مختلف
- Banner : ابجکت اصلی که در ان میتوانید مشخصات بنر خود را وارد کنید

---
**نکته** 📝 
#####  سایز در نظر گرفته شده برای سایز کوچک در مدل _Banner Style_ برابر با _768px_ است , که میتوانید مقدار ان را در فایل _index.js_ به دلخواه خود تغییر دهید (:
---
