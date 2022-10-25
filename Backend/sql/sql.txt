

CREATE TABLE super_category(
scat_name   VARCHAR(100),
scat_id SERIAL,
PRIMARY KEY(scat_id)
);

CREATE TABLE category(
cat_name VARCHAR(100),
cat_id SERIAL,
cat_scat INTEGER REFERENCES super_category(scat_id),
PRIMARY KEY(cat_id)
);

CREATE TABLE product(
prod_name   VARCHAR(100),
prod_size NUMERIC(10,2),
prod_infl_aug NUMERIC(10,2), 
prod_infl_jul NUMERIC(10,2), 
prod_infl_change_aug NUMERIC(10,2), 
prod_infl_change_jul NUMERIC(10,2),
prod_scat INTEGER REFERENCES super_category(scat_id),
prod_cat INTEGER REFERENCES category(cat_id),
prod_id SERIAL,
PRIMARY KEY(prod_id), 
prod_sum NUMERIC(1,0)
);

CREATE TABLE crawl(
crawl_id SERIAL,
crawl_prod_id INTEGER REFERENCES product(prod_id),
crawl_price NUMERIC(10,2),
crawl_date DATE,
PRIMARY KEY(crawl_id)
);

DROP TABLE crawl;DROP TABLE product; DROP TABLE category; DROP TABLE super_category;

COPY product(prod_name,prod_size,prod_infl_aug,prod_infl_jul,prod_infl_change_aug,prod_infl_change_jul,prod_scat,prod_cat,prod_id)
FROM 'C:\\Users\\Milo\\Documents\\FH Campus Wien\\3. Semester\\WEB\\Gruppenprojekt\\product.csv'
DELIMITER ';'
CSV;



https://www.youtube.com/watch?v=7cBkXKCY4Ew&ab_channel=JunaidQaiser

https://hevodata.com/learn/postgresql-import-csv/


im csv alle "," durch "." ersetzen

