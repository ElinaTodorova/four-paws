SET FOREIGN_KEY_CHECKS = 0;

DROP TABLE IF EXISTS animal;
CREATE TABLE animal(
  id INT AUTO_INCREMENT NOT NULL PRIMARY KEY,
  name_animal VARCHAR(150) NOT NULL,
  image_url VARCHAR(255),
  description_category TEXT 
);

DROP TABLE IF EXISTS category_product;
CREATE TABLE category_product (
  id INT AUTO_INCREMENT NOT NULL PRIMARY KEY,
  category VARCHAR(150) NOT NULL,
  image_category VARCHAR(150) NOT NULL,
  animal_id INT,
  CONSTRAINT animal_id FOREIGN KEY (animal_id) REFERENCES animal(id) ON DELETE CASCADE ON UPDATE CASCADE
);

DROP TABLE IF EXISTS subcategory_image;
CREATE TABLE subcategory_image (
  id INT AUTO_INCREMENT NOT NULL PRIMARY KEY,
  image_url VARCHAR(255)
);

DROP TABLE IF EXISTS subcategory;
CREATE TABLE subcategory (
  id INT AUTO_INCREMENT NOT NULL PRIMARY KEY,
  subcategory_name VARCHAR(150) NOT NULL,
  category_id INT,
  image_id INT,
  CONSTRAINT category_id FOREIGN KEY (category_id) REFERENCES category_product(id) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT image_id FOREIGN KEY (image_id) REFERENCES subcategory_image(id) ON DELETE CASCADE ON UPDATE CASCADE
);


DROP TABLE IF EXISTS product;
CREATE TABLE product(
  id INT AUTO_INCREMENT NOT NULL PRIMARY KEY,
  name_product VARCHAR(150) NOT NULL,
  description_product VARCHAR(255) NOT NULL,
  price INT NOT NULL,
  animal_id INT,
  category_product_id INT,
  subcategory_id INT,
  isSecondHand BOOLEAN NOT NULL,
  CONSTRAINT fk_category_product_id FOREIGN KEY (category_product_id) REFERENCES category_product(id),
  CONSTRAINT fk_subcategory_id FOREIGN KEY (subcategory_id) REFERENCES subcategory(id),
  CONSTRAINT fk_animal_id FOREIGN KEY (animal_id) REFERENCES animal(id)
);

DROP TABLE IF EXISTS role;
CREATE TABLE role(
  id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
  role VARCHAR(50) 
);

DROP TABLE IF EXISTS user;
CREATE TABLE user(
  id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
  username VARCHAR(100) NOT NULL,
  email VARCHAR(155) NOT NULL,
  hached_password VARCHAR(150) NOT NULL,
  role_id INT default 1,
  CONSTRAINT fk_role_id FOREIGN KEY (role_id) REFERENCES role(id)
);

DROP TABLE IF EXISTS cart;
CREATE TABLE cart(
  id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
  quantity INT NOT NULL,
  user_id INT,
  product_id INT,
  CONSTRAINT fk_user_id FOREIGN KEY (user_id) REFERENCES user(id),
  CONSTRAINT fk_product_id FOREIGN KEY (product_id) REFERENCES product(id)
);

SET FOREIGN_KEY_CHECKS = 1;