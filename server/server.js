require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const massive = require('massive');
const axios = require('axios');
const session = require('express-session');
const app = express();
const comment_controller = require('./comment_controller');
const favorites_controller = require('./favorites_controller')
const {
    SERVER_PORT,
    REACT_APP_DOMAIN,
    REACT_APP_CLIENT_ID,
    CLIENT_SECRET,
    CONNECTION_STRING,
    SECRET,
    YELP_API,
    REACT_APP_LOGOUT,
    REACT_APP_HOME,
    AUTH_PROTOCOL
} = process.env

massive(CONNECTION_STRING).then(db => {
    console.log(`WE BUMPIN WIT THE DB!`)
    app.set('db', db)
})

//middleware
app.use(express.static( `${__dirname}/../build`) );
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
app.get('/auth/callback', async (req, res) => {
    // Copy and Paste Start
    let payload = {
        client_id: REACT_APP_CLIENT_ID,
        client_secret: CLIENT_SECRET,
        code: req.query.code,
        grant_type: 'authorization_code',
        redirect_uri: `${AUTH_PROTOCOL}://${req.headers.host}/auth/callback`
    }
    //exchange code for token. token is on resWithToken.data.access_token
    let resWithToken = await axios.post(`https://${REACT_APP_DOMAIN}/oauth/token`, payload)
    //exchange token for user data
    let resWithData = await axios.get(`https://${REACT_APP_DOMAIN}/userinfo?access_token=${resWithToken.data.access_token}`)
    // Copy and Paste Finish
    let {
        sub,
        picture,
        email
    } = resWithData.data
    console.log(resWithData.data)
    let user = await req.app.get('db').check_user([sub, email])
    if (user[0]) {
        req.session.user = user[0]
    } else {
        user = req.app.get('db').add_user_info([sub, picture, email])
        req.session.user = user
    }
    res.redirect(REACT_APP_HOME)
})

app.get('/api/user-data', (req, res) => {
    if (req.session.user) {
        res.status(200).send(req.session.user)
    } else {
        res.status(401).send('schnopes. go log in')
    }
})

app.get('/auth/logout', (req, res) => {
    req.session.destroy()
    res.redirect(REACT_APP_LOGOUT)
})

// api comment endpoints
app.get('/api/comment/:id', comment_controller.getComments)
app.post('/api/comment', comment_controller.addComment)
app.put('/api/comment/:id/:restaurantId', comment_controller.updateComment)
app.delete('/api/comment/:id/:restaurantId', comment_controller.deleteComment)

// user favorites endpoints
app.get('/api/favorites/:id', favorites_controller.getFavorites)
app.post('/api/favorites/', favorites_controller.addFavorite)
app.delete('/api/delete-favorite/:id', favorites_controller.deleteFavorite)

// api randomize endpoints
app.get('/api/get-restaurant', async (req, res) => {
    let {
        name,
        latitude,
        longitude
    } = req.query
    console.log(req.query)
    let getRestaurant = await axios.get(`https://api.yelp.com/v3/businesses/search?term=${name}&latitude=${latitude}&longitude=${longitude}`, {
        headers: {
            'Authorization': 'bearer ' + YELP_API
        }
    }).catch(err=>{
        console.log('yelp api error: ', err)
    })
    res.status(200).send(getRestaurant.data)
})


app.listen(SERVER_PORT, () => {
    console.log(`WE CHOWIN DOWN ON PORT: ${SERVER_PORT}`)
})