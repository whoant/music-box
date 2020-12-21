require('dotenv').config();

const express = require('express');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');

const app = express();

const authRoute = require('./routes/auth.route');
const userRoute = require('./routes/user.route');
const authRouteAPI = require('./api/routes/auth.route');

const authMiddleware = require('./middlewares/auth.middleware');


const port = process.env.PORT || 8000;

app.use(cookieParser(process.env.SECRET_KEY));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.set('view engine', 'pug');
app.set('views', './views');
app.use(express.static('public'));


app.get('/', (req, res) => {
    res.redirect('/auth');
});

app.use('/auth', authRoute);

app.use('/users', authMiddleware.requireAuth, userRoute);

app.use('/api/auth', authRouteAPI);


app.listen(port, () => {
    console.log(`Server running on port ${port}`);
})