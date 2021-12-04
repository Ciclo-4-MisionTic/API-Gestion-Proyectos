import { InscriptionModel } from "./inscripcion.js";

const resolversInscripciones = {

    Query:{
        Inscripciones: async (parent, args)=>{
            const Inscripciones = await InscriptionModel.find().populate('proyecto').populate('estudiante');
            return Inscripciones;
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
        }
    }
};

export { resolversInscripciones };