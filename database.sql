
-- USER is a reserved keyword with Postgres
-- You must use double quotes in every query that user is in:
-- ex. SELECT * FROM "user";
-- Otherwise you will have errors!

CREATE TABLE "user" (
	"id" SERIAL PRIMARY KEY,
	"username" varchar(80) NOT NULL UNIQUE,
	"password" varchar(1000) NOT NULL,
	"firstname" varchar(50) NOT NULL
);

CREATE TABLE "shows" (
	"id" SERIAL PRIMARY KEY NOT NULL,
	"artist" varchar(250) NOT NULL,
	"support" varchar(250) NOT NULL,
	"venue" varchar(250) NOT NULL,
	"date" date NOT NULL,
	"notes" varchar(2000) NOT NULL,
	"user_id" INT REFERENCES "user" NOT NULL
);