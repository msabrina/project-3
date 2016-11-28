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

INSERT INTO watched_items_ref (post_id, user_id) VALUES (1, 1);
INSERT INTO watched_items_ref (post_id, user_id) VALUES (1, 1);
INSERT INTO watched_items_ref (post_id, user_id) VALUES (2, 1);
INSERT INTO watched_items_ref (post_id, user_id) VALUES (2, 1);
INSERT INTO watched_items_ref (post_id, user_id) VALUES (3, 1);
INSERT INTO watched_items_ref (post_id, user_id) VALUES (3, 1);
INSERT INTO watched_items_ref (post_id, user_id) VALUES (4, 1);
INSERT INTO watched_items_ref (post_id, user_id) VALUES (4, 1);
INSERT INTO watched_items_ref (post_id, user_id) VALUES (5, 1);
INSERT INTO watched_items_ref (post_id, user_id) VALUES (5, 1);
INSERT INTO watched_items_ref (post_id, user_id) VALUES (6, 1);
INSERT INTO watched_items_ref (post_id, user_id) VALUES (6, 1);

COMMIT;

BEGIN;

INSERT INTO question (question_num, question_text, choice_1, choice_2, choice_3, choice_4) VALUES (1, 'What is your annual household income?', '0-20k', '21k-40k', '41k-80k', '81k+');
INSERT INTO question (question_num, question_text, choice_1, choice_2, choice_3, choice_4) VALUES (2, 'What is the highest degree completed?', 'High School', 'Associate''s Degree', 'Bachelor''s Degree', 'Master''s+');
INSERT INTO question (question_num, question_text, choice_1, choice_2, choice_3, choice_4) VALUES (3, 'What is your age?', '0-18', '19-25', '25-40', '41+');
INSERT INTO question (question_num, question_text, choice_1, choice_2, choice_3, choice_4) VALUES (4, 'Employment Status: Are you currently…', 'Employed for wages', 'Self-employed', 'Unemployed', 'Homemaker');
INSERT INTO question (question_num, question_text, choice_1, choice_2, choice_3, choice_4) VALUES (5, 'Where do you live?', 'United States of America', 'Canada', 'Mexico', 'Europe');
INSERT INTO question (question_num, question_text, choice_1, choice_2, choice_3, choice_4) VALUES (6, 'Which hobby most interests you?', 'Travel', 'Arts', 'Sports', 'Television');
INSERT INTO question (question_num, question_text, choice_1, choice_2, choice_3, choice_4) VALUES (7, 'What is your current living status?', 'Own a home', 'Rent a home', 'Rent with roomates', 'Homeless');
INSERT INTO question (question_num, question_text, choice_1, choice_2, choice_3, choice_4) VALUES (8, 'What is your current vehicle ownership status?', 'Own 1', 'Own 2+', 'Lease', 'None');

INSERT INTO answers (question_num, correct_answer) VALUES (1, 4);
INSERT INTO answers (question_num, correct_answer) VALUES (2, 4);
INSERT INTO answers (question_num, correct_answer) VALUES (3, 3);
INSERT INTO answers (question_num, correct_answer) VALUES (4, 1);
INSERT INTO answers (question_num, correct_answer) VALUES (5, 2);
INSERT INTO answers (question_num, correct_answer) VALUES (6, 2);
INSERT INTO answers (question_num, correct_answer) VALUES (7, 1);
INSERT INTO answers (question_num, correct_answer) VALUES (8, 2);

COMMIT;
