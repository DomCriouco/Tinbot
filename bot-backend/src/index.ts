import {config} from "dotenv";
config();

import express from 'express';
import mongoose from "mongoose";
import {botRoute, botsRoute} from "./routes";

const app = express();
mongoose.connect('mongodb://127.0.0.1:27017/bot')

app.use('/api/v1/bot', botRoute);
app.use('/api/v1/bots', botsRoute);

app.listen(process.env.PORT, () => {
    console.log(`Currently listening on port ${process.env.PORT}`);
});
