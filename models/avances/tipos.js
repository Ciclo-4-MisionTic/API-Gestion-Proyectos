import {gql} from 'apollo-server-express'; 

const tiposAvance = gql`
    type Avance{
        _id: ID!
        fecha: Date!
        descripcion: String!
        observaciones: [String]
        proyecto: Proyecto!
        creadoPor: Usuario!
    }
    type Query{
        Avances: [Avance]
        filtrarAvance(idProyecto: String!): [Avance]
    }
    type Mutation{
        crearAvance(
            fecha: Date!
            descripcion: String!
            proyecto: String!
            creadoPor: String!
        ):Avance
    }
    type Mutation {
        crearobservacion(
            nombre: String!
            presupuesto: Float!
            fechaInicio: Date!
            fechaFin: Date!
            estado:  Enum_EstadoProyecto!
            fase: Enum_FaseProyecto!
            lider: String!
            observacion: [crearobservacion]
        ): Proyecto
        
        editarProyecto(_id: String!,campos: camposProyecto!): Proyecto
        eliminarProyecto(_id:String nombre: String): Proyecto
        crearobservacion(idProyecto:String!, campos: camposObjetivo): Proyecto
        
        editarobservacion(idProyecto:String!, indexobservacion:Int!, campos:camposObjetivo): Proyecto
        
        eliminarobservacion(idProyecto: String!, idobservacion: String!): Proyecto
        }
`;

export {tiposAvance}
    