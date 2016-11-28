BEGIN;

INSERT INTO post (title, description, user_id, price, image_count) VALUES ('Test 1', 'This is product 1', 1, 9.99, 0);
INSERT INTO post (title, description, user_id, price, image_count) VALUES ('Test 2', 'This is product 2', 1, 19.99, 0);
INSERT INTO post (title, description, user_id, price, image_count) VALUES ('Test 3', 'This is product 3', 2, 29.99, 0);
INSERT INTO post (title, description, user_id, price, image_count) VALUES ('Test 4', 'This is product 4', 2, 39.99, 0);
INSERT INTO post (title, description, user_id, price, image_count) VALUES ('Test 5', 'This is product 5', 3, 49.99, 0);
INSERT INTO post (title, description, user_id, price, image_count) VALUES ('Test 6', 'This is product 6', 4, 59.99, 0);

INSERT INTO image (title, url, alt_text) VALUES ('T1', '/image-1.png', 'Alt 1');
INSERT INTO image (title, url, alt_text) VALUES ('T2', '/image-2.png', 'Alt 2');
INSERT INTO image (title, url, alt_text) VALUES ('T3', '/image-3.png', 'Alt 3');
INSERT INTO image (title, url, alt_text) VALUES ('T4', '/image-4.png', 'Alt 4');
INSERT INTO image (title, url, alt_text) VALUES ('T5', '/image-5.png', 'Alt 5');
INSERT INTO image (title, url, alt_text) VALUES ('T6', '/image-6.png', 'Alt 6');
INSERT INTO image (title, url, alt_text) VALUES ('T7', '/image-7.png', 'Alt 7');
INSERT INTO image (title, url, alt_text) VALUES ('T8', '/image-8.png', 'Alt 8');
INSERT INTO image (title, url, alt_text) VALUES ('T9', '/image-9.png', 'Alt 9');
INSERT INTO image (title, url, alt_text) VALUES ('T10', '/image-10.png', 'Alt 10');
INSERT INTO image (title, url, alt_text) VALUES ('T11', '/image-11.png', 'Alt 11');
INSERT INTO image (title, url, alt_text) VALUES ('T12', '/image-12.png', 'Alt 12');

INSERT INTO user_post_ref (user_id, post_id) VALUES (1, 1);
INSERT INTO user_post_ref (user_id, post_id) VALUES (1, 2);
INSERT INTO user_post_ref (user_id, post_id) VALUES (2, 3);
INSERT INTO user_post_ref (user_id, post_id) VALUES (2, 4);
INSERT INTO user_post_ref (user_id, post_id) VALUES (3, 5);
INSERT INTO user_post_ref (user_id, post_id) VALUES (4, 6);

INSERT INTO image_post_ref (post_id, image_id) VALUES (1, 1);
INSERT INTO image_post_ref (post_id, image_id) VALUES (1, 2);
INSERT INTO image_post_ref (post_id, image_id) VALUES (2, 3);
INSERT INTO image_post_ref (post_id, image_id) VALUES (2, 4);
INSERT INTO image_post_ref (post_id, image_id) VALUES (3, 5);
INSERT INTO image_post_ref (post_id, image_id) VALUES (3, 6);
INSERT INTO image_post_ref (post_id, image_id) VALUES (4, 7);
INSERT INTO image_post_ref (post_id, image_id) VALUES (4, 8);
INSERT INTO image_post_ref (post_id, image_id) VALUES (5, 9);
INSERT INTO image_post_ref (post_id, image_id) VALUES (5, 10);
INSERT INTO image_post_ref (post_id, image_id) VALUES (6, 11);
INSERT INTO image_post_ref (post_id, image_id) VALUES (6, 12);

COMMIT;

BEGIN;

INSERT INTO question (question_num, question_text, choice_1, choice_2, choice_3, choice_4) VALUES (1, 'question 1', 'q1a1', 'q1a2', 'q1a3', 'q1a4');
INSERT INTO question (question_num, question_text, choice_1, choice_2, choice_3, choice_4) VALUES (2, 'question 2', 'q2a1', 'q2a2', 'q2a3', 'q2a4');
INSERT INTO question (question_num, question_text, choice_1, choice_2, choice_3, choice_4) VALUES (3, 'question 3', 'q3a1', 'q3a2', 'q3a3', 'q3a4');
INSERT INTO question (question_num, question_text, choice_1, choice_2, choice_3, choice_4) VALUES (4, 'question 4', 'q4a1', 'q4a2', 'q4a3', 'q4a4');
INSERT INTO question (question_num, question_text, choice_1, choice_2, choice_3, choice_4) VALUES (5, 'question 5', 'q5a1', 'q5a2', 'q5a3', 'q5a4');
INSERT INTO question (question_num, question_text, choice_1, choice_2, choice_3, choice_4) VALUES (6, 'question 6', 'q6a1', 'q6a2', 'q6a3', 'q6a4');
INSERT INTO question (question_num, question_text, choice_1, choice_2, choice_3, choice_4) VALUES (7, 'question 7', 'q7a1', 'q7a2', 'q7a3', 'q7a4');
INSERT INTO question (question_num, question_text, choice_1, choice_2, choice_3, choice_4) VALUES (8, 'question 8', 'q8a1', 'q8a2', 'q8a3', 'q8a4');
INSERT INTO question (question_num, question_text, choice_1, choice_2, choice_3, choice_4) VALUES (9, 'question 9', 'q9a1', 'q9a2', 'q9a3', 'q9a4');
INSERT INTO question (question_num, question_text, choice_1, choice_2, choice_3, choice_4) VALUES (10, 'question 10', 'q10a1', 'q10a2', 'q10a3', 'q10a4');

INSERT INTO answers (question_num, correct_answer) VALUES (1, 1);
INSERT INTO answers (question_num, correct_answer) VALUES (2, 1);
INSERT INTO answers (question_num, correct_answer) VALUES (3, 1);
INSERT INTO answers (question_num, correct_answer) VALUES (4, 1);
INSERT INTO answers (question_num, correct_answer) VALUES (5, 1);
INSERT INTO answers (question_num, correct_answer) VALUES (6, 1);
INSERT INTO answers (question_num, correct_answer) VALUES (7, 1);
INSERT INTO answers (question_num, correct_answer) VALUES (8, 1);
INSERT INTO answers (question_num, correct_answer) VALUES (9, 1);
INSERT INTO answers (question_num, correct_answer) VALUES (10, 1);

COMMIT;
