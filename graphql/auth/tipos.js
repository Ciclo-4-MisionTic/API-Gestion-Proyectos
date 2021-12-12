import { gql } from "apollo-server-express"

const tiposAutenticacion =gql`
  type Mutation{
   Registro(
     nombre: String!
     apellido: String!
     identificacion: String!
     correo: String!
     estado: Enum_EstadoUsuario
     rol: Enum_Rol!
     password: String!
    ): String!
   }
`;

export { tiposAutenticacion };