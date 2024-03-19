CREATE DATABASE find_my_food;

USE find_my_food;

-- create user table
CREATE TABLE User (
  user_id INT AUTO_INCREMENT PRIMARY KEY,
  user_name VARCHAR(255) NOT NULL,
  restrictions ENUM('Pescatarian', 'Gluten-Free', 'Vegetarian', 'Vegan')
);

-- create restaurant table
CREATE TABLE Restaurant (
  rest_id INT AUTO_INCREMENT PRIMARY KEY,
  rest_name VARCHAR(255) NOT NULL,
  distance FLOAT,
  cuisine_type VARCHAR(255)
);

-- create favorites table
CREATE TABLE Favorites (
  user_id INT,
  rest_id INT,
  PRIMARY KEY (user_id, rest_id),
  FOREIGN KEY (user_id) REFERENCES User(user_id),
  FOREIGN KEY (rest_id) REFERENCES Restaurant(rest_id)
);

-- create do not show table
CREATE TABLE Do_Not_Show (
  user_id INT,
  rest_id INT,
  PRIMARY KEY (user_id, rest_id),
  FOREIGN KEY (user_id) REFERENCES User(user_id),
  FOREIGN KEY (rest_id) REFERENCES Restaurant(rest_id)
);

-- create liked table
CREATE TABLE Liked (
  user_id INT,
  rest_id INT,
  PRIMARY KEY (user_id, rest_id),
  FOREIGN KEY (user_id) REFERENCES User(user_id),
  FOREIGN KEY (rest_id) REFERENCES Restaurant(rest_id)
);

-- create filters table
CREATE TABLE Filters (
  user_id INT AUTO_INCREMENT PRIMARY KEY,
  price_range VARCHAR(255),
  distance FLOAT,
  cuisine_type VARCHAR(255),
  dining_type ENUM('Drive-thru', 'Sit-down', 'Take-out'),
  FOREIGN KEY (user_id) REFERENCES User(user_id)
);
