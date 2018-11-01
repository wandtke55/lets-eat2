INSERT INTO comments (user_id, comment_title, comment, restaurant_id)
VALUES ($1, $2, $3, $4);

SELECT * FROM comments
WHERE restaurant_id = $4