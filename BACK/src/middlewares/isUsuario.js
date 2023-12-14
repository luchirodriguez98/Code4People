import { HttpError } from "../models/HttpError";

function isUsuario (req, res, next) {
    if (req.user.role !== 'admin' || req.user.role !== 'usuario') {
        return next (new HttpError(403, 'Rol no autorizado, no eres admin o usuario'))
    }
    next();
}

export default isUsuario;