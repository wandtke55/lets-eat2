module.exports = {
    getComments: (req, res) => {
      let {id} = req.params
      req.app.get('db')
      .get_comments(id)
      .then( comments => {
          res.status(200).send(comments);
      })
    },
  
    addComment: (req, res) => {
        console.log(req.body.comment)
      let { titleInput, commentInput} = req.body.comment;
      let {restaurantId} = req.body
      console.log(titleInput, commentInput, restaurantId)
      if(!titleInput || !commentInput) {
          return res.sendStatus(400)
      }
      console.log('this is the user comment', req.session.user.id)
      req.app.get('db')
      .add_comment([req.session.user.id,titleInput, commentInput,restaurantId])
      .then( comments => {
        // console.log('got comments: ', comments)
        // res.status(200).send(comments);
            res.send(comments)
      }).catch(err => {
          console.log('addComment db error', err)
      })
    },
  
    deleteComment: (req, res) => {
      let { id, restaurantId} = req.params;
      req.app.get('db')
      .delete_comment([id, restaurantId])
      .then( comments => {
        return res.send(comments);
      })
    },
  
    updateComment: (req, res) => {
      let { id, restaurantId} = req.params;
      let { titleInput, commentInput} = req.body;
      console.log(req.body)
      req.app.get('db')
      .update_comment([titleInput, commentInput, id, restaurantId])
      .then( comments => {
        console.log(comments)
        return res.send(comments);
      }).catch(err => console.log('this is the update comment error', err))
    }
  };