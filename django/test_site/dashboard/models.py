from django.db import models
from django.db import models
from django.contrib.auth.models import User
import datetime


class Settings_Details(models.Model):
    id= models.AutoField(primary_key=True)
    substation = models.CharField(max_length=100, blank=True, null=True)
    bay_number = models.CharField(max_length=100, blank=True, null=True)
    manufacturer = models.CharField(max_length=100, blank=True, null=True)
    scheme_type = models.CharField(max_length=100, blank=True, null=True)
    serial_nuber = models.CharField(max_length=100, blank=True, null=True)
    function_type = models.CharField(max_length=100, blank=True, null=True)
    created_by = models.ForeignKey(User, models.CASCADE, db_column="created_by", blank=False, null=True,  related_name='setting')
    creation_date = models.DateTimeField( auto_now_add=True, auto_now=False ,blank=True, null=True)

class Settings_Parameters(models.Model):
    id= models.AutoField(primary_key=True)
    name = models.CharField(max_length=100, blank=True, null=True)
    value = models.CharField(max_length=100, blank=True, null=True)
    setting_id = models.ForeignKey(Settings_Details, models.CASCADE, db_column="settings_id", blank=True, null=True, related_name='param')

class Students(models.Model):
    id= models.AutoField(primary_key=True)
    name = models.CharField(max_length=100, blank=True, null=True)
    email = models.CharField(max_length=100, blank=True, null=True)
    national_id = models.CharField(max_length=100, blank=True, null=True)
    birth_date = models.DateTimeField( blank=True, null=True )
    registration_date = models.DateTimeField( blank=True, null=True)


class Course(models.Model):
    id= models.AutoField(primary_key=True)
    name = models.CharField(max_length=100, blank=True, null=True)
    description = models.CharField(max_length=100, blank=True, null=True)
    instructor = models.CharField(max_length=100, blank=True, null=True)
   

class Register(models.Model):
    id= models.AutoField(primary_key=True)
    course = models.ForeignKey(Course, models.CASCADE, db_column="course", blank=False, null=True,  related_name='inst')
    student = models.ForeignKey(Students, models.CASCADE, db_column="student", blank=False, null=True,  related_name='register')



    

    










# Create your models here.
