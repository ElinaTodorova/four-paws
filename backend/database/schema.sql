SET FOREIGN_KEY_CHECKS = 0;

create table category_product (
  id INT AUTO_INCREMENT NOT NULL PRIMARY KEY,
  category VARCHAR(150),
  image_url VARCHAR(255)
);

create table animal(
  id INT AUTO_INCREMENT NOT NULL PRIMARY KEY,
  name_animal VARCHAR(150) NOT NULL,
  image_url VARCHAR(255)
);

create table product(
  id INT AUTO_INCREMENT NOT NULL PRIMARY KEY,
  name_product VARCHAR(150) NOT NULL,
  description_product VARCHAR(255) NOT NULL,
  animal_id INT,
  category_product_id INT,
  CONSTRAINT category_product_id FOREIGN KEY (category_product_id) REFERENCES category_product(id),
  CONSTRAINT animal_id FOREIGN KEY (animal_id) REFERENCES animal(id)
);

create table role(
  id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
  role VARCHAR(50) 
);

create table user(
  id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
  username VARCHAR(100) NOT NULL,
  email VARCHAR(155) NOT NULL,
  hached_password VARCHAR(150) NOT NULL,
  role_id INT default 1,
  CONSTRAINT role_id FOREIGN KEY (role_id) REFERENCES role(id)
);

create table cart(
  id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
  quantity INT NOT NULL,
  price INT NOT NULL,
  user_id INT,
  product_id INT,
  CONSTRAINT user_id FOREIGN KEY (user_id) REFERENCES user(id),
  CONSTRAINT product_id FOREIGN KEY (product_id) REFERENCES product(id)
);

SET FOREIGN_KEY_CHECKS = 1;