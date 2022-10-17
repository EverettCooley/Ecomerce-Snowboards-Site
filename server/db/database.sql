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

CREATE TABLE snowboards(id SERIAL PRIMARY KEY, name VARCHAR(255), price INT, stars INT, image VARCHAR(500), style VARCHAR(155), sizes INT[], brand_id INT NOT NULL, CONSTRAINT fk_brand FOREIGN KEY (brand_id) REFERENCES brands(id));

INSERT INTO snowboards (name, price, stars, image, style, sizes, brand_id) VALUES ('Burton Custom Flying V', 499, 5, 'https://images.evo.com/imgp/700/102000/102000/102000_1.jpg', 'All Mountain', '{150, 155, 160, 165, 170}', 1);
INSERT INTO snowboards (name, price, stars, image, style, sizes, brand_id) VALUES ('Burton Process Flying V', 499, 5, 'https://images.evo.com/imgp/700/102000/102000/102000_1.jpg', 'All Mountain', '{150, 155, 160, 165, 170}', 1);
INSERT INTO snowboards (name, price, stars, image, style, sizes, brand_id) VALUES ('Burton Custom X', 499, 5, 'https://images.evo.com/imgp/700/102000/102000/102000_1.jpg', 'All Mountain', '{150, 155, 160, 165, 170}', 1);