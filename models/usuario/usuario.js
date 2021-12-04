import mongoose from 'mongoose';

const {Schema,model} = mongoose;

const userSchema = new Schema({
    correo:{
        type:String,
        required: true,
        unique: true,
        validate:{
            validator: function (v) {
                return /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(v);
            },
            message: 'Por favor introduzca una dirección de correo electrónico válida',
            },
    },
    identificacion:{
        type: String,
        required: true,
        unique: true,
    },
    nombre: {
        type:String,
        required:true,
    },
    apellido:{
        type:String,
        required: true,
    },
    rol:{
        type:String,
        required:true,
        enum:["ESTUDIANTE","LIDER","ADMINISTRADOR"],
    },
    estado:{
        type:String,
<<<<<<< HEAD:models/user.ts
        enum: Enum_EstadoUsuario,
        default: Enum_EstadoUsuario.PENDIENTE,
=======
        enum: ["PENDIENTE","AUTORIZADO","NO_AUTORIZADO"],
        default: "PENDIENTE",
>>>>>>> e1547662aae5e9cf958fe6a4c25f660724db1459:models/usuario/usuario.js
    }
});
const UserModel = model("User", userSchema);
export { UserModel }