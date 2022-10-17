CREATE DATABASE snowboardsstore;

\c snowboardsstore

CREATE TABLE brands (
    id SERIAL PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    country VARCHAR(255),
    established INT,
    rating INT
);

INSERT INTO brands (name, country, established, rating) VALUES ('Burton', 'USA', 1977, 5);
INSERT INTO brands (name, country, established, rating) VALUES ('Capita', 'USA', 1996, 4);
INSERT INTO brands (name, country, established, rating) VALUES ('Rome', 'USA', 1997, 3);



CREATE TABLE snowboards(id SERIAL PRIMARY KEY, name VARCHAR(255), price INT, stars INT, image VARCHAR(500), style VARCHAR(155), sizes INT[], brand_id INT NOT NULL, CONSTRAINT fk_brand FOREIGN KEY (brand_id) REFERENCES brands(id));

INSERT INTO snowboards (name, price, stars, image, style, sizes, brand_id) VALUES ('Burton Custom Flying V', 499, 5, 'https://images.evo.com/imgp/700/102000/102000/102000_1.jpg', 'All Mountain', '{150, 155, 160, 165, 170}', 1);
INSERT INTO snowboards (name, price, stars, image, style, sizes, brand_id) VALUES ('Burton Process Flying V', 499, 5, 'https://images.evo.com/imgp/700/102000/102000/102000_1.jpg', 'All Mountain', '{150, 155, 160, 165, 170}', 1);
INSERT INTO snowboards (name, price, stars, image, style, sizes, brand_id) VALUES ('Burton Custom X', 499, 5, 'https://images.evo.com/imgp/700/102000/102000/102000_1.jpg', 'All Mountain', '{150, 155, 160, 165, 170}', 1);




https://cdn.shopify.com/s/files/1/0231/7366/0752/products/22_23_FRD01_DOA_148_2800x_82dbbe2c-9000-40c3-b656-7bfc7c26ba49.png
Capita DOA
INSERT INTO snowboards (name, price, stars, image, style, sizes, brand_id) VALUES ('Capita DOA', 499, 5, 'https://cdn.shopify.com/s/files/1/0231/7366/0752/products/22_23_FRD01_DOA_148_2800x_82dbbe2c-9000-40c3-b656-7bfc7c26ba49.png', 'All Mountain', '{150, 155, 160, 165, 170}', 2);

https://cdn.shopify.com/s/files/1/0370/4055/4115/products/2223_ROME_BRD_STALEMOD_MAIN.jpg
Rome Stale Mod
INSERT INTO snowboards (name, price, stars, image, style, sizes, brand_id) VALUES ('Rome Stale Mod', 599, 5, 'https://cdn.shopify.com/s/files/1/0370/4055/4115/products/2223_ROME_BRD_STALEMOD_MAIN.jpg', 'All Mountain', '{150, 155, 160, 165, 170}', 3);


https://cdn.shopify.com/s/files/1/0370/4055/4115/products/rome-party-mod-2023-mens-snowboard.jpg
Rome party mod
INSERT INTO snowboards (name, price, stars, image, style, sizes, brand_id) VALUES ('Rome Party Mod', 599, 5, 'https://cdn.shopify.com/s/files/1/0370/4055/4115/products/rome-party-mod-2023-mens-snowboard.jpg', 'All Mountain', '{150, 155, 160, 165, 170}', 3);

https://cdn.shopify.com/s/files/1/0370/4055/4115/products/rome-agent-2023-mens-snowboard.jpg
Rome Agent
INSERT INTO snowboards (name, price, stars, image, style, sizes, brand_id) VALUES ('Rome Agent', 599, 5, 'https://cdn.shopify.com/s/files/1/0370/4055/4115/products/rome-agent-2023-mens-snowboard.jpg', 'All Mountain', '{150, 155, 160, 165, 170}', 3);

INSERT INTO snowboards (name, price, stars, image, style, sizes, brand_id) VALUES ('Mens Burton Custom X Camber Snowboard', 499, 5, 'https://www.burton.com/static/product/W22/10689108000_1.png', 'All Mountain / Powder', '{150, 155, 160, 165, 170}', 1);
https://www.burton.com/static/product/W21/10712107000_1.png

Mens Burton Free Thinker Camber Snowboard
"https://www.burton.com/static/product/W23/13219108000_1.png"
INSERT INTO snowboards (name, price, stars, image, style, sizes, brand_id) VALUES ('Mens Burton Free Thinker Camber Snowboard', 629, 5, 'https://www.burton.com/static/product/W23/13219108000_1.png', 'All Mountain / Park', '{150, 154, 157, 160}', 1);

DELETE FROM snowboards WHERE id = 1;

https://www.burton.com/static/product/W23/22943101000_1.png
Burton Blossom Camber Snowboard
INSERT INTO snowboards (name, price, stars, image, style, sizes, brand_id) VALUES ('Burton Blossom Camber Snowboard', 609, 5, 'https://www.burton.com/static/product/W23/22943101000_1.png', 'All Mountain / Park', '{149, 152, 155, 158, 162}', 1);