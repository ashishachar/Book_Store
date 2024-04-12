from rest_framework import serializers
from bookstoreapp.models import Logins, BookDetails, Category, Members, Transaction

class LoginsSerializer(serializers.ModelSerializer):
    class Meta:
        model = Logins
        fields = ['user_name', 'user_password']

class BookDetailsSerializer(serializers.ModelSerializer):
    class Meta:
        model = BookDetails
        fields = ['author', 'title', 'no_of_copies']

class CategorySerializer(serializers.ModelSerializer):
    class Meta:
        model = Category
        fields = ['book_no', 'categ']

class MembersSerializer(serializers.ModelSerializer):
    class Meta:
        model = Members
        fields = ['name', 'email_id', 'contact_no', 'penalty']

class TransactionSerializer(serializers.ModelSerializer):
    class Meta:
        model = Transaction
        fields = ['memb_id', 'bookid', 'borrow_date', 'return_date', 'status']
