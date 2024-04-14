from bookstoreapp.models import Logins,BookDetails,Category,Members,Transaction
from bookstoreapp.serializers import LoginsSerializer, BookDetailsSerializer,CategorySerializer,MembersSerializer, TransactionSerializer,TransactionBorrowSerializer
from rest_framework.response import Response
from rest_framework import status
from rest_framework.decorators import api_view
from django.contrib import messages

@api_view(['POST'])
def admin_validation(request):
    # print(f"user from request:{request.data['user']}")
    # print(f"password from request:{request.data['password']}")
    try:
        admin_check = Logins.objects.get(user_name = request.data['user'])
    except Logins.DoesNotExist:
        return Response(status=status.HTTP_404_NOT_FOUND)
    if request.method == 'POST':
        if admin_check:
            if request.data['password'] == admin_check.user_password:
                # print(f'password from db: {admin_check.user_password}')
                return Response({'state': True}, status=status.HTTP_200_OK)
            return Response({'state': False}, status=status.HTTP_401_UNAUTHORIZED)
        
@api_view(['GET','POST'])
def books_list(request):
    if request.method == 'GET':
        books = BookDetails.objects.all()
        serialize = BookDetailsSerializer(books, many=True)
        return Response(serialize.data, status=status.HTTP_200_OK)

    elif request.method == 'POST':
        serialize = BookDetailsSerializer(data=request.data)
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
    
@api_view(['POST', 'PATCH'])
def book_borrow_return(request):
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
