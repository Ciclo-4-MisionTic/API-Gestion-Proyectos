import { ModeloAvance } from "./avance.js"


const resolversAvance = {
    Query:{
        Avances: async(parent, args) =>{
            const avances = await ModeloAvance.find().populate("proyecto").populate("creadoPor");
            return avances;
        },
        filtrarAvance: async(parent,args)=>{
            const avanceFiltrado = await ModeloAvance.find({proyecto: args.idProyecto})
                .populate("proyecto")
                .populate("creadoPor")
            return avanceFiltrado;
        }
    },
    Mutation: {
        crearAvance: async(parent, args) =>{
            const avanceCreado = ModeloAvance.create({
                fecha: args.fecha,
                descripcion: args.descripcion,
                proyecto: args.proyecto,
                creadoPor: args.creadoPor,
                observaciones: args.observaciones,
            })

            return avanceCreado;
        },

        crearObservacion: async (parent,args)=>{
            const avanceConObservaciones = await ModeloAvance.findByIdAndUpdate(args.idAvance,{
                $addToSet:{
                    observaciones:{... args.campos},
                },
            }, {new:true});

            return avanceConObservaciones;
        },


    },
};

export { resolversAvance };