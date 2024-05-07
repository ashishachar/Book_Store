# Book_Store
# Backend
This folder will contain all the files related to backend implementation.
Django
SQL


pip install django-cors-headers
pip install djangorestframework
pip install django-environ


cd Backend\bookinventory
python manage.py makemigrations <only once>
python manage.py migrate <only once>

execute load.py to populate data into sqlite db <only once and only if sqlite DB is used> 
python manage.py runserver 