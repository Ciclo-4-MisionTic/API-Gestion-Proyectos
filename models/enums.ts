enum Enum_Rol{
    ESTUDIANTE = 'ESTUDIANTE',
    LIDER = 'LIDER',
    ADMINISTRADOR = 'ADMINISTRADOR'
}


enum Enum_EstadoUsuario{
    PENDIENTE = 'PENDIENTE',
    AUTORIZADO = 'AUTORIZADO',
    NO_AUTORIZADO = 'NO AUTORIZADO',
}
enum Enum_EstadoProyecto{
    activo = "Activo",
    inactivo = "Inactivo",

}

enum Enum_FaseProyecto{
    iniciado = "Iniciado",
    desarrollo = "En Desarrollo",
    terminado = "Terminado",
    nula ="",
}

enum Enum_TipoObjetivo{
    general= "General",
    especifico= "Específico",

}

enum Enum_EstadoIncripcion{
    aceptada = "Aceptada",
    rechazada = "Rechazada",
}

export {Enum_Rol, Enum_EstadoUsuario, Enum_EstadoProyecto, Enum_FaseProyecto, Enum_TipoObjetivo, Enum_EstadoIncripcion};
