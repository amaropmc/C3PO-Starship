INSERT INTO questions (DESCRIPTION)
VALUES
    ('C3PO appears for the first time in this world?'),
    ('Who buys C3PO and R2D2 in Tattoine?'),
    ('Who assembled C3PO?'),
    ('Who reassembled C3PO after the shooting?'),
    ('What happened to Han Solo while on Bespin?'),
    ('From what planet did the evacuate before Bespin?');

INSERT INTO answers (DESCRIPTION, CORRECT)
VALUES
    ('True', true),
    ('False', false),
    ('Owen Lars and Luke Skywalker', true),
    ('Shmi', false),
    ('R2D2', false),
    ('Obi-Wan Kenobi', false),
    ('Anakin Skywalker', true),
    ('Shmi', false),
    ('Cliegg Lars', false),
    ('The Sand people', false),
    ('Chewbacca', true),
    ('R2D2', false),
    ('Han Solo', false),
    ('Leia', false),
    ('He was frozen in carbonite', true),
    ('Stayed behind fighting stormtroopers', false),
    ('Hoth', true),
    ('Mandalore', false),
    ('Aldeeran', false),
    ('Dagobah', false);


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