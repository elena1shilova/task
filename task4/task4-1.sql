CREATE DATABASE mydb;
USE mydb;

CREATE TABLE students (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(50) NOT NULL,
    age INT,
    address VARCHAR(100)
);
INSERT INTO students (name, age, address) VALUES ('Иван Иванов', 20, 'Москва');
INSERT INTO students (name, age, address) VALUES ('Анна Смирнова', 22, 'Санкт-Петербург');

SELECT * FROM students;
