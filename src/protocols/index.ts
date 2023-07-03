export type Movie = {
    id:number
    title:string;
    platform:string;
    genre:string;
    status:string;
    summary?:string;
}

export type MovieUpdate = {
    status:string;
    summary?:string;
}

export type MovieInput = Omit <Movie, "id">

export type Total = {
    total : number
}

export type Error = {
    type:string;
    message:string;
}