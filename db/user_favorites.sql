INSERT INTO user_favorites (name, gps_location, menu, info, user_id)
VALUES ($1, $2, $3, $4, $5)
RETURN *;