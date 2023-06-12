import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import cors from 'cors';
import passport from 'passport';
import postRouters from './routes/posts.js';
import userRouters from './routes/users,js';

const app = express();

app.use(bodyParser.json({ limit: "30mb", extended:true}));
app.use(bodyParser.urlencoded({ limit: "30mb", extended:true}));
app.use(cors());

// Passport middleware
app.use(passport.initialize());

// Passport config
require("./config/passport")(passport);

//Use all the routes
app.use('/posts', postRouters);
app.use('/register', userRouters);
app.use('/login', userRouters);

//Setting up connection
const CONNECTION_URL = "mongodb+srv://admin:dCcxtBIuQS2o9rga@cluster0.vwuh4yo.mongodb.net/";
const PORT = process.env.PORT || 5000;

//Connect to mongoDB
mongoose.connect(CONNECTION_URL, { useNewUrlParser: true, useUnifiedTopology: true})
.then(() => app.listen(PORT, () => console.log(`Server running on port: ${PORT}`)))
.catch((err) => console.log(err.message));

