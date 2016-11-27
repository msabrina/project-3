BEGIN;

DROP TABLE IF EXISTS "user";
DROP TABLE IF EXISTS post;
DROP TABLE IF EXISTS image;
DROP TABLE IF EXISTS user_post_ref;
DROP TABLE IF EXISTS watched_items_ref;
DROP TABLE IF EXISTS image_post_ref;
DROP TABLE IF EXISTS question;
DROP TABLE IF EXISTS answers;
DROP TABLE IF EXISTS survey_response;
DROP TABLE IF EXISTS approved_emails;

COMMIT;

BEGIN;

CREATE TABLE "user" (
  user_id SERIAL UNIQUE PRIMARY KEY,
  fname VARCHAR(30) NOT NULL,
  lname VARCHAR(30) NOT NULL,
  email VARCHAR(100) UNIQUE NOT NULL,
  password VARCHAR(255) NOT NULL,
  joined_date DATE NOT NULL DEFAULT now()
);

CREATE TABLE post (
  post_id SERIAL UNIQUE PRIMARY KEY,
  title VARCHAR(255) NOT NULL,
  description TEXT NOT NULL,
  user_id INT NOT NULL,
  price REAL NOT NULL,
  image_count INT NOT NULL,
  watch_count INT NOT NULL DEFAULT 0,
  created_date DATE NOT NULL DEFAULT now()
);

CREATE TABLE image (
  image_id SERIAL UNIQUE PRIMARY KEY,
  title VARCHAR(255) NOT NULL,
  url VARCHAR(255) NOT NULL,
  upload_date DATE NOT NULL DEFAULT now(),
  alt_text VARCHAR(255)
);

CREATE TABLE user_post_ref (
  user_id INT NOT NULL,
  post_id INT NOT NULL
);

CREATE TABLE image_post_ref (
  post_id INT NOT NULL,
  image_id INT NOT NULL
);

CREATE TABLE watched_items_ref (
  user_id INT NOT NULL,
  post_id INT NOT NULL
);

CREATE TABLE question (
  question_num INT UNIQUE NOT NULL PRIMARY KEY,
  question_text TEXT NOT NULL,
  choice_1 VARCHAR(255) NOT NULL,
  choice_2 VARCHAR(255) NOT NULL,
  choice_3 VARCHAR(255) NOT NULL,
  choice_4 VARCHAR(255) NOT NULL
);

CREATE TABLE answers (
  question_num INT UNIQUE NOT NULL PRIMARY KEY,
  correct_answer INT NOT NULL
);

CREATE TABLE survey_response (
  response_id SERIAL UNIQUE PRIMARY KEY,
  email VARCHAR(100) NOT NULL,
  q1 INT NOT NULL,
  q2 INT NOT NULL,
  q3 INT NOT NULL,
  q4 INT NOT NULL,
  q5 INT NOT NULL,
  q6 INT NOT NULL,
  q7 INT NOT NULL,
  q8 INT NOT NULL,
  q9 INT NOT NULL,
  q10 INT NOT NULL,
  submit_date DATE NOT NULL DEFAULT now()
);

CREATE TABLE approved_emails (
  temp_id INT UNIQUE PRIMARY KEY,
  email VARCHAR(100) NOT NULL
);

COMMIT;
