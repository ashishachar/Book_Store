insert into bookstoreapp_logins(user_name,user_password)
values ('admin', 'password')


insert into bookstoreapp_bookdetails(author, title, no_of_copies)
values ('JK Rowling', 'Harry Potter', 4),
		('JRR Tolkien', 'The Hobbit', 5),
		('JK Rowling','Harry Potter and the Deathly Hallows',6),
		('Dan Brown', 'The Da Vinci Code', 2),
		('Antoine de Saint-Exupéry', 'The Little Prince', 5),
		('Charles Dickens', 'A Tale of Two Cities', 3),
		('Cao Xueqin', 'Dream of the Red Chamber', 1),
		('JRR Tolkien', 'The Lord of the Rings', 4),
		('Miguel de Cervantes', 'Don Quixote', 3),
		('Paulo Coelho', 'The Alchemist', 6)

insert into bookstoreapp_members(name, email_id,contact_no, penalty)
values ('Ashish', 'ashi@gmail.com', 9695948721, 50.00),
('Arohi', 'kiddo@gmail.com',9794959618, 25.00),
('Melina', 'gungs@gmail.com',8684571235, 75.00),
('Pranav', 'dimi@gmail.com',7684591234, 15.00),
('Rajath', 'rajanna@gmail.com', 7964251328, 65.00)

insert into bookstoreapp_category(book_id, categ)
values (1,'Fantasy'),
(2,'High fantasy'),
(2,'Juvenile fantasy'),
(3,'Fantasy'),
(4,'Mystery'),
(4,'Detective fiction'),
(4,'Conspiracy fiction'),
(4,'Thriller'),
(5,'Childrens literature'),
(5,'Fable'),
(5,'Novella'),
(5,'Speculative'),
(5,'fiction'),
(6,'Historical novel'),
(7,'Novel'),
(7,'Family saga'),
(8,'High fantasy'),
(8,'Adventure'),
(9,'Novel'),
(10,'Novel'),
(10,'Drama'),
(10,'Quest'),
(10,'Fantasy Fiction'),
(10,'Adventure fiction')

-- {"user":"admin","password":"password"}

insert into bookstoreapp_transaction(book_id,memb_id,borrow_date,return_date,status)
values (4,1,current_date,NULL,False),
(8,2,'5-04-2024','12-04-2024',True)

-- {"user":"admin","password":"password"}

-- {
--     "memb": 3,
--     "book": 1,
--     "borrow_date": "2024-04-05"
-- }



