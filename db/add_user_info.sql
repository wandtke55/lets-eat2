INSERT INTO user_info (auth, image, email)
VALUES ($1, $2, $3)
RETURNING image & email;