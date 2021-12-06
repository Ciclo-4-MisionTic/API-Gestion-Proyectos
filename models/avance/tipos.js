import {gql} from 'apollo-server-express';

const tiposAvance = gql`

    type Observacion{
        _id: ID
        descripcion:String!
    }

    input crearObservacion{
        _id: ID
        descripcion:String!
    }
    input camposObservacion{
        descripcion:String!,
    }

    input camposAvance {
        _id: ID
        fecha: Date
        descripcion: String

    } 

    type Avance{
        _id: ID!
        fecha: Date!
        descripcion: String!
        proyecto: Proyecto!
        creadoPor: Usuario!
        observaciones: [Observacion]
    }


    type Query{
        Avances: [Avance]
        filtrarAvance(idAvance: String!): [Avance]
    }

    type Mutation{
        crearAvance(
            fecha: Date!
            descripcion: String!
            proyecto: String!
            creadoPor: String!
            observaciones: [crearObservacion]
        ):Avance

        editarAvance(
            _id: String!
            descripcion: String,
        ): Avance

        eliminarAvance(_id:String descripcion: String): Avance
        
        crearObservacion(idAvance:String!, campos: camposObservacion): Avance

        
    }
`;

export {tiposAvance}