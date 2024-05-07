select * from bookstoreapp_bookdetails
select * from bookstoreapp_logins
select * from bookstoreapp_category
select * from bookstoreapp_members
select * from bookstoreapp_transaction

-- To update the admin table
insert into bookstoreapp_logins(user_name,user_password)
values ('admin', 'password');

-- To update the bookdetails table
insert into bookstoreapp_bookdetails(book_id, author, title, no_of_copies)
values (1,'JK Rowling', 'Harry Potter', 4),
		(2,'JRR Tolkien', 'The Hobbit', 5),
		(3,'JK Rowling','Harry Potter and the Deathly Hallows',6),
		(4,'Dan Brown', 'The Da Vinci Code', 2),
		(5,'Antoine de Saint-Exupéry', 'The Little Prince', 5),
		(6,'Charles Dickens', 'A Tale of Two Cities', 3),
		(7,'Cao Xueqin', 'Dream of the Red Chamber', 1),
		(8,'JRR Tolkien', 'The Lord of the Rings', 4),
		(9,'Miguel de Cervantes', 'Don Quixote', 3),
		(10,'Paulo Coelho', 'The Alchemist', 6)


-- To update the members table

-- insert into bookstoreapp_bookdetails(book_id,author, title, no_of_copies)
-- values (1,'JK Rowling', 'Harry Potter', 4),
-- 		(2,'JRR Tolkien', 'The Hobbit', 5),
-- 		(3,'JK Rowling','Harry Potter and the Deathly Hallows',6),
-- 		(4,'Dan Brown', 'The Da Vinci Code', 2),
-- 		(5,'Antoine de Saint-Exupéry', 'The Little Prince', 5),
-- 		(6,'Charles Dickens', 'A Tale of Two Cities', 3),
-- 		(7,'Cao Xueqin', 'Dream of the Red Chamber', 1),
-- 		(8,'JRR Tolkien', 'The Lord of the Rings', 4),
-- 		(9,'Miguel de Cervantes', 'Don Quixote', 3),
-- 		(10,'Paulo Coelho', 'The Alchemist', 6);


insert into bookstoreapp_members(name, email_id,contact_no, penalty)
values 
('Ashish', 'ashi@gmail.com', 9695948721, 50.00),
('Arohi', 'kiddo@gmail.com',9794959618, 25.00),
('Melina', 'gungs@gmail.com',8684571235, 75.00),
('Pranav', 'dimi@gmail.com',7684591234, 15.00),
('Rajath', 'rajanna@gmail.com', 7964251328, 65.00);

-- To update the category table
insert into bookstoreapp_category(book_id, categ)
values 
(1,'Fantasy'),
(2,'Fantasy'),
(2,'Fantasy'),
(3,'Fantasy'),
(4,'Mystery'),
(4,'Detective'),
(4,'Conspiracy'),
(4,'Thriller'),
(5,'Kids'),
(5,'Fable'),
(5,'Novella'),
(5,'Suspense'),
(5,'fiction'),
(6,'History'),
(7,'Novel'),
(7,'Family'),
(8,'Fantasy'),
(8,'Adventure'),
(9,'Novel'),
(10,'Novel'),
(10,'Drama'),
(10,'Quest'),
(10,'Fantasy'),
(10,'Adventure');


-- -- user input for login via Post 
-- {"user":"admin","password":"password"}


-- To update the transaction table
insert into bookstoreapp_transaction(book_id,memb_id,borrow_date,return_date,status) 
values (9,3,current_date,NULL,False),
(8,2,'5-04-2024','12-04-2024',True)



-- {
--     "memb": 2,
--     "book": 8,
--     "borrow_date": "2024-04-05",
--     "return_date": "2024-04-12",
--     "status": true
-- }

-- -- user input for borrowing book (post)
-- {
--     "memb": 5,
--     "book": 9,
--     "borrow_date": "2024-04-05"
-- }

-- -- select * from bookstoreapp_transaction

-- -- user input for returning the book
-- { "book_title":"The Alchemist","user_name":"Rajath"}


-- -- user input for adding new book
-- {"book_id":11,
--         "author": "xxxxxxx",
--         "title": "yyyyyy",
--         "no_of_copies": 1,
--         "categories": [
--             {
--                 "categ": "aaaa"
--             },
--             {
--                 "categ": "bbbbb"
--             }
--         ]
--     }


