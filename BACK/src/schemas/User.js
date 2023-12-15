import { z } from 'zod';


const User = z.object({
    nombre: z.string({
        required_error: 'Campo obligatorio',
        invalid_type_error: 'El campo tiene que ser un string'
    }).min(3, { message: 'Mínimo 3 caracteres' }).max(50, {message: 'Máximo 50 caracteres.'}),
    email: z.string({
        required_error: 'Campo obligatorio',
        invalid_type_error: 'El campo tiene que ser un string'
    }).email({ message: 'No has enviado un email válido'}),
    pass: z.string({
        required_error: 'Campo obligatorio',
        invalid_type_error: 'El campo tiene que ser un string'
    }).min(4, {message: 'La contraseña debe tener minimo 4 caracteres',}).max(32,{message: 'La contraseña debe tener maximo 32 caracteres',}),
    role: z.enum(['admin', 'usuario', 'empresa'])
});
const LoginUser = User.omit({ nombre: true, role: true });

export { User, LoginUser };