import { Movie, MovieUpdate } from "protocols";
import { connection } from "../database/database";

export async function createMovie(movie : Movie){

    const query = `INSERT INTO movies ("title", "platform","genre", "status")
                    VALUES ($1,$2,$3,$4)`
    const values = [movie.title, movie.platform, movie.genre, movie.status]
    const result = await connection.query(query, values)
}

export async function getMovie() {

    const query = `SELECT * FROM movies`
    const result = await connection.query<Movie>(query)

    return result.rows
    
}

export async function getMoviebyId(id : number){
    const query = `SELECT * FROM movies WHERE id=$1`
    const result = await connection.query<Movie>(query, [id])

    return result.rows
}

export async function updateMovies(id :number ,movieUpdate : MovieUpdate){

    const query = `UPDATE movies SET "status" = $1, "summary" = $2 WHERE id = $3`
    const values = [movieUpdate.status, movieUpdate.summary, id]

    const result = await connection.query(query, values)

    return result
}

export async function deleteMovies(id :number){

    const query = `DELETE FROM movies WHERE id=$1`
    const result = await connection.query(query,[id])

}