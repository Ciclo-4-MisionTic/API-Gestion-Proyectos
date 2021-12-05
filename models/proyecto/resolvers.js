import { ProjectModel } from "./proyecto.js";

const resolversProyecto ={

    Query: {
        Proyectos: async(parent,args) =>{
            const proyectos = await ProjectModel.find().populate("lider").populate('avances').populate('inscripciones');
            return proyectos;
        },
        filtrarProyecto: async(parent,args)=>{
            const ProyectoFiltrado = await ProjectModel.find({lider: args.lider})
                .populate("lider")
            return ProyectoFiltrado;
        },
        Proyecto: async(parent,args) =>{
            const proyecto= await ProjectModel.findOne({_id:args._id});
            return proyecto; 
        }
    },
    Mutation:{

        crearProyecto: async(parent,args)=>{
            const proyectoCreado = await ProjectModel.create({
                nombre: args.nombre,
                estado: args.estado,
                fase: args.fase,
                fechaInicio: args.fechaInicio,
                fechaFin: args.fechaFin,
                presupuesto: args.presupuesto,
                lider: args.lider,
                objetivos: args.objetivos,
            });
            return proyectoCreado;
        },

        editarProyecto: async (parent,args)=>{
            const proyectoEditado = await ProjectModel.findByIdAndUpdate(args._id,{...args.campos},{new:true})
            return proyectoEditado;
        },

        eliminarProyecto: async(parent, args) =>{
            if(Object.keys(args).includes("_id")){
                const proyectoEliminado = await ProjectModel.findOneAndDelete({_id: args._id});
                return proyectoEliminado;   
            } else if(Object.keys(args).includes("nombre")){
                const proyectoEliminado = await ProjectModel.findOneAndDelete({ nombre: args.nombre});
                return proyectoEliminado;   
            }
        },

        crearObjetivo: async (parent,args)=>{
            const proyectoConObjetivos = await ProjectModel.findByIdAndUpdate(args.idProyecto,{
                $addToSet:{
                    objetivos:{... args.campos},
                },
            }, {new:true});

            return proyectoConObjetivos
        },

        editarObjetivo: async (parent, args) =>{
            const proyectoObjetivoEditado = await ProjectModel.findByIdAndUpdate(args.idProyecto,
                {
                $set:{
                    [`objetivos.${args.indexObjetivo}.descripcion`]: args.campos.descripcion,
                    [`objetivos.${args.indexObjetivo}.tipo`]: args.campos.tipo
                }
            },{new:true});
            return proyectoObjetivoEditado;
        },

        eliminarObjetivo: async (parent, args) => {
            const proyectoObjetivoEliminado = await ProjectModel.findByIdAndUpdate(
              { _id: args.idProyecto },
              {
                $pull: {
                  objetivos: {
                    _id: args.idObjetivo,
                  },
                },
              },
              { new: true }
            );
            return proyectoObjetivoEliminado;
            }


    }
}

export {resolversProyecto}