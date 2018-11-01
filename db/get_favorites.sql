SELECT uf.name, ui.image, ui.email, uf.id 
FROM user_info ui
JOIN user_favorites uf 
ON ui.id = uf.user_id
WHERE uf.user_id = $1