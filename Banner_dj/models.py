from django.db import models
import random, string

def RandomString(Len=18):
    return ''.join(random.choices(string.ascii_uppercase + string.ascii_lowercase + string.digits, k=Len))


def upload_image_banner(instance,path):
    return f"banner_dj/images/{RandomString(20)}/{RandomString(7)}.{str(path).split('.')[-1]}"


class Page(models.Model):
    name = models.CharField(max_length=100)
    url = models.CharField(max_length=200,help_text='Enter the address of the page where you want the banner to be displayed - (without domain address)')

    def __str__(self):
        return self.name


class BannerStyle(models.Model):
    ALIGN_VERTICAL_OPTIONS = (
        ('right','Right'),
        ('center','Center'),
        ('left','Left'),
    )

    ALIGN_HORIZONTAL_OPTIONS = (
        ('top','Top'),
        ('middle','Middle'),
        ('bottom','Bottom'),
    )

    name = models.CharField(max_length=100)
    float = models.BooleanField(default=True)
    align_vertical = models.CharField(max_length=15,choices=ALIGN_VERTICAL_OPTIONS)
    align_horizontal = models.CharField(max_length=15,choices=ALIGN_HORIZONTAL_OPTIONS)
    width = models.CharField(max_length=10,default='auto',help_text='You can set "auto" or percentage like "50%" or pixle like "200px" value')
    height = models.CharField(max_length=10,default='auto',help_text='You can set "auto" or percentage like "50%" or pixle like "200px" value')

    def __str__(self):
        return self.name


class Banner(models.Model):
    name = models.CharField(max_length=100)
    style = models.ForeignKey(BannerStyle,on_delete=models.CASCADE)
    pages = models.ManyToManyField(Page)
    image = models.ImageField(upload_to=upload_image_banner,null=True,blank=True)
    image_url = models.URLField(null=True,blank=True,help_text='You can set image url instead image')
    href = models.URLField(help_text='When it is clicked , it will be redirect to this address')
    count_click = models.IntegerField(default=0)


    def __str__(self):
        return self.name


    def get_content(self):
        image = self.image or None
        if image == None:
            image = self.image_url
        else:
            image = image.url
        return image

    def is_available(self):
        return True if self.get_content() != None else False
