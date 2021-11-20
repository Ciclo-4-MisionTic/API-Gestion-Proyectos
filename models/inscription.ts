import { Schema, model, Mongoose } from "mongoose";
import { Enum_EstadoIncripcion } from "./enums";
import { ProjectModel } from "./project";
import { UserModel } from "./user";

interface Inscription{
    estado: Enum_EstadoIncripcion;
    fechaIngreso: Date;
    fechaEgreso: Date;
    proyecto: Schema.Types.ObjectId;
    rol: Schema.Types.ObjectId;
}

const inscriptionSchema = new Schema <Inscription>({
    estado: {
        type: String,
        enum: Enum_EstadoIncripcion,
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
    rol:{
        type:Schema.Types.ObjectId,
        ref: UserModel,
        required: true,
    }
})

const InscriptionModel = model("Incripcion",  inscriptionSchema);
export {InscriptionModel};