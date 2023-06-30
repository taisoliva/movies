import express, { Request, Response, json } from "express"
import httpStatus from "http-status"
import { movieRouter } from "./routers/movie-router"
import errorHandle from "../src/middleware/movie-middleware"

const app = express()

app.use(json())
app.get("/health", (req: Request, res: Response) => {
    res.sendStatus(httpStatus.OK)
})

app.use(movieRouter)
app.use(errorHandle)

const port : number = parseInt(process.env.PORT) || 5000

app.listen(port, () => {
    console.log(`Server is runnig on port ${port}`)
})