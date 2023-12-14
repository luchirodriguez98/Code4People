import { z } from 'zod';


const Proyecto = z.object({
    titulo: z.string({
        required_error: 'Campo obligatorio',
        invalid_type_error: 'El campo tiene que ser un string'
    }).min(3, { message: 'Mínimo 3 caracteres' }).max(255, {message: 'Máximo 255 caracteres.'}),
    descripcion: z.string({
        required_error: 'Campo obligatorio',
        invalid_type_error: 'El campo tiene que ser un string'
    }).min(3, { message: 'Mínimo 3 caracteres' }).max(600, {message: 'Máximo 600 caracteres.'})
});


export { Proyecto };