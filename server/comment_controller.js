module.exports = {
    getComments: (req, res) => {
      req.app.get('db')
      .get_comments()
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
        res.status(201).send(comments);
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
      let { title, note } = req.body;
      req.app.get('db')
      .update_comment([title, note, id])
      .then( comments => {
        return res.send(comments);
      })
    }
  };