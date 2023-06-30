export function notFoundError() {
    return {
      type: "NotFoundError",
      //message: `${element ? element : "It"} was not found`
      message: "It was not found"
    }
  }
  
  export function conflictError() {
    return {
      type: "ConflictError",
      message: `It already exists!`
    }
  }

  export function validateSchema(){    
    return {
      type: "UnprocessableEntity",
      message: "Preencha todos os campos!"
    }
  }