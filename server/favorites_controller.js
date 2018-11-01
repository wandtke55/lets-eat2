module.exports = {
        getFavorites: (req, res) => {
          let {id} = req.params
          console.log(req.params)
          req.app.get('db')
          .get_favorites([id])
          .then( favorites => {
            console.log(favorites)
              res.status(200).send(favorites);
          })
        },
      
        addFavorite: (req, res) => {
            let {favorite} = req.body
            console.log('this is the user favorite:', req.session.user.id)
          req.app.get('db')
          .add_favorite([favorite, req.session.user.id])
          .then( favorites => {
                res.send(favorites)
          }).catch(err => {
              console.log('addFavorite db error', err)
          })
        },
      
        deleteFavorite: (req, res) => {
          let { id } = req.params;
          req.app.get('db')
          .delete_favorite([id, req.session.user.id])
          .then( favorites => {
            return res.send(favorites);
          })
        },
      
        // updateFavorite: (req, res) => {
        //   let { id } = req.params;
        //   let { favorite } = req.body;
        //   req.app.get('db')
        //   .update_comment([favorite, id])
        //   .then( favorites => {
        //     return res.send(favorites);
        //   })
        // }
      };
