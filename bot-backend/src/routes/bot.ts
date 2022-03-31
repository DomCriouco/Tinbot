import express from "express";
import {createBots} from "../controllers";
import {getReasonPhrase, StatusCodes} from "http-status-codes";

const botRoute = express.Router();

botRoute.route('/')
    .get((req:express.Request, res:express.Response) => res.send('To do bot list'))
    .post(async (req:express.Request, res:express.Response) => {
        try {
            const result = await createBots();
            res.status(StatusCodes.CREATED).send(result);
        } catch (err) {
            res.status(StatusCodes.INTERNAL_SERVER_ERROR).send({
                error : getReasonPhrase(StatusCodes.INTERNAL_SERVER_ERROR)
            });
        }
    });

export default botRoute;