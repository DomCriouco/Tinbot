import {botModel} from "../models";

export const retrieveBot = async () => {
    const botsCount = await botModel.find().count();
    return botModel.findOne().skip(Math.floor(Math.random() * botsCount));
};