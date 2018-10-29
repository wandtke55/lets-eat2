SELECT uf.name, ui.image, ui.email 
FROM user_info ui
JOIN user_favorites uf 
ON ui.auth = uf.user_id