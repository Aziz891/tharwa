
from django.urls import path
from .views import Student_viewset,  current_user, UserList, Setting_Details_viewset, settings_chart, settings_chart2, settings_export, test, Register_viewset, Course_viewset
from dashboard.setting_check import Setting_Check
from django.views.decorators.csrf import csrf_exempt
from rest_framework_jwt.views import obtain_jwt_token




app_name= 'dashboard'

urlpatterns = [


  path('setting_check/', csrf_exempt(Setting_Check.as_view()) , name='setting_check'),
  path('token-auth/', obtain_jwt_token),
  path('current_user/', current_user),
  path('users/', UserList.as_view())  ,
  path('chart/', settings_chart.as_view()),  
  path('chart2/', settings_chart2.as_view())  ,
  path('export/', settings_export.as_view())  ,
  path('test/', test.as_view())  








]


from .views import Setting_Details_viewset
from rest_framework.routers import DefaultRouter

router = DefaultRouter()
router.register(r'setting', Setting_Details_viewset, basename='user')
router.register(r'student', Student_viewset, basename='student')
router.register(r'course', Course_viewset, basename='course')
router.register(r'register', Register_viewset, basename='register')
urlpatterns += router.urls


