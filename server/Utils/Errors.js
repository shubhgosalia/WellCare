//this is the list of all the errors

class ClientError extends Error{
    constructor(msg){
        super(msg);
        this.msg = msg;
        this.statusCode = 400;
        this.name = "ClientError";
        Error.captureStackTrace(this, this.constructor);
    }
}

class NotFoundError extends Error{
    constructor(msg){
        super(msg);
        this.msg = msg;
        this.statusCode = 404;
        this.name = "NotFoundError";
        Error.captureStackTrace(this, this.constructor);
    }
}

class AuthenticationError extends Error{
    constructor(msg){
        super(msg);
        this.msg = msg;
        this.statusCode = 401;
        this.name = "AuthenticationError";
        Error.captureStackTrace(this, this.constructor);
    }
}

class AuthorizationError extends Error{
    constructor(msg){
        super(msg);
        this.msg = msg;
        this.statusCode = 403;
        this.name = "AuthorizationError";
        Error.captureStackTrace(this, this.constructor);
    }
}

class ServerError extends Error{
    constructor(msg){
        super(msg);
        this.msg = msg;
        this.statusCode = 500;
        this.name = "ServerError";
        Error.captureStackTrace(this, this.constructor);
    }
}

module.exports = {
    AuthenticationError,
    AuthorizationError,
    ClientError,
    NotFoundError,
    ServerError
}