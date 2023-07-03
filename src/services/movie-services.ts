import { Movie, MovieUpdate } from "protocols";
import * as movieRepository from "../repositories/movie-repository"
import { notFoundError, validateSchema } from "../errors/movie-erros";
import movieSchema from "../schemas/movie-schema";

export async function createMovie(movie : Movie){
    return movieRepository.createMovie(movie)
}

export async function getMovies(plataforma ?: string){
    return movieRepository.getMovie(plataforma)
}

export async function updateMovies(id :number ,movieUpdate : MovieUpdate){

    const existingMovie = await movieRepository.getMoviebyId(id)

    if(existingMovie.length === 0) {
        throw notFoundError()
    }

    return movieRepository.updateMovies(id, movieUpdate)

}

export async function deleteMovies(id :number){

    const existingMovie = await movieRepository.getMoviebyId(id)

    if(existingMovie.length === 0) {
        throw notFoundError()
    }

    return movieRepository.deleteMovies(id)

}


