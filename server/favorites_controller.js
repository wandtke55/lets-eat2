module.exports = {
        getFavorites: (req, res) => {
          req.app.get('db')
          .get_favorites()
          .then( favorites => {
              res.status(200).send(favorites);
          })
        },
      
        addFavorite: (req, res) => {
            let {favorites} = req.body
          req.app.get('db')
          .add_favorite([favorites])
          .then( favorites => {
                res.send(favorites)
          }).catch(err => {
              console.log('addFavorite db error', err)
          })
        },
      
        deleteFavorite: (req, res) => {
          let { id } = req.params;
          req.app.get('db')
          .delete_favorite([id])
          .then( favorites => {
            return res.send(favorites);
          })
        },
      
        updateFavorite: (req, res) => {
          let { id } = req.params;
          let { favorite } = req.body;
          req.app.get('db')
          .update_comment([favorite, id])
          .then( favorites => {
            return res.send(favorites);
          })
        }
      };
