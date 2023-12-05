import { z } from 'zod';


const User = z.object({
    username: z.string({
        required_error: 'Campo obligatorio',
        invalid_type_error: 'El campo tiene que ser un string'
    }).min(3, { message: 'Mínimo 3 caracteres' }).max(50, {message: 'Máximo 50 caracteres.'}),
    email: z.string({
        required_error: 'Campo obligatorio',
        invalid_type_error: 'El campo tiene que ser un string'
    }).email({ message: 'No has enviado un email válido'}),
    password: z.string({
        required_error: 'Campo obligatorio',
        invalid_type_error: 'El campo tiene que ser un string'
    }).min(4).max(32)
});

export { User };