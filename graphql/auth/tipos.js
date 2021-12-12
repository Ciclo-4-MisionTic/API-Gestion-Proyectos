import { gql } from "apollo-server-express"

const tiposAutenticacion =gql`

  type Token{
     token:String
     error:String
  }

  type Mutation{
   Registro(
     nombre: String!
     apellido: String!
     identificacion: String!
     correo: String!
     estado: Enum_EstadoUsuario
     rol: Enum_Rol!
     password: String!
    ): Token!
    login(correo: String!,password: String!): Token
   }


`;

export { tiposAutenticacion };