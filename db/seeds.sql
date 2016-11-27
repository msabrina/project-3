-- seeds

BEGIN;

INSERT INTO post (title, description, user_id, price, image_count) VALUES ('Test 1', 'This is product 1', 1, 9.99, 0);
INSERT INTO post (title, description, user_id, price, image_count) VALUES ('Test 2', 'This is product 2', 1, 19.99, 0);
INSERT INTO post (title, description, user_id, price, image_count) VALUES ('Test 3', 'This is product 3', 2, 29.99, 0);
INSERT INTO post (title, description, user_id, price, image_count) VALUES ('Test 4', 'This is product 4', 2, 39.99, 0);
INSERT INTO post (title, description, user_id, price, image_count) VALUES ('Test 5', 'This is product 5', 3, 49.99, 0);
INSERT INTO post (title, description, user_id, price, image_count) VALUES ('Test 6', 'This is product 6', 4, 59.99, 0);

INSERT INTO user_post_ref (user_id, post_id) VALUES (1, 1);
INSERT INTO user_post_ref (user_id, post_id) VALUES (1, 2);
INSERT INTO user_post_ref (user_id, post_id) VALUES (2, 3);
INSERT INTO user_post_ref (user_id, post_id) VALUES (2, 4);
INSERT INTO user_post_ref (user_id, post_id) VALUES (3, 5);
INSERT INTO user_post_ref (user_id, post_id) VALUES (4, 6);

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
