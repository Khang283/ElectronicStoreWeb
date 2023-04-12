DROP DATABASE IF EXISTS electronic_store;
CREATE DATABASE IF NOT EXISTS electronic_store;
USE electronic_store;
 
/* PRODUCT TABLE */
CREATE TABLE IF NOT EXISTS product(
    product_id BIGINT NOT NULL PRIMARY KEY AUTO_INCREMENT,
    product_name VARCHAR(100) NOT NULL,
    category_id BIGINT,
    company_id BIGINT,
    product_version VARCHAR(100),
    product_stock BIGINT ,
    product_rating BIGINT DEFAULT 0,
    product_price DECIMAL(10,2),
    product_sold BIGINT DEFAULT 0,
    product_sales INT DEFAULT 0,
    product_status VARCHAR(20) DEFAULT 'available',
    created_at DATETIME,
    modified_at DATETIME,
    deleted boolean DEFAULT 0
);
ALTER TABLE product ADD CONSTRAINT UNQ_product_product_name_version UNIQUE (product_name,product_version);
ALTER TABLE product ADD CONSTRAINT CK_product_product_status CHECK (product_status='available' OR product_status='sales' OR product_status='out of stock' OR product_status='unavailable');
CREATE TABLE IF NOT EXISTS  product_detail(
	product_id BIGINT NOT NULL,
	spec_id BIGINT NOT NULL ,
	created_at DATETIME ,
	modified_at DATETIME ,
	deleted BOOLEAN DEFAULT 0
);
CREATE TABLE IF NOT EXISTS spec (
	spec_id BIGINT NOT NULL PRIMARY KEY AUTO_INCREMENT ,
	spec_name VARCHAR(50) NOT NULL ,
	group_id BIGINT,
	spec_detail VARCHAR(100) NOT NULL ,
	spec_value VARCHAR(100) NOT NULL ,
	created_at DATETIME ,
	modified_at DATETIME ,
	deleted BOOLEAN DEFAULT 0
);
CREATE TABLE IF NOT EXISTS spec_group(
	group_id BIGINT NOT NULL PRIMARY KEY AUTO_INCREMENT ,
	group_name VARCHAR(50) NOT NULL ,
	created_at DATETIME,
	modified_at DATETIME ,
	deleted BOOLEAN DEFAULT 0
);

CREATE TABLE IF NOT EXISTS assets (
	asset_id BIGINT PRIMARY KEY AUTO_INCREMENT ,
	asset_name VARCHAR(100) NOT NULL ,
	asset_path VARCHAR(1000) NOT NULL,
	asset_type VARCHAR(50) NOT NULL ,
	created_at DATETIME DEFAULT NOW(),
	modified_at DATETIME ,
	deleted BOOLEAN DEFAULT FALSE 
);
CREATE TABLE IF NOT EXISTS product_asset(
	product_asset_id BIGINT PRIMARY KEY AUTO_INCREMENT ,
	product_id BIGINT NOT NULL,
	asset_id BIGINT NOT NULL ,
	asset_role VARCHAR(50) NOT NULL ,
	created_at DATETIME DEFAULT NOW(),
	modified_at DATETIME ,
	deleted BOOLEAN DEFAULT FALSE 
);
CREATE TABLE IF NOT EXISTS reviews (
	review_id BIGINT NOT NULL PRIMARY KEY AUTO_INCREMENT ,
	review_content LONGTEXT NOT NULL ,
	review_rating INT NOT NULL ,
	user_id BIGINT NOT NULL,
	product_id BIGINT NOT NULL ,
	likes BIGINT NOT NULL DEFAULT 0 ,
	created_at DATETIME ,
	modified_at DATETIME ,
	deleted BOOLEAN DEFAULT 0
);
CREATE TABLE IF NOT EXISTS cart
(
	cart_id BIGINT PRIMARY KEY AUTO_INCREMENT ,
	user_id BIGINT,
	total_money DECIMAL(10,2) DEFAULT 0,
	total_quantity BIGINT DEFAULT 0,
	created_at DATETIME DEFAULT NOW(),
	modified_at DATETIME ,
	deleted BOOLEAN DEFAULT FALSE
);
CREATE TABLE IF NOT EXISTS cart_item
(
	cart_id BIGINT,
	product_id BIGINT,
	price DECIMAL(10,2) DEFAULT 0,
	quantity BIGINT DEFAULT 0,
	created_at DATETIME DEFAULT NOW(),
	modified_at DATETIME ,
	deleted BOOLEAN DEFAULT FALSE
);
ALTER TABLE cart_item ADD CONSTRAINT PK_cart_item PRIMARY KEY (cart_id,product_id);

CREATE TABLE IF NOT EXISTS orders
(
	order_id BIGINT PRIMARY KEY AUTO_INCREMENT ,
	user_id BIGINT NOT NULL,
	total_price DECIMAL(10,2) DEFAULT 0,
	total_quantity BIGINT DEFAULT 0,
	receiver varchar(50) NOT NULL ,
	delivery_message varchar(50),
	order_address BIGINT NOT NULL ,
	delivered BOOLEAN DEFAULT FALSE,
	created_at DATETIME DEFAULT NOW(),
	modified_at DATETIME ,
	deleted BOOLEAN DEFAULT FALSE
);

CREATE TABLE IF NOT EXISTS order_item
(
	order_id BIGINT,
	product_id BIGINT,
	price DECIMAL(10,2) DEFAULT 0,
	quantity BIGINT DEFAULT 0,
	created_at DATETIME DEFAULT NOW(),
	modified_at DATETIME ,
	deleted BOOLEAN DEFAULT FALSE
);

create table if not exists users(
	user_id bigint primary KEY AUTO_INCREMENT,
	loggin_name varchar(50) unique,
	pass_word varchar(20) not null,
	username varchar(50) not null,
	user_address varchar(500),
	user_email varchar(100),
	user_phone varchar(11),
	created_at datetime,
	modified_at datetime,
	deleted boolean DEFAULT false,
	avatar varchar(500),
	gender varchar(6),
	dob datetime,
	role varchar(10) DEFAULT 'user' 
);

create table if not exists comments(
	comment_id bigint primary KEY AUTO_INCREMENT,
	user_id bigint not null,
	comment_description LONGTEXT,
	product_id bigint not NULL,
	created_at datetime, 
	modified_at datetime,
	deleted boolean DEFAULT false,
	likes bigint,
	reply_to varchar(100)
);
ALTER TABLE order_item ADD CONSTRAINT PK_order_item PRIMARY KEY(order_id, product_id);

CREATE TABLE IF NOT EXISTS company(
	company_id BIGINT PRIMARY KEY AUTO_INCREMENT,
	company_name VARCHAR(100),
	created_at DATETIME DEFAULT NOW(),
	modified_at DATETIME,
	deleted BOOLEAN DEFAULT FALSE
);

CREATE TABLE IF NOT EXISTS category (
  category_id bigint PRIMARY KEY AUTO_INCREMENT,
  category_name varchar(50) UNIQUE,
  created_at datetime,
  modified_at datetime,
  deleted BOOLEAN DEFAULT FALSE
);

CREATE TABLE IF NOT EXISTS post(
	post_id BIGINT PRIMARY KEY AUTO_INCREMENT,
	title MEDIUMTEXT,
	content LONGTEXT,
	product_id BIGINT,
	created_at DATETIME DEFAULT NOW(),
	modified_at DATETIME,
	deleted BOOLEAN DEFAULT FALSE
);


/* FOREIGN KEY */
/*product*/
ALTER TABLE product ADD CONSTRAINT FK_product_01 FOREIGN KEY (category_id) REFERENCES category(category_id);
ALTER TABLE product ADD CONSTRAINT FK_product_02 FOREIGN KEY (company_id) REFERENCES company(company_id);
/* order_item */
ALTER TABLE order_item ADD CONSTRAINT FK_order_item_01 FOREIGN KEY (order_id) REFERENCES orders(order_id);
ALTER TABLE order_item ADD CONSTRAINT FK_order_item_02 FOREIGN KEY (product_id) REFERENCES product(product_id);
/* cart_item */
ALTER TABLE cart_item ADD CONSTRAINT FK_cart_item_01 FOREIGN KEY (cart_id) REFERENCES cart(cart_id);
ALTER TABLE cart_item ADD CONSTRAINT FK_cart_item_02 FOREIGN KEY (product_id) REFERENCES product(product_id);
/* cart */
ALTER TABLE cart ADD CONSTRAINT FK_cart_01 FOREIGN KEY (user_id) REFERENCES users(user_id);
/*product_detail */
ALTER TABLE product_detail ADD CONSTRAINT FK_product_detail_01 FOREIGN KEY (product_id) REFERENCES product(product_id);
ALTER TABLE product_detail ADD CONSTRAINT FK_product_detail_02 FOREIGN KEY (spec_id) REFERENCES spec(spec_id);
/*spec*/
ALTER TABLE spec ADD CONSTRAINT FK_spec_01 FOREIGN KEY (group_id) REFERENCES spec_group(group_id);
/*review*/
ALTER TABLE reviews ADD CONSTRAINT FK_review_01 FOREIGN KEY (product_id) REFERENCES product(product_id);
ALTER TABLE reviews ADD CONSTRAINT FK_review_02 FOREIGN KEY (user_id) REFERENCES users(user_id);
/*comment*/
alter TABLE comments add constraint FK_comment_01 foreign key (user_id) references users(user_id);
ALTER TABLE comments ADD CONSTRAINT FK_comment_02 FOREIGN KEY (product_id) REFERENCES product(product_id);
/*product_description*/
ALTER TABLE post ADD CONSTRAINT FK_post_01 FOREIGN KEY (product_id) REFERENCES product(product_id);
/* product_asset */
ALTER TABLE product_asset ADD CONSTRAINT FK_product_asset_01 FOREIGN KEY (product_id) REFERENCES product(product_id);
ALTER TABLE product_asset ADD CONSTRAINT FK_product_asset_02 FOREIGN KEY (asset_id) REFERENCES assets(asset_id);

/* Trigger */
/* product */
delimiter $$
CREATE TRIGGER `TRG_product_created_at` BEFORE INSERT ON `product`
 FOR EACH ROW BEGIN
	SET NEW.created_at = NOW();
END $$
delimiter;

delimiter $$
CREATE TRIGGER `TRG_product_modified_at` BEFORE UPDATE ON `product`
 FOR EACH ROW BEGIN
	SET NEW.modified_at = NOW();
END $$
delimiter;

/*produce_detail*/
delimiter $$
CREATE TRIGGER `TRG_product_detail_created_at` BEFORE INSERT ON `product_detail`
 FOR EACH ROW BEGIN
	SET NEW.created_at = NOW();
END $$
delimiter;

delimiter $$
CREATE TRIGGER `TRG_product_detail_modified_at` BEFORE UPDATE ON `product_detail`
 FOR EACH ROW BEGIN
	SET NEW.modified_at = NOW();
END $$
delimiter;

/*review*/
delimiter $$
CREATE TRIGGER `TRG_review_created_at` BEFORE INSERT ON `reviews`
 FOR EACH ROW BEGIN
	SET NEW.created_at = NOW();
END $$
delimiter;

delimiter $$
CREATE TRIGGER `TRG_review_modified_at` BEFORE UPDATE ON `reviews`
 FOR EACH ROW BEGIN
	SET NEW.modified_at = NOW();
END $$
delimiter;

/*spec*/
delimiter $$
CREATE TRIGGER `TRG_spec_created_at` BEFORE INSERT ON `spec`
 FOR EACH ROW BEGIN
	SET NEW.created_at = NOW();
END $$
delimiter;

delimiter $$
CREATE TRIGGER `TRG_spec_modified_at` BEFORE UPDATE ON `spec`
 FOR EACH ROW BEGIN
	SET NEW.modified_at = NOW();
END $$
delimiter;

/*spec_group*/
delimiter $$
CREATE TRIGGER `TRG_spec_group_created_at` BEFORE INSERT ON `spec_group`
 FOR EACH ROW BEGIN
	SET NEW.created_at = NOW();
END $$
delimiter;

delimiter $$
CREATE TRIGGER `TRG_spec_group_modified_at` BEFORE UPDATE ON `spec_group`
 FOR EACH ROW BEGIN
	SET NEW.modified_at = NOW();
END $$
delimiter;

-- CART
-- UPDATE
DELIMITER $$
create TRIGGER TRG_cart_modified_at 
BEFORE UPDATE 
ON cart FOR EACH ROW
BEGIN
	 SET NEW.modified_at =NOW();
END $$
DELIMITER ;

-- CART_ITEM
-- insert
DELIMITER $$
create TRIGGER TRG_cart_item_insert
BEFORE INSERT
ON cart_item FOR EACH ROW
BEGIN
	 UPDATE cart
	 SET total_money = total_money + NEW.price, total_quantity = total_quantity + NEW.quantity, modified_at= NOW()
	 WHERE cart_id = NEW.cart_id;
END $$
DELIMITER ;

-- update
DELIMITER $$
create TRIGGER TRG_cart_item_update
BEFORE UPDATE
ON cart_item FOR EACH ROW
BEGIN
	 UPDATE cart
	 SET total_money = total_money + NEW.price - OLD.price, total_quantity =total_quantity + NEW.quantity - OLD.quantity, modified_at= NOW()
	 WHERE cart_id = NEW.cart_id;
END $$
DELIMITER ;

-- ORDERS
-- update

DELIMITER $$
create TRIGGER TRG_order_modified_at
BEFORE UPDATE
ON orders FOR EACH ROW
BEGIN
	 SET NEW.modified_at =NOW();
END $$
DELIMITER ;

-- ORDER_ITEM
-- insert
DELIMITER $$
create TRIGGER TRG_order_item_insert
BEFORE INSERT
ON order_item FOR EACH ROW
BEGIN
	 UPDATE orders
	 SET total_price = total_price + NEW.price, total_quantity =total_quantity + NEW.quantity, modified_at= NOW()
	 WHERE order_id = NEW.order_id;
END $$
DELIMITER ;

-- update
DELIMITER $$
create TRIGGER TRG_order_item_update
BEFORE UPDATE
ON order_item FOR EACH ROW
BEGIN
	 UPDATE orders
	 SET total_price = total_price + NEW.price - OLD.price, total_quantity =total_quantity + NEW.quantity - OLD.quantity, modified_at= NOW()
	 WHERE order_id = NEW.order_id;
END $$
DELIMITER ;

-- delete
DELIMITER $$
create TRIGGER TRG_order_item_deleted
BEFORE delete
ON order_item FOR EACH ROW
BEGIN
	 UPDATE orders
	 SET total_price = total_price - OLD.price, total_quantity = total_quantity - OLD.quantity, modified_at= NOW()
	 WHERE order_id = old.order_id;
END $$
DELIMITER ;

-- USER
CREATE TRIGGER TRG_user_created_at before INSERT ON users
FOR EACH ROW
SET NEW.created_at = NOW();

CREATE TRIGGER TRG_user_modified_at before UPDATE ON users
FOR EACH Row
SET NEW.modified_at = NOW();

-- COMMENT
CREATE TRIGGER TRG_comment_created_at before INSERT ON comments
FOR EACH ROW
SET NEW.created_at = NOW();

CREATE TRIGGER TRG_comment_modified_at before UPDATE ON comments
FOR EACH ROW
SET NEW.modified_at = NOW();

-- COMPANY
delimiter $$
CREATE TRIGGER TRG_company_modified_at
BEFORE UPDATE ON company
FOR EACH ROW 
BEGIN 
	SET NEW.modified_at = NOW();
END $$
delimiter;

-- CATEGORY
delimiter $$
CREATE TRIGGER TRG_category_modified_at
BEFORE UPDATE ON category
FOR EACH ROW 
BEGIN 
	SET NEW.modified_at = NOW();
END $$
delimiter ;

delimiter $$
CREATE TRIGGER TRG_category_created_at
BEFORE INSERT ON category
FOR EACH ROW 
BEGIN 
	SET NEW.created_at = NOW();
END $$
delimiter ;

-- Post
delimiter $$
CREATE TRIGGER TRG_post_modified_at
BEFORE UPDATE ON post
FOR EACH ROW 
BEGIN 
	SET NEW.modified_at = NOW();
END $$
delimiter ;

delimiter $$
CREATE TRIGGER TRG_post_created_at
BEFORE INSERT ON post
FOR EACH ROW 
BEGIN 
	SET NEW.created_at = NOW();
END $$
delimiter ;

--ASSET 
delimiter $$
CREATE TRIGGER TRG_asset_modified_at
BEFORE UPDATE ON assets 
FOR EACH ROW 
BEGIN 
	SET NEW.modified_at = NOW();
END $$
delimiter ;

-- PRODUCT_ASSET
delimiter $$
CREATE TRIGGER TRG_product_asset_modified_at
BEFORE UPDATE ON product_asset
FOR EACH ROW 
BEGIN 
	SET NEW.modified_at = NOW();
END $$
delimiter ;

-- INSERT DATA 
-- Category
INSERT INTO category (category_name) VALUES ("phone");
INSERT INTO category (category_name) VALUES ("laptop");
INSERT INTO category (category_name) VALUES ("tablet");
INSERT INTO category (category_name) VALUES ("accessories");
-- Company
INSERT INTO company (company_name) VALUES ("Apple");  -- 1
INSERT INTO company (company_name) VALUES ("Samsung"); -- 2
INSERT INTO company (company_name) VALUES ("Dell"); -- 3
INSERT INTO company (company_name) VALUES ("Asus"); -- 4
INSERT INTO company (company_name) VALUES ("MSI"); -- 5
INSERT INTO company (company_name) VALUES ("Sony"); -- 6
INSERT INTO company (company_name) VALUES ("Lenovo"); -- 7
INSERT INTO company (company_name) VALUES ("Acer"); -- 8
INSERT INTO company (company_name) VALUES ("Xiaomi"); -- 9
INSERT INTO company (company_name) VALUES ("Oppo"); -- 10
INSERT INTO company (company_name) VALUES ("Vivo"); -- 11
INSERT INTO company (company_name) VALUES ("Realmi"); -- 12
INSERT INTO company (company_name) VALUES ("HP"); -- 13
INSERT INTO company (company_name) VALUES ("Gigabyte"); -- 14
INSERT INTO company (company_name) VALUES ("Microsoft"); -- 15
-- Product
INSERT INTO product(product_name,product_version,product_price,category_id,company_id) VALUES ('iPhone 14 Pro Max','128GB',27190000,1,1);
INSERT INTO product(product_name,product_version,product_price,category_id,company_id) VALUES ('iPhone 14 Pro Max','256GB',30190000,1,1);
INSERT INTO product(product_name,product_version,product_price,category_id,company_id) VALUES ('iPhone 14 Pro Max','512GB',35990000,1,1);
INSERT INTO product(product_name,product_version,product_price,category_id,company_id) VALUES ('iPhone 14 Pro Max','1TB',41990000,1,1);
INSERT INTO product(product_name,product_version,product_price,category_id,company_id) VALUES ('Samsung Galaxy S22 5G','128GB',14990000,1,2);
INSERT INTO product(product_name,product_version,product_price,category_id,company_id) VALUES ('Xiaomi Redmi Note 11 Pro','8GB - 128GB',5990000,1,9);
-- Asset 
INSERT INTO assets (asset_name,asset_path,asset_type) VALUES ('iPhone 14 Pro Max image 1','https://images.fpt.shop/unsafe/fit-in/585x390/filters:quality(90):fill(white)/fptshop.com.vn/Uploads/Originals/2022/11/30/638054217303176240_ip-14-pro-max-bac-1.jpg','image');
INSERT INTO assets (asset_name,asset_path,asset_type) VALUES ('iPhone 14 Pro Max image 2','https://images.fpt.shop/unsafe/fit-in/585x390/filters:quality(90):fill(white)/fptshop.com.vn/Uploads/Originals/2023/3/9/638139587930405930_iphone-14pro-trang-6.jpg','image');
INSERT INTO assets (asset_name,asset_path,asset_type) VALUES ('iPhone 14 Pro Max image 3','https://images.fpt.shop/unsafe/fit-in/585x390/filters:quality(90):fill(white)/fptshop.com.vn/Uploads/Originals/2023/3/9/638139587931205518_iphone-14pro-trang-4.jpg','image');
-- Product_Asset
INSERT INTO product_asset(product_id,asset_id,asset_role) VALUES (1,1,'icon');
INSERT INTO product_asset(product_id,asset_id,asset_role) VALUES (1,1,'slide');
INSERT INTO product_asset(product_id,asset_id,asset_role) VALUES (1,2,'slide');
INSERT INTO product_asset(product_id,asset_id,asset_role) VALUES (1,3,'slide');
-- Spec_Group
INSERT INTO spec_group (group_name) VALUES ('info');
INSERT INTO spec_group (group_name) VALUES ('design and weight');
INSERT INTO spec_group (group_name) VALUES ('processor');
INSERT INTO spec_group (group_name) VALUES ('ram');
INSERT INTO spec_group (group_name) VALUES ('screen');
INSERT INTO spec_group (group_name) VALUES ('storage');
INSERT INTO spec_group (group_name) VALUES ('security');
INSERT INTO spec_group (group_name) VALUES ('os');
INSERT INTO spec_group (group_name) VALUES ('battery');
INSERT INTO spec_group (group_name) VALUES ('sound');
INSERT INTO spec_group (group_name) VALUES ('others');
-- Spec
INSERT INTO spec (spec_name,spec_detail,spec_value,group_id) VALUES ('ram 8gb','Dung lượng ram','8gb',4);

SELECT product_name, product_price, asset_path AS icon 
FROM product, assets, product_asset
WHERE product.product_id=product_asset.product_id AND assets.asset_id = product_asset.asset_id AND asset_role = 'icon'

SELECT assets.asset_id,asset_name,asset_path,asset_type,assets.created_at,assets.modified_at,assets.deleted FROM assets,product,product_asset
WHERE assets.asset_id=product_asset.asset_id AND product.product_id= product_asset.product_id AND product.product_id= 1 AND product_asset.asset_role='icon'
