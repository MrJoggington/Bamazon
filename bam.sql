CREATE DATABASE bamazon;
USE bamazon;
CREATE TABLE products(
    item_id INT AUTO_INCREMENT NOT NULL;
    product_name VARCHAR(50) NOT NULL;
    department_name VARCHAR(50) NOT NULL;
    price INTEGER(4) NOT NULL;
    stock_quantity INTEGER(100) NOT NULL;
    PRIMARY KEY (item_id)
);
INSERT INTO products(product_name, department_name, price, stock_quantity)
VALUES('Carrots', 'food', 3, 200);
INSERT INTO products(product_name, department_name, price, stock_quantity)
VALUES('Mangos', 'food', 10, 200);
INSERT INTO products(product_name, department_name, price, stock_quantity)
VALUES('Bananas', 'food', 5, 200);
INSERT INTO products(product_name, department_name, price, stock_quantity)
VALUES('Meat', 'food', 15, 200);
INSERT INTO products(product_name, department_name, price, stock_quantity)
VALUES('Lamp', 'Home', 15, 200);
INSERT INTO products(product_name, department_name, price, stock_quantity)
VALUES('Sofa', 'Home', 150, 200);
INSERT INTO products(product_name, department_name, price, stock_quantity)
VALUES('Chairs', 'Home', 25, 200);
INSERT INTO products(product_name, department_name, price, stock_quantity)
VALUES('Table', 'Home', 39, 200);
INSERT INTO products(product_name, department_name, price, stock_quantity)
VALUES('Tires', 'Auto', 180, 200);
INSERT INTO products(product_name, department_name, price, stock_quantity)
VALUES('Wiper Blades', 'Auto', 15, 200);
INSERT INTO products(product_name, department_name, price, stock_quantity)
VALUES('Air Freshners', 'Auto', 2, 200);
INSERT INTO products(product_name, department_name, price, stock_quantity)
VALUES('Car Shine', 'Auto', 10, 200);
INSERT INTO products(product_name, department_name, price, stock_quantity)
VALUES('Facial Wash', 'Health', 20, 200);
INSERT INTO products(product_name, department_name, price, stock_quantity)
VALUES('Shampoo', 'Health', 16, 200);
INSERT INTO products(product_name, department_name, price, stock_quantity)
VALUES('Conditioner', 'Health', 10, 200);
INSERT INTO products(product_name, department_name, price, stock_quantity)
VALUES('Charcoal Bar', 'Health', 15, 200);
INSERT INTO products(product_name, department_name, price, stock_quantity)
VALUES('Make-up blender', 'Health', 5, 200);

