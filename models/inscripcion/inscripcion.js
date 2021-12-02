import mongoose from 'mongoose';
import { ProjectModel } from "../proyecto/proyecto.js";
import { UserModel } from "../usuario/usuario.js";

const {Schema,model} = mongoose;

const inscriptionSchema = new Schema({
    estado: {
        type: String,
        enum: ["ACEPTADO", "RECHAZADO", "PEDIENTE"],
        default: "PENDIENTE",
        required: true,
    },
    fechaIngreso: {
        type: Date,
        required: true,
    },
    fechaEgreso:{
        type: Date,
        required: true,
    },
    proyecto:{
        type: Schema.Types.ObjectId,
        ref: ProjectModel,
        required: true,
    },
    estudiante:{
        type:Schema.Types.ObjectId,
        ref: UserModel,
        required: true,
    }
})

const InscriptionModel = model("Incripcion",  inscriptionSchema);
export {InscriptionModel};