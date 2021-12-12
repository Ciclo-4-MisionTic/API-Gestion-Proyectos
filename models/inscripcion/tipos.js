import {gql} from 'apollo-server-express';

const tiposInscripcion = gql`
    type Inscripcion {
        _id: ID!
        estado: Enum_EstadoInscripcion!
        fechaIngreso: Date!
        fechaEgreso: Date
        proyecto: Proyecto!
        estudiante: Usuario!
    }

    type Query {
        Inscripciones: [Inscripcion]
    }

    type Mutation {
        crearInscripcion(
        estado: Enum_EstadoInscripcion!
        proyecto: String!
        estudiante: String!
        ): Inscripcion

        aprobarInscripcion(id: String): Inscripcion

        editarInscripcion(
        estado: Enum_EstadoInscripcion!
        ):Inscripcion
        eliminarInscripcion(_id:String proyecto:String): Inscripcion

    }
`;

export {tiposInscripcion}