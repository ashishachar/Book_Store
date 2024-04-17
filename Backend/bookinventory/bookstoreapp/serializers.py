from rest_framework import serializers
from bookstoreapp.models import Logins, BookDetails, Category, Members, Transaction

class LoginsSerializer(serializers.ModelSerializer):
    class Meta:
        model = Logins
        fields = ['user_name', 'user_password']

class CategorySerializer(serializers.ModelSerializer):
    # books = BookDetailsSerializer(read_only=True, many=True)
    class Meta:
        model = Category
        #fields = '__all__'
    
    def to_representation(self, obj):
        return obj.categ

class BookDetailsSerializer(serializers.ModelSerializer):
    categories = CategorySerializer(read_only=True, many=True)
    class Meta:
        model = BookDetails
        # fields = '__all__'
        fields = ['id','author', 'title', 'no_of_copies', "categories"]

class MembersSerializer(serializers.ModelSerializer):
    class Meta:
        model = Members
        fields = ['id','name', 'email_id', 'contact_no', 'penalty']

class TransactionSerializer(serializers.ModelSerializer):
    class Meta:
        model = Transaction
        fields = ['memb', 'book', 'borrow_date', 'return_date', 'status']

class TransactionBorrowSerializer(serializers.ModelSerializer):
    # return_date = serializers.ReadOnlyField(default=None)
    # status = serializers.ReadOnlyField(default='False')
    class Meta:
        model = Transaction
        fields = ['memb', 'book', 'borrow_date', 'return_date', 'status']

class AddBookDetailsSerializer(serializers.ModelSerializer):
    categories = CategorySerializer(read_only=True, many=True)
    class Meta:
        model = BookDetails
        # fields = '__all__'
        fields = ['author', 'title', 'no_of_copies', "categories"]


