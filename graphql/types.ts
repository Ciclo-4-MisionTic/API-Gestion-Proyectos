import {gql} from 'apollo-server-express';

const typeDefs = gql`
    type Usuarios {
        nombre: String!
    }

    type Query{
        Usuarios: [Usuarios]
    }

    `;
export {typeDefs};