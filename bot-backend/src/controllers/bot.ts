import {botModel} from "../models";
import {names, faceInterface} from "../utils";
import axios from "axios";

export const createBots = async () => {
    let url = 'https://api.generated.photos/api/v1/faces';

    const res = await axios.get(url, {
        params: {
            api_key: process.env.API_KEY,
            per_page: 100
        }
    });

    return res.data.faces.map(async (face: faceInterface) => {
        const bot = new botModel({
            picUrl: {
                64: face.urls[1]["64"],
                512: face.urls[4]["512"]
            },
            name: face.meta.gender[0] === "male"? names.male[Math.floor(Math.random()*20)] : names.female[Math.floor(Math.random()*20)],
            meta: {
                gender: face.meta.gender[0],
                age: face.meta.age[0],
                ethnicity: face.meta.ethnicity,
                eye_color: face.meta.eye_color,
                hair_color: face.meta.hair_color,
                hair_length: face.meta.hair_length,
                emotion: face.meta.emotion,
            }
        });

        return await bot.save();
    });
};