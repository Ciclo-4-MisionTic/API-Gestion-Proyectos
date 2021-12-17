import { ProjectModel } from "../proyecto/proyecto.js";
import { UserModel } from "../usuario/usuario.js";
import { InscriptionModel } from "./inscripcion.js";

const resolversInscripciones = {
    Inscripciones:{
        proyecto: async (parent,args, context) => {
            return await ProjectModel.findOne({_id: parent.proyecto});
        },
        estudiante: async (parent, args, context) => {
            return await UserModel.findOne({_id: parent.estudiante});
        },
    },

    Query:{
        Inscripciones: async (parent, args, context)=>{
            //console.log("context", context);
                //if (context.userData.rol ===''){
                 const Inscripciones = await InscriptionModel.find().populate('proyecto').populate('estudiante');
                 return Inscripciones;
                //}else {
                   // return null;        
        },
    },

    Mutation:{
        crearInscripcion: async (parent,args)=>{
            const inscripcionCreada = await InscriptionModel.create({
                estado: args.estado,
                proyecto: args.proyecto,
                estudiante: args.estudiante,
            });
            return inscripcionCreada;
        },
        

        aprobarInscripcion: async (parent,args)=>{
            const inscripcionAprobada = await InscriptionModel.findByIdAndUpdate(args.id,{
                estado: "ACEPTADO",
                fechaIngreso: Date.now(),
            },
            {new: true}
            );
            return inscripcionAprobada;
        },
        editarInscripcion: async(parent,args) => {
            const inscripcionEditada = await InscriptionModel.findByIdAndUpdate(args._id,{
                estado: args.estado,
                fechaEgreso:args.Date,
                estudiante: args.estudiante,
            },
            {new:true}
            );
            return inscripcionEditada;
            },

        eliminarInscripcion: async(parent, args) =>{
                if(Object.keys(args).includes("_id")){
                    const inscripcionEliminada = await InscriptionModel.findOneAndDelete({_id: args._id});
                    return inscripcionEliminada;
                } else if(Object.keys(args).includes("proyecto")){
                    const inscripcionEliminada = await InscriptionModel.findOneAndDelete({ proyecto: args.proyecto});
                    return inscripcionEliminada;
                }

            },

},

}

export { resolversInscripciones }