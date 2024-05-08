import sqlite3
from sqlite3 import Error


def create_connection(db_file):

    conn = None
    try:
        conn = sqlite3.connect(db_file)
    except Error as e:
        print(e)

    return conn


def insertLogins(conn):
    cur = conn.cursor()
    multipleValues = [
        ('admin', 'password')
    ]
    cur.executemany(
        "insert into bookstoreapp_logins(user_name,user_password) values (?,?) ", multipleValues)
    print('Done : Logins')
    conn.commit()
    # conn.close()


def insertBooks(conn):
    cur = conn.cursor()
    multipleValues = [
        (1, 'JK Rowling', 'Harry Potter', 4),
        (2, 'JRR Tolkien', 'The Hobbit', 5),
        (3, 'JK Rowling', 'Harry Potter and the Deathly Hallows', 6),
        (4, 'Dan Brown', 'The Da Vinci Code', 2),
        (5, 'Antoine de Saint-Exupéry', 'The Little Prince', 5),
        (6, 'Charles Dickens', 'A Tale of Two Cities', 3),
        (7, 'Cao Xueqin', 'Dream of the Red Chamber', 1),
        (8, 'JRR Tolkien', 'The Lord of the Rings', 4),
        (9, 'Miguel de Cervantes', 'Don Quixote', 3),
        (10, 'Paulo Coelho', 'The Alchemist', 6)
    ]
    cur.executemany(
        "insert into bookstoreapp_bookdetails(book_id, author, title, no_of_copies) values (?,?,?,?) ", multipleValues)
    print('Done : Books ')
    conn.commit()
    # conn.close()


def insertMembers(conn):
    cur = conn.cursor()
    multipleValues = [
        ('Ashish', 'ashi@gmail.com', 9695948721, 50.00),
        ('Arohi', 'kiddo@gmail.com', 9794959618, 25.00),
        ('Melina', 'gungs@gmail.com', 8684571235, 75.00),
        ('Pranav', 'dimi@gmail.com', 7684591234, 15.00),
        ('Rajath', 'rajanna@gmail.com', 7964251328, 65.00)
    ]
    cur.executemany(
        "insert into bookstoreapp_members(name, email_id,contact_no, penalty) values (?,?,?,?) ", multipleValues)
    print('Done : Members ')
    conn.commit()
    # conn.close()


def insertCategories(conn):
    cur = conn.cursor()
    multipleValues = [
        (1, 'Fantasy'),
        (2, 'Fantasy'),
        (2, 'Fantasy'),
        (3, 'Fantasy'),
        (4, 'Mystery'),
        (4, 'Detective'),
        (4, 'Conspiracy'),
        (4, 'Thriller'),
        (5, 'Kids'),
        (5, 'Fable'),
        (5, 'Novella'),
        (5, 'Suspense'),
        (5, 'fiction'),
        (6, 'History'),
        (7, 'Novel'),
        (7, 'Family'),
        (8, 'Fantasy'),
        (8, 'Adventure'),
        (9, 'Novel'),
        (10, 'Novel'),
        (10, 'Drama'),
        (10, 'Quest'),
        (10, 'Fantasy'),
        (10, 'Adventure')
    ]
    cur.executemany(
        "insert into bookstoreapp_category(book_id, categ) values (?,?) ", multipleValues)
    print('Done : Categories')
    conn.commit()
    # conn.close()


def insertTransactions(conn):
    cur = conn.cursor()
    multipleValues = [
        (9, 3, '05-05-2024', None, False),
        (8, 2, '05-04-2024', '12-04-2024', True)
    ]
    cur.executemany(
        "insert into bookstoreapp_transaction(book_id,memb_id,borrow_date,return_date,status) values (?,?,?,?,?) ", multipleValues)
    print('Done : Transactions ')
    conn.commit()
    # conn.close()


def run_query(conn):

    cur = conn.cursor()
    print('Displaying : Login ')
    cur.execute("select * from bookstoreapp_logins;")

    rows = cur.fetchall()

    for row in rows:
        print(row)
    print('Displaying : Books ')
    cur.execute("select * from bookstoreapp_bookdetails;")

    rows = cur.fetchall()

    for row in rows:
        print(row)
    print('Displaying : Members ')
    cur.execute("select * from bookstoreapp_members;")

    rows = cur.fetchall()

    for row in rows:
        print(row)
    print('Displaying : Categories ')
    cur.execute("select * from bookstoreapp_category;")

    rows = cur.fetchall()

    for row in rows:
        print(row)
    print('Displaying : Transactions ')
    cur.execute("select * from bookstoreapp_transaction;")

    rows = cur.fetchall()

    for row in rows:
        print(row)


def main():
    # database location and database name
    # store sqlite file in same directory as settings.py
    dbLoc = r"C:\Users\dimi\PycharmProjects\bookStore\Book_Store\Backend\bookinventory"
    databaseName =  r"db.sqlite3"

    database = f"{dbLoc}\{databaseName}"    
    print(database)

    # create a database connection
    conn = create_connection(database)
    print(conn)
    with conn:
        print("Query Run")
        insertBooks(conn)
        insertLogins(conn)
        insertMembers(conn)
        insertCategories(conn)
        insertTransactions(conn)
        run_query(conn)


if __name__ == '__main__':
    main()
