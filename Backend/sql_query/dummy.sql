insert into bookstoreapp_logins(user_name,user_password)
values ('admin', 'password');


insert into bookstoreapp_bookdetails(book_id,author, title, no_of_copies)
values (1,'JK Rowling', 'Harry Potter', 4),
		(2,'JRR Tolkien', 'The Hobbit', 5),
		(3,'JK Rowling','Harry Potter and the Deathly Hallows',6),
		(4,'Dan Brown', 'The Da Vinci Code', 2),
		(5,'Antoine de Saint-Exupéry', 'The Little Prince', 5),
		(6,'Charles Dickens', 'A Tale of Two Cities', 3),
		(7,'Cao Xueqin', 'Dream of the Red Chamber', 1),
		(8,'JRR Tolkien', 'The Lord of the Rings', 4),
		(9,'Miguel de Cervantes', 'Don Quixote', 3),
		(10,'Paulo Coelho', 'The Alchemist', 6);

insert into bookstoreapp_members(name, email_id,contact_no, penalty)
values ('Ashish', 'ashi@gmail.com', 9695948721, 50.00),
('Arohi', 'kiddo@gmail.com',9794959618, 25.00),
('Melina', 'gungs@gmail.com',8684571235, 75.00),
('Pranav', 'dimi@gmail.com',7684591234, 15.00),
('Rajath', 'rajanna@gmail.com', 7964251328, 65.00);

insert into bookstoreapp_category(book_id, categ)
values (1,'Fantasy'),
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


-- {"user":"admin","password":"password"}

insert into bookstoreapp_transaction(book_id,memb_id,borrow_date,return_date,status)
values (4,1,current_date,NULL,False),
(8,2,'5-04-2024','12-04-2024',True);

-- {"user":"admin","password":"password"}

-- {
--     "memb": 3,
--     "book": 1,
--     "borrow_date": "2024-04-05"
-- }



