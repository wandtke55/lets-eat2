UPDATE comments
SET comment_title = $1, comment = $2
WHERE id = $3;

SELECT * FROM comments
WHERE restaurant_id = $4