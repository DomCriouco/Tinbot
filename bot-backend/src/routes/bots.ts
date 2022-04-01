import express from "express";
import {createBots, retrieveBots} from "../controllers";
import {getReasonPhrase, StatusCodes} from "http-status-codes";

const botsRoute = express.Router();

botsRoute.route('/')
    .get(async (req:express.Request, res:express.Response) => {
        try {
            const result = await retrieveBots();
            res.status(StatusCodes.OK).send(result);
        } catch (err) {
            res.status(StatusCodes.INTERNAL_SERVER_ERROR).send({
                error : getReasonPhrase(StatusCodes.INTERNAL_SERVER_ERROR)
            });
        }
    })
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

export default botsRoute;