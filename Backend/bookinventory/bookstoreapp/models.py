from django.db import models

# Create your models here.
class Logins(models.Model):
    user_name = models.CharField(max_length=50)
    user_password = models.CharField(max_length=12) 

class BookDetails(models.Model):
    book_id = models.IntegerField(primary_key=True)
    author = models.CharField(max_length=100)
    title = models.CharField(max_length=250)
    no_of_copies = models.IntegerField()

class Category(models.Model):
    book =models.ForeignKey(BookDetails, related_name='categories', on_delete=models.CASCADE)
    categ = models.CharField(max_length=30)

class Members(models.Model):
    # id =models.IntegerField(primary_key=True)
    name = models.CharField(max_length=50)
    email_id = models.EmailField(max_length=254)
    contact_no = models.BigIntegerField()
    penalty = models.DecimalField(max_digits=4, decimal_places=2)

class Transaction(models.Model):
    memb = models.ForeignKey(Members, on_delete=models.CASCADE)
    book = models.ForeignKey(BookDetails, on_delete=models.CASCADE)
    borrow_date = models.DateField()
    return_date = models.DateField(null=True)
    status = models.BooleanField()