import conectarBD from "./db/db";
import {UserModel} from "./models/user";
import { Enum_EstadoUsuario, Enum_Rol, Enum_TipoObjetivo } from "./models/enums";
import { ProjectModel } from "./models/project";


const main = async () => {
    await conectarBD();

    //METODOLOGÍA ONE TO MANY #3
    const crearProyectoConObjetivos3 = async () =>{
        const usuarioInicial = await UserModel.create({
            correo: "pepe@let.com", /* Si quitamos el ""." o "@" se genera un error de validación*/ 
            identificacion: "1037856",
            nombre: "Pepe",
            apellido: "Gaviria",
            rol: Enum_Rol.administrador,
            estado: Enum_EstadoUsuario.autorizado
        })
        const proyectoCreado = await ProjectModel.create({
            nombre: "Proyecto Mision Tic",
            presupuesto:125000,
            fechaInicio: Date.now(),
            fechaFin: new Date ("2022/11/10"),
            lider: "618d7673464ac96a96cdddc2",
            objetivos: [ 
                {descripcion: "Este es el objetivo general", tipo: Enum_TipoObjetivo.general},
                {descripcion: "Este es el objetivo especifico1", tipo: Enum_TipoObjetivo.especifico},
                {descripcion: "Este es el objetivo especifico2", tipo: Enum_TipoObjetivo.especifico},              
            ]
        })

    }
    const proyectoCreado = await ProjectModel.find({id: "619347bbc5b9c645ab035944"})
    console.log ("proyecto ", proyectoCreado)

}
main();