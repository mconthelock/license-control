--------------------------------------------------------
--  File created - Wednesday-October-16-2024
--------------------------------------------------------
--------------------------------------------------------
--  DDL for Table DOC_CATEGORY
--------------------------------------------------------

CREATE TABLE LICENSE_CATEGORY(
    "CATE_ID" NUMBER,
	"CATE_NAME" VARCHAR2(100 BYTE)
);
Insert into LICENSE_CATEGORY (CATE_ID,CATE_NAME) values (1,'License');
Insert into LICENSE_CATEGORY (CATE_ID,CATE_NAME) values (2,'Certificate');
Insert into LICENSE_CATEGORY (CATE_ID,CATE_NAME) values (3,'Contract');
Insert into LICENSE_CATEGORY (CATE_ID,CATE_NAME) values (4,'Agreement');
Insert into LICENSE_CATEGORY (CATE_ID,CATE_NAME) values (5,'Compliance');

--------------------------------------------------------
--  DDL for Table LICENSE_TEMPLATE
--------------------------------------------------------
CREATE TABLE LICENSE_TEMPLATE(
    "DOCID" NUMBER,
	"DOCNO" NVARCHAR2(10),
	"DOCNAME" NVARCHAR2(100),
	"DOCCATEGORY" NUMBER,
	"DOCTERM" NUMBER,
	"DOCTERMUNIT" NVARCHAR2(5),
	"DOCALERT" NUMBER,
    "DOCPIC" NVARCHAR2(5),
    "DOCDIV" NVARCHAR2(6),
    "DOCDEPT" NVARCHAR2(6),
    "DOCSEC" NVARCHAR2(6),
    "DOCLEVEL" NVARCHAR2(6),
	"EXTENDED" NVARCHAR2(1),
    "CREATEDATE" TIMESTAMP (6) DEFAULT sysdate,
    "CREATEBY" NVARCHAR2(5),
    "UPDATEDATE" TIMESTAMP (6),
    "UPDATEBY" NVARCHAR2(5)
);

CREATE SEQUENCE SEQ_LICENSE_MASTERID MINVALUE 1 MAXVALUE 9999999999999999999999999999 INCREMENT BY 1 START WITH 1 NOCACHE  NOORDER  NOCYCLE;

CREATE OR REPLACE TRIGGER LICENSE_MASTERID
BEFORE INSERT ON LICENSE_TEMPLATE
FOR EACH ROW
BEGIN
    IF :NEW.DOCID IS NULL THEN
        SELECT SEQ_LICENSE_MASTERID.NEXTVAL INTO :NEW.DOCID FROM dual;
    END IF;
END;
--------------------------------------------------------
--  DDL for Table LICENSE_MSTALERT
--------------------------------------------------------
CREATE TABLE LICENSE_MSTALERT (
    "ALT_DOC" NUMBER,
	"ALT_EMP" NVARCHAR2(5)
);

--------------------------------------------------------
--  DDL for Table LICENSE_MSTCOLUMN
--------------------------------------------------------
CREATE TABLE LICENSE_MSTCOLUMN(
    "COL_ID" NUMBER,
	"COL_DOC" NUMBER,
	"COL_NAME" NVARCHAR2(100),
	"COL_TYPE" NVARCHAR2(20)
);

CREATE SEQUENCE SEQ_LICENSE_ADDID MINVALUE 1 MAXVALUE 9999999999999999999999999999 INCREMENT BY 1 START WITH 1 NOCACHE  NOORDER  NOCYCLE;

CREATE OR REPLACE TRIGGER LICENSE_ADDID
BEFORE INSERT ON LICENSE_MSTCOLUMN
FOR EACH ROW
BEGIN
    IF :NEW.COL_ID IS NULL THEN
        SELECT SEQ_LICENSE_ADDID.NEXTVAL INTO :NEW.COL_ID FROM dual;
    END IF;
END;
--------------------------------------------------------
--  DDL for Table LICENSE_MSTOPTION
--------------------------------------------------------
CREATE TABLE LICENSE_MSTOPTION(
    "OPT_ID" NUMBER,
	"OPT_COLUMN" NUMBER,
	"OPT_VALUE" NVARCHAR2(100)
);


