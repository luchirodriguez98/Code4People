import { HttpError } from "../models/HttpError.js";

function isAdmin (req, res, next) {
    if (req.user.role !== 'admin') {
        return next (new HttpError(403, 'Rol no autorizado, no eres admin'))
    }
    next();
}

export  {isAdmin};