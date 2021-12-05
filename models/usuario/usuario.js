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
        enum: ["PENDIENTE","AUTORIZADO","NO_AUTORIZADO"],
        default: "PENDIENTE",
    }
});
const UserModel = model("User", userSchema);
export { UserModel }

