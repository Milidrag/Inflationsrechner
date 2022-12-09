

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


https://www.youtube.com/watch?v=7cBkXKCY4Ew&ab_channel=JunaidQaiser

https://hevodata.com/learn/postgresql-import-csv/

erste Zeile in product löschen
im csv (product) alle "," durch "." ersetzen

ALTER TABLE category
  ADD cat_infl_aug NUMERIC(10,2);
  
ALTER TABLE category
  ADD cat_infl_jul NUMERIC(10,2);
  
ALTER TABLE category
  ADD cat_infl_change_aug NUMERIC(10,2);
  
ALTER TABLE category
  ADD cat_infl_change_jul NUMERIC(10,2);
  
ALTER TABLE category
  ADD cat_size NUMERIC(10,2); 


ALTER TABLE super_category
  ADD scat_infl_aug NUMERIC(10,2);
  
ALTER TABLE super_category
  ADD scat_infl_jul NUMERIC(10,2);
  
ALTER TABLE super_category
  ADD scat_infl_change_aug NUMERIC(10,2);
  
ALTER TABLE super_category
  ADD scat_infl_change_jul NUMERIC(10,2);  
 
ALTER TABLE super_category
  ADD scat_size NUMERIC(10,2); 


UPDATE category cat
SET cat_infl_aug = prod_infl_aug,
cat_infl_jul = prod_infl_jul,
cat_infl_change_aug = prod_infl_change_aug,
cat_infl_change_jul = prod_infl_change_jul,
cat_size = prod_size
FROM product prod
WHERE prod.prod_cat = cat.cat_id and prod.prod_sum = 3;


UPDATE super_category scat
SET scat_infl_aug = prod_infl_aug,
scat_infl_jul = prod_infl_jul,
scat_infl_change_aug = prod_infl_change_aug,
scat_infl_change_jul = prod_infl_change_jul,
scat_size = prod_size
FROM product prod
WHERE prod.prod_scat = scat.scat_id and prod.prod_sum = 2; 

DELETE FROM super_category WHERE scat_id = 0;


DELETE FROM product;
DELETE FROM category;
DELETE FROM super_category;

select * from product; 
select * from category; 
select * from super_category; 

Folgende Namen geändert in XML 
'Tabak' 
'Heimtextilien' 
'Pauschalreisen' 
'Finanzdienstleistungen. a.n.g.';
