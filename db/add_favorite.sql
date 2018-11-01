INSERT INTO user_favorites (name, user_id)
VALUES ($1, $2);

SELECT * FROM user_favorites
WHERE user_id = $2