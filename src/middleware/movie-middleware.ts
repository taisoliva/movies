import { NextFunction, Request, Response } from "express"
import httpStatus from "http-status"
import { Error } from "protocols"

export default function errorHandle(error : Error , req: Request, res : Response, next : NextFunction){

    if(error.type === "ConflictError"){
        return res.status(httpStatus.CONFLICT).send(error.message)
    }

    if(error.type === "NotFoundError"){
        return res.status(httpStatus.NOT_FOUND).send(error.message)

    }

    if(error.type === "UnprocessableEntity"){
        return res.status(httpStatus.UNPROCESSABLE_ENTITY).send(error.message)

    }

    return res.status(httpStatus.INTERNAL_SERVER_ERROR).send("Sorry :(")
}