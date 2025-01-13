const express = require('express');
const userRouter = require('./routes/user.routes');
const dotenv = require('dotenv');
const cookieParser = require('cookie-parser');

dotenv.config();

const connectToDB = require('./config/db');
const { cookie } = require('express-validator');
connectToDB();

dotenv.config();

const app = express();

app.set('view engine', 'ejs');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

app.use('/user', userRouter);

app.listen(3000, () => {
    console.log('Server is running on http://localhost:3000');
});