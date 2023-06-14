import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import cors from 'cors';
import dotenv from 'dotenv';
import PostRoute from './routes/PostRoute.js';
import AuthRoute from './routes/AuthRoute.js';

const app = express();
//Middleware
app.use(bodyParser.json({ limit: "30mb", extended:true}));
app.use(bodyParser.urlencoded({ limit: "30mb", extended:true}));
app.use(cors());

dotenv.config()

//Connect to mongoDB
mongoose.connect(process.env.MONGOURI, { useNewUrlParser: true, useUnifiedTopology: true})
.then(() => app.listen(process.env.PORT, () => console.log(`Server running on port: ${process.env.PORT}`)))
.catch((err) => console.log(err.message));

//Routes
app.use('/posts', PostRoute);
app.use('/auth', AuthRoute)
