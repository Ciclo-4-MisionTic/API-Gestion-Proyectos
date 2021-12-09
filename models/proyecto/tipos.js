import {gql} from 'apollo-server-express';

const tiposProyecto = gql`
    type Objetivo{
        _id: ID
        descripcion:String!,
        tipo:Enum_TipoObjetivo
    }
    input crearObjetivo{
        _id: ID
        descripcion:String!,
        tipo:Enum_TipoObjetivo
    }
    input camposObjetivo{
        descripcion:String!,
        tipo: Enum_TipoObjetivo
    }
    input camposProyecto {
        nombre: String
        presupuesto: Float
        fechaInicio: Date
        fechaFin: Date
        estado:  Enum_EstadoProyecto
        fase: Enum_FaseProyecto
        lider: String
    }
    type Proyecto{
        _id:ID!
        nombre: String!
        presupuesto: Float!
        fechaInicio: Date!
        fechaFin: Date!
        estado:  Enum_EstadoProyecto!
        fase: Enum_FaseProyecto!
        lider: Usuario!
        objetivos:[Objetivo]
        avances: [Avance]
        inscripciones: [Inscripcion]
    }
    type Query{
        Proyectos: [Proyecto]
        Proyecto(_id:String!): Proyecto
        filtrarProyecto(lider: String!): [Proyecto]
    }
    type Mutation {
        crearProyecto(
            nombre: String!
            presupuesto: Float!
            fechaInicio: Date!
            fechaFin: Date!
            estado:  Enum_EstadoProyecto!
            fase: Enum_FaseProyecto!
            lider: String!
            objetivos: [crearObjetivo]
        ): Proyecto
        editarProyecto(_id: String!,campos: camposProyecto!): Proyecto
        eliminarProyecto(_id:String nombre: String): Proyecto
        crearObjetivo(idProyecto:String!, campos: camposObjetivo): Proyecto
        editarObjetivo(idProyecto:String!, indexObjetivo:Int!, campos:camposObjetivo): Proyecto
        
        eliminarObjetivo(idProyecto: String!, idObjetivo: String!): Proyecto
        }
    `;
export {tiposProyecto};