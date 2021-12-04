import { argsToArgsConfig } from "graphql/type/definition";
import { ProjectModel } from "./proyecto";


const resolversProyecto ={
    Query: {
        Proyectos: async (parent, args, context) => {
          const proyectos = await ProjectModel.find();
          return proyectos;
        },
      },
      Mutation:{
        crearProyecto: async(parent,args,context) => {
            const proyectoCreado = await ProjectModel.create({
                nombre: args.nombre,
                estado: args.estado,
                fase: args.fase,
                fechaInicio: args.fechaInicio,
                fechaFin: args.fechaFin,
                presupuesto: args.presupuesto,
                lider: args.lider,
                objetivos: args.objetivos
            });
            return proyectoCreado;
        },

      },
    
};

export {resolversProyecto}