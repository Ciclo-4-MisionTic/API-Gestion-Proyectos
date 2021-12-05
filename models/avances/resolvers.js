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
            })


            return 
            
            avanceCreado;
        },
        editaravance: async (parent,args)=>{
            const avanceEditado = await avanceModel.findByIdAndUpdate(args._id,{...args.campos},{new:true})
            return avanceEditado;
        },

        eliminaravance: async(parent, args) =>{
            if(Object.keys(args).includes("_id")){
                const avanceEliminado = await avanceModel.findOneAndDelete({_id: args._id});
                return avanceEliminado;   
            } else if(Object.keys(args).includes("nombre")){
                const avanceEliminado = await avanceModel.findOneAndDelete({ nombre: args.nombre});
                return avanceEliminado;   
            }
        },

        crearobservaciones: async (parent,args)=>{
            const proyectoConobservaciones= await Model.findByIdAndUpdate(args.idProyecto,{
                $addToSet:{
                    observaciones:{... args.campos},
                },
            }, {new:true});

            return proyectoConObjetivos
        },

        editarobservaciones: async (parent, args) =>{
            const proyectoobservacionesEditado = await ProjectModel.findByIdAndUpdate(args.idProyecto,
                {
                $set:{
                    [`objetivos.${args.indexobservaciones}.descripcion`]: args.campos.descripcion,
                    [`objetivos.${args.indexobservaciones}.tipo`]: args.campos.tipo
                }
            },{new:true});
            return proyectoobservacionesEditado;
        },

        eliminarObjetivo: async (parent, args) => {
            const proyectoobservacionesEliminado = await ProjectModel.findByIdAndUpdate(
              { _id: args.idProyecto },
              {
                $pull: {
                  observaciones: {
                    _id: args.idobservaciones,
                  },
                },
              },
              { new: true }
            );
            return proyectoobservacionesEliminado;
            }
    },
};

export { resolversAvance };