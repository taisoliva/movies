import { NextFunction, Request, Response } from "express"
import * as movieServices from "../services/movie-services"
import { Movie, MovieUpdate } from "protocols"
import httpStatus from "http-status";
import movieSchema from "../schemas/movie-schema";
import { notFoundError } from "errors/movie-erros";


export async function createMovie(req: Request, res : Response) {

    const movie = req.body as Movie;
    const validation = movieSchema.validate(movie);
    if (validation.error) {
		return res.status(422).send("Preencha todos os campos! Ou campos preenchidos errados!")
	  }

    await movieServices.createMovie(movie)
    res.sendStatus(httpStatus.CREATED)
}

export async function getMovies(req: Request, res : Response) {

    const plataforma = req.query.plataforma as string

    const result = await movieServices.getMovies(plataforma)
    res.status(httpStatus.OK).send(result)
}

export async function updateMovies(req: Request, res : Response, next : NextFunction) {
    const {id} = req.params 
    const movieUpdate = req.body as MovieUpdate

    try{
        await movieServices.updateMovies(parseInt(id),movieUpdate)
        res.sendStatus(httpStatus.OK)
    } catch (error){
        next(error)
    }
   
}

export async function deleteMovies(req: Request, res : Response, next : NextFunction) {
    const {id} = req.params 

    try{
        await movieServices.deleteMovies(parseInt(id))
        res.sendStatus(httpStatus.OK)
    } catch (error){
        next(error)
    }
}