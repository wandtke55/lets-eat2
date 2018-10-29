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
        console.log(req.body)
      let { titleInput, commentInput } = req.body.comment;
      console.log(titleInput, commentInput)
      if(!titleInput || !commentInput) {
          return res.sendStatus(400)
      }
      req.app.get('db')
      .add_comment([titleInput, commentInput])
      .then( comments => {
        // console.log('got comments: ', comments)
        // res.status(200).send(comments);
            res.send(comments)
      }).catch(err => {
          console.log('addComment db error', err)
      })
    },
  
    deleteComment: (req, res) => {
      let { id } = req.params;
      req.app.get('db')
      .delete_comment([id])
      .then( comments => {
        return res.send(comments);
      })
    },
  
    updateComment: (req, res) => {
      let { id } = req.params;
      let { titleInput, commentInput } = req.body;
      req.app.get('db')
      .update_comment([titleInput, commentInput, id])
      .then( comments => {
        console.log(comments)
        return res.send(comments);
      })
    }
  };