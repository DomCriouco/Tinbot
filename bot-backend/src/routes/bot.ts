import express from "express";
import {retrieveBot} from "../controllers";
import {getReasonPhrase, StatusCodes} from "http-status-codes";

const botRoute = express.Router();

botRoute.route('/')
    .get(async (req:express.Request, res:express.Response) => {
        try {
            const result = await retrieveBot();
            res.status(StatusCodes.OK).send(result);
        } catch (err) {
            res.status(StatusCodes.INTERNAL_SERVER_ERROR).send({
                error : getReasonPhrase(StatusCodes.INTERNAL_SERVER_ERROR)
            });
        }
    });

export default botRoute;