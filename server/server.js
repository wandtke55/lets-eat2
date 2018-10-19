require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const massive = require('massive');
const axios = require('axios');
const session = require('express-session');
const app = express();
const comment_controller = require('./comment_controller');
const {
    SERVER_PORT,
    REACT_APP_DOMAIN,
    REACT_APP_CLIENT_ID,
    CLIENT_SECRET,
    CONNECTION_STRING,
    SECRET
} = process.env

massive(CONNECTION_STRING).then(db => {
    console.log(`WE BUMPIN WIT THE DB!`)
    app.set('db', db)})

//middleware
app.use(session({
    secret: SECRET,
    resave: false,
    saveUninitialized: false
}))
app.use(bodyParser.json())

// let authBypass = async (req, res, next)=>{
//     if(process.env.NODE_ENV){
//         const db = req.app.get('db')
//         let res = await db.session_user()
//         req.session.user = res[0]
//         next()
//     } else {
//         next()
//     }
// }

//endpoints
//auth0
app.get('/auth/callback', async (req, res)=>{
    // Copy and Paste Start
    let payload = {
      client_id: REACT_APP_CLIENT_ID,
      client_secret: CLIENT_SECRET,
      code: req.query.code,
      grant_type: 'authorization_code',
      redirect_uri: `http://${req.headers.host}/auth/callback`
    }
    //exchange code for token. token is on resWithToken.data.access_token
    let resWithToken = await axios.post(`https://${REACT_APP_DOMAIN}/oauth/token`, payload)
    //exchange token for user data
    let resWithData = await axios.get(`https://${REACT_APP_DOMAIN}/userinfo?access_token=${resWithToken.data.access_token}`)
    // Copy and Paste Finish
    let {sub, picture} = resWithData.data
    let user = await req.app.get('db').check_user([sub])
    if(user[0]){
        req.session.user = user
    } else {
        user = req.app.get('db').add_user_info([sub, picture])
        req.session.user =  user
    } 
    res.redirect('http://localhost:3000')
})

app.get('/api/user-data', (req, res)=>{
    if(req.session.user){
        res.status(200).send(req.session.user)
    } else {
        res.status(401).send('schnopes. go log in')
    }
})

app.get('/auth/logout', (req, res)=>{
    req.session.destroy()
    res.redirect('http://localhost:3000/#/')
})

//api endpoints
app.get('/api/comment', comment_controller.getComments)
app.post('/api/comment', comment_controller.addComment)
app.put('/api/comment/:id', comment_controller.updateComment)
app.delete('/api/comment/:id', comment_controller.deleteComment)


app.listen(SERVER_PORT, ()=>{
    console.log(`WE CHOWIN DOWN ON PORT: ${SERVER_PORT}`)
})