CREATE TABLE "myfirstmodule$entity" (
	"id" BIGINT NOT NULL,
	"attr" VARCHAR_IGNORECASE(200) NULL,
	PRIMARY KEY("id"));
INSERT INTO "mendixsystem$entity" ("id", 
"entity_name", 
"table_name", 
"remote", 
"remote_primary_key")
 VALUES ('887f52ec-4cd6-41e6-b1d8-9e40e9e8f3c6', 
'MyFirstModule.Entity', 
'myfirstmodule$entity', 
false, 
false);
INSERT INTO "mendixsystem$attribute" ("id", 
"entity_id", 
"attribute_name", 
"column_name", 
"type", 
"length", 
"default_value", 
"is_auto_number")
 VALUES ('f7bedc5d-2b5f-4ba8-9afd-54d5ee0f3c1d', 
'887f52ec-4cd6-41e6-b1d8-9e40e9e8f3c6', 
'Attr', 
'attr', 
30, 
200, 
'', 
false);
UPDATE "mendixsystem$version"
 SET "versionnumber" = '4.2', 
"lastsyncdate" = '20220905 16:20:48';
