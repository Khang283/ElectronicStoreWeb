ALTER TABLE product_detail ADD info NVARCHAR(500);

UPDATE product_detail as t1
INNER JOIN spec AS t2
ON t1.spec_id = t2.spec_id
SET t1.info = t2.spec_value ;

--ALTER TABLE spec
--DROP COLUMN spec_value;




