INSERT INTO planets (NAME, VERSION, CREATIONTIME, UPDATETIME)
VALUES
    ('Tatooine',1, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
    ('Bespin',1, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
    ('FOREST MOON OF ENDOR', 1, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
    ('ILUM', 1, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
    ('POLIS MASSA', 1, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
    ('MANDALORE', 1, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP);

INSERT INTO planets_questions (PLANET_ID, QUESTION_ID)
VALUES
    (1, 1),
    (1,2),
    (1,3),
    (2, 4),
    (2,5),
    (2,6);

INSERT INTO questions (DESCRIPTION, SCORE, VERSION, CREATIONTIME, UPDATETIME)
VALUES
    ('C3PO appears for the first time in this world?', 1, 1, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
    ('Who buys C3PO and R2D2 in Tattoine?', 2, 1, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
    ('Who assembled C3PO?', 3, 1, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
    ('Who reassembled C3PO after the shooting?', 1, 1, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
    ('What happened to Han Solo while on Bespin?', 1, 1, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
    ('From what planet did the evacuate before Bespin?', 2, 1, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP);

INSERT INTO answers (DESCRIPTION, CORRECT, VERSION, CREATIONTIME, UPDATETIME)
VALUES
    ('True', true, 1, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
    ('False', false, 1, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
    ('Owen Lars and Luke Skywalker', true, 1, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
    ('Shmi', false, 1, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
    ('R2D2', false, 1, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
    ('Obi-Wan Kenobi', false, 1, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
    ('Anakin Skywalker', true, 1, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
    ('Shmi', false, 1, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
    ('Cliegg Lars', false, 1, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
    ('The Sand people', false, 1, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
    ('Chewbacca', true, 1, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
    ('R2D2', false, 1, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
    ('Han Solo', false, 1, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
    ('Leia', false, 1, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
    ('He was frozen in carbonite', true, 1, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
    ('Stayed behind fighting stormtroopers', false, 1, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
    ('Hoth', true, 1, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
    ('Mandalore', false, 1, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
    ('Aldeeran', false, 1, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
    ('Dagobah', false, 1, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP);


INSERT INTO questions_answers (QUESTION_ID, ANSWER_ID)
VALUES
    (1,1),
    (1,2),
    (2,3),
    (2,4),
    (2,5),
    (2,6),
    (3, 7),
    (3,8),
    (3,9),
    (3, 10),
    (4, 11),
    (4, 12),
    (4,13),
    (4, 14),
    (5, 15),
    (5,16),
    (6,17),
    (6, 18),
    (6, 19),
    (6, 20);