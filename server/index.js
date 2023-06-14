import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import cors from 'cors';
import passport from 'passport';
import dotenv from 'dotenv';
import postRouters from './routes/posts.js';
import userRouters from './routes/users.js';

const app = express();
app.use(bodyParser.json({ limit: "30mb", extended:true}));
app.use(bodyParser.urlencoded({ limit: "30mb", extended:true}));

dotenv.config()
// Passport middleware
app.use(passport.initialize());

// Passport config
import passportConfig from './config/passport.js';

//Use all the routes
app.use('/posts', postRouters);
app.use('/register', userRouters);
app.use('/login', userRouters);


//Connect to mongoDB
mongoose.connect(process.env.MONGOURI, { useNewUrlParser: true, useUnifiedTopology: true})
.then(() => app.listen(process.env.PORT, () => console.log(`Server running on port: ${process.env.PORT}`)))
.catch((err) => console.log(err.message));

