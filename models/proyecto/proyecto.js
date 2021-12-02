import mongoose from 'mongoose';
import { UserModel } from "../usuario/usuario.js";

const {Schema,model} = mongoose;

const projectSchema = new Schema({
    nombre:{
        type:String,
        required:true, 
        unique: true,
    },
    presupuesto: {
        type: Number, 
        required: true,
    },
    fechaInicio: {
        type:Date,
        required: true, 
    },
    fechaFin:{
        type:Date,
        requerid: true, 
    },
    estado:{
        type:String,
        enum:["ACTIVO","INACTIVO"],
        default: "INACTIVO",
    },
    fase: {
        type: String, 
        enum:["INICIADO", "DESARROLLO", "TERMINADO", "NULO"],
        default: "NULO"
    },
    lider: { 
        //REFERENCIA FUERTE
        type:Schema.Types.ObjectId, 
        required: true,
        ref: UserModel,
    },
    objetivos: [{
        descripcion:{
            type:String,
            required: true, 
        },
        tipo: {
            type: String, 
            enum: ["GENERAL", "ESPECIFICO"],
            required: true,
        },
    }]

})

const ProjectModel = model("Proyecto", projectSchema,)
export {ProjectModel}; 