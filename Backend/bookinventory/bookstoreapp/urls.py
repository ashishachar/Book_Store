"""
URL configuration for bookinventory project.

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/5.0/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""

from django.urls import path
from bookstoreapp import views

urlpatterns = [
    path('books/all',views.books_list),
    path('admins/', views.admin_validation),
    path('books/<int:pk>/info', views.book_details),
    path('users/', views.users_list),
    path('users/<int:pk>', views.user_details),
    path('book/<int:book_id>/transactions', views.book_transaction),
    path('user/<int:user_id>/transactions', views.user_transaction),
    path('book/borrow', views.book_borrow),
    path('book/return',views.book_return),
    path('transactions/',views.transaction_list),
]
