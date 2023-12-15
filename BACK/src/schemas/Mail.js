import { z } from 'zod';


const Mail = z.object({
    mensaje: z.string({
        required_error: 'Campo obligatorio',
        invalid_type_error: 'El campo tiene que ser un string'
    }).min(3, { message: 'Mínimo 3 caracteres' }).max(600, {message: 'Máximo 600 caracteres.'})
});


export { Mail };