BEGIN;

DROP TABLE IF EXISTS "user";
DROP TABLE IF EXISTS post;
DROP TABLE IF EXISTS image;
DROP TABLE IF EXISTS user_post_ref;
DROP TABLE IF EXISTS image_post_ref;

COMMIT;

BEGIN;

CREATE TABLE "user" (
  user_id SERIAL UNIQUE PRIMARY KEY,
  fname VARCHAR(30) NOT NULL,
  lname VARCHAR(30) NOT NULL,
  email VARCHAR(100) UNIQUE NOT NULL,
  password VARCHAR(255) NOT NULL
);

CREATE TABLE post (
  post_id SERIAL UNIQUE PRIMARY KEY,
  title VARCHAR(255) NOT NULL,
  description TEXT NOT NULL,
  user_id INT NOT NULL
);

CREATE TABLE image (
  image_id SERIAL UNIQUE PRIMARY KEY,
  title VARCHAR(255) NOT NULL,
  url VARCHAR(255) NOT NULL,
  alt VARCHAR(255)
);

CREATE TABLE user_post_ref (
  user_id INT NOT NULL,
  post_id INT NOT NULL
);

CREATE TABLE image_post_ref (
  post_id INT NOT NULL,
  image_id INT NOT NULL
);

COMMIT;

BEGIN;

DROP TABLE IF EXISTS unapproved_user;
DROP TABLE IF EXISTS question;
DROP TABLE IF EXISTS user_answer;

COMMIT;

BEGIN;

CREATE TABLE unapproved_user (
  user_id SERIAL UNIQUE PRIMARY KEY,
  fname VARCHAR(30) NOT NULL,
  lname VARCHAR(30) NOT NULL,
  email VARCHAR(100) UNIQUE NOT NULL,
  password VARCHAR(255) NOT NULL
);

CREATE TABLE question (
  question_num INT UNIQUE NOT NULL PRIMARY KEY,
  question_text TEXT NOT NULL,
  choice_1 VARCHAR(255) NOT NULL,
  choice_2 VARCHAR(255) NOT NULL,
  choice_3 VARCHAR(255) NOT NULL,
  choice_4 VARCHAR(255) NOT NULL
);

CREATE TABLE user_answer (
  user_id INT NOT NULL UNIQUE PRIMARY KEY,
  question_1_answer INT,
  question_2_answer INT,
  question_3_answer INT,
  question_4_answer INT,
  question_5_answer INT,
  question_6_answer INT,
  question_7_answer INT,
  question_8_answer INT,
  question_9_answer INT,
  question_10_answer INT
);

COMMIT;
