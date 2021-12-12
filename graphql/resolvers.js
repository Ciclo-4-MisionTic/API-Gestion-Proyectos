import { resolversProyecto } from "../models/proyecto/resolvers.js";
import { resolversUsuario } from "../models/usuario/resolvers.js";
import { resolversAvance } from "../models/avance/resolvers.js";
import { resolversInscripciones } from "../models/inscripcion/resolvers.js";
import { resolversAutenticacion } from "./auth/resolvers.js";

export const resolvers = [resolversUsuario, resolversProyecto, resolversAvance, resolversInscripciones]