import {botModel} from "../models";

export const retrieveBots = async () => {
    return botModel.find();
};