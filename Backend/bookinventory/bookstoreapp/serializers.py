from rest_framework import serializers
from bookstoreapp.models import Logins, BookDetails, Category, Members, Transaction

class LoginsSerializer(serializers.ModelSerializer):
    class Meta:
        model = Logins
        fields = ['user_name', 'user_password']

# class BookDetailsSerializer(serializers.ModelSerializer):
#     class Meta:
#         model = BookDetails
#         fields = '__all__'
#         #fields = ['author', 'title', 'no_of_copies', 'book_category']

class CategorySerializer(serializers.ModelSerializer):
    # books = BookDetailsSerializer(read_only=True, many=True)
    class Meta:
        model = Category
        #fields = '__all__'
        fields = ['categ']

class BookDetailsSerializer(serializers.ModelSerializer):
    categories = CategorySerializer(read_only=True, many=True)
    class Meta:
        model = BookDetails
        # fields = '__all__'
        fields = ['author', 'title', 'no_of_copies', "categories"]

class MembersSerializer(serializers.ModelSerializer):
    class Meta:
        model = Members
        fields = ['name', 'email_id', 'contact_no', 'penalty']

class TransactionSerializer(serializers.ModelSerializer):
    class Meta:
        model = Transaction
        fields = ['memb_id', 'bookid', 'borrow_date', 'return_date', 'status']
