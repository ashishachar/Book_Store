from rest_framework import serializers
from bookstoreapp.models import Logins, BookDetails, Category, Members, Transaction

class LoginsSerializer(serializers.ModelSerializer):
    class Meta:
        model = Logins
        fields = ['user_name', 'user_password']

class CategorySerializer(serializers.ModelSerializer):
    class Meta:
        model = Category
        fields = ['categ']
    
    def to_representation(self, obj):
        return obj.categ
    
class BookDetailsSerializer(serializers.ModelSerializer):
    categories = CategorySerializer(read_only=True, many=True)
    class Meta:
        model = BookDetails
        # fields = '__all__'
        fields = ['book_id','author', 'title', 'no_of_copies', "categories"]

class MembersSerializer(serializers.ModelSerializer):
    class Meta:
        model = Members
        fields = ['id','name', 'email_id', 'contact_no', 'penalty']


class TransactionSerializer(serializers.ModelSerializer):
    book_title = serializers.SerializerMethodField()
    member_name = serializers.SerializerMethodField()
    class Meta:
        model = Transaction
        fields = ['memb', 'book', 'borrow_date', 'return_date', 'status', 'book_title', 'member_name']

    def get_book_title(self, obj):
        book = obj.book
        return book.title
    
    def get_member_name(self, obj):
        memb = obj.memb
        return memb.name


class TransactionBorrowSerializer(serializers.ModelSerializer):
    class Meta:
        model = Transaction
        fields = ['memb', 'book', 'borrow_date', 'return_date', 'status']


class AddbookCategorySerializer(serializers.ModelSerializer):
    class Meta:
        model = Category
        fields = ['categ']

class AddBookDetailsSerializer(serializers.ModelSerializer):
    categories = AddbookCategorySerializer(many=True)
    class Meta:
        model = BookDetails
        fields = ['book_id','author', 'title', 'no_of_copies', 'categories']

    def create(self, validated_data):
        category_data = validated_data.pop('categories')
        book_data = BookDetails.objects.create(**validated_data)
        print(book_data)
        for cat in category_data:
            Category.objects.create(book=book_data, **cat)
        return book_data
