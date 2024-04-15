from bookstoreapp.models import Logins,BookDetails,Category,Members,Transaction
from bookstoreapp.serializers import LoginsSerializer, BookDetailsSerializer,CategorySerializer,MembersSerializer, TransactionSerializer,TransactionBorrowSerializer,AddBookDetailsSerializer
from rest_framework.response import Response
from rest_framework import status
from rest_framework.decorators import api_view
from django.contrib import messages
import datetime

@api_view(['POST'])
def admin_validation(request):
    try:
        admin_check = Logins.objects.get(user_name = request.data['user'])
    except Logins.DoesNotExist:
        return Response(status=status.HTTP_404_NOT_FOUND)
    if request.method == 'POST':
        if admin_check:
            if request.data['password'] == admin_check.user_password:
                return Response({'state': True}, status=status.HTTP_200_OK)
            return Response({'state': False}, status=status.HTTP_401_UNAUTHORIZED)
        
@api_view(['GET','POST'])
def books_list(request):
    if request.method == 'GET':
        books = BookDetails.objects.all()
        serialize = BookDetailsSerializer(books, many=True)
        return Response(serialize.data, status=status.HTTP_200_OK)

    elif request.method == 'POST':
        if BookDetails.objects.filter(title=request.data['title']).exists():
            book_count=BookDetails.objects.get(title=request.data['title']).no_of_copies
            BookDetails.objects.filter(title=request.data['title']).update(no_of_copies=book_count+request.data['no_of_copies'])
            return Response("Successfully updated a Book",status=status.HTTP_200_OK)
        else:
            serialize = AddBookDetailsSerializer(data=request.data)
            if serialize.is_valid():
                serialize.save()
                return Response(serialize.data, status=status.HTTP_201_CREATED)
            return Response(serialize.errors,status=status.HTTP_400_BAD_REQUEST)
            
@api_view(['GET'])
def book_details(request,pk):
    try:
        book = BookDetails.objects.get(pk=pk)
    except BookDetails.DoesNotExist:
        return Response(status=status.HTTP_404_NOT_FOUND)
    if request.method == 'GET':     
        serialize = BookDetailsSerializer(book)
        return Response(serialize.data)
    
@api_view(['GET','POST'])
def users_list(request):
    if request.method == 'GET':
        user = Members.objects.all()
        serialize = MembersSerializer(user, many=True)
        return Response(serialize.data, status=status.HTTP_200_OK)

    elif request.method == 'POST':
        serialize = MembersSerializer(data=request.data)
        if serialize.is_valid():
            serialize.save()
            return Response(serialize.data, status=status.HTTP_201_CREATED)
        return Response(serialize.errors,status=status.HTTP_400_BAD_REQUEST)
    
@api_view(['GET'])
def user_details(request,pk):
    try:
        user = Members.objects.get(pk=pk)
    except Members.DoesNotExist:
        return Response(status=status.HTTP_404_NOT_FOUND)
    if request.method == 'GET':     
        serialize = MembersSerializer(user)
        return Response(serialize.data)
    
@api_view(['GET'])
def book_transaction(request,book_id):
    try:
        book = Transaction.objects.get(book_id=book_id)
    except Transaction.DoesNotExist:
        return Response(status=status.HTTP_404_NOT_FOUND)
    if request.method == 'GET':     
        serialize = TransactionSerializer(book)
        return Response(serialize.data)
    
@api_view(['POST'])
def book_borrow(request):
    if request.method == 'POST':
        if BookDetails.objects.filter(id = request.data['book']).exists():
            available = BookDetails.objects.get(id = request.data['book']).no_of_copies
            if available > 0:
                BookDetails.objects.filter(id = request.data['book']).update(no_of_copies=available-1)
                re_data = request.data.update({'status': 'False'})
                serialize = TransactionBorrowSerializer(data=request.data)
                if serialize.is_valid():
                    serialize.save()
                    return Response(serialize.data, status=status.HTTP_201_CREATED)
                return Response(serialize.errors,status=status.HTTP_400_BAD_REQUEST)
            return Response('Book Not Available',status=status.HTTP_404_NOT_FOUND)
        return Response('Book does not exist in the store',status=status.HTTP_404_NOT_FOUND)
    
@api_view(['PATCH'])
def book_return(request):
    if request.method == 'PATCH':
        print(request.data)
        if Transaction.objects.filter(id=request.data['id']).exists():
            trans = Transaction.objects.filter(id=request.data['id'])
            trans.update(return_date=datetime.date.today())
            trans.update(status=True)
            book_no=Transaction.objects.get(id=request.data['id']).book.pk
            available = BookDetails.objects.get(id=book_no).no_of_copies
            BookDetails.objects.filter(id=book_no).update(no_of_copies=available+1)
            return Response('Book Return successfully', status=status.HTTP_200_OK)
        return Response(status=status.HTTP_404_NOT_FOUND)

@api_view(['GET'])
def transaction_list(request):
    if request.method == 'GET':
        trans = Transaction.objects.all()
        serialize = TransactionSerializer(trans, many=True)
        return Response(serialize.data, status=status.HTTP_200_OK)