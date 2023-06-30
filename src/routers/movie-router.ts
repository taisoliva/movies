import * as movieController from "../controllers/movie-controller";
import { Router } from "express";

export const movieRouter = Router()

movieRouter.post("/movie", movieController.createMovie)
movieRouter.get("/movie", movieController.getMovies)
movieRouter.put("/movie/:id", movieController.updateMovies)
movieRouter.delete("/movie/:id", movieController.deleteMovies)


