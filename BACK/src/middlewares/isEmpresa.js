import { HttpError } from "../models/HttpError.js";

function isEmpresa (req, res, next) {
    if (req.user.role !== 'admin' || req.user.role !== 'empresa') {
        return next (new HttpError(403, 'Rol no autorizado, no eres admin o empresa'))
    }
    next();
}

export {isEmpresa};