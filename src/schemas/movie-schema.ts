import { MovieInput } from "protocols";
import Joi from "joi";

export const movieSchema = Joi.object<MovieInput>({
    title:Joi.string().required(),
    genre:Joi.string().required(),
    platform: Joi.string().required(),
    status: Joi.string().required(),
    summary: Joi.string().optional()
})

export default movieSchema