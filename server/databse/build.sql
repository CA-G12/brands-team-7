BEGIN;

DROP TABLE IF EXISTS brands,products cascade;

create table brands(
    id SERIAL PRIMARY KEY,
    brand_name varchar(100) NOT NULL
);

create table products(
    id SERIAL PRIMARY KEY,
    product_name varchar(100) NOT NULL,
    img text NOT NULL,
    product_description text NOT NULL,
    price float,
    brand_id INTEGER references brands(id) 
);

insert into brands (brand_name) values ('Nike'),('Gucci'),('Versace'),('CHANEL');

COMMIT;