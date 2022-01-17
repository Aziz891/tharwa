
from faker import Faker
from dashboard.models import Students


x = Faker()
for i in range(20):
    temp = x.profile()
    Students.objects.create(name= temp.name())

