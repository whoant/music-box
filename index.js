require('dotenv').config();

const express = require('express');
const bodyParser = require('body-parser');
const app = express();

const authRoute = require('./routes/auth.route');
const authRouteAPI = require('./api/routes/auth.route');

const port = process.env.PORT || 8000;


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.use(express.static('public'));

app.set('view engine', 'pug');
app.set('views', './views');

app.use('/auth', authRoute);

app.use('/api/auth', authRouteAPI);


app.listen(port, () => {
    console.log(`Server running on port ${port}`);
})