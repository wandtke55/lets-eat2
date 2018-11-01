DELETE FROM user_favorites
WHERE id = $1;

SELECT * FROM user_favorites
WHERE user_id = $2