DELETE FROM comments
WHERE id = $1;

SELECT * FROM comments
WHERE restaurant_id = $2