INSERT INTO user_favorites (name)
VALUES ($1)

SELECT * FROM user_favorites
WHERE user_id = $2