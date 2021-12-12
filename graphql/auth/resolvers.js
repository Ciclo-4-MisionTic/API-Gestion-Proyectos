const resolversAutenticacion = {
    Mutation: {
        registro: async (parent,args) => {
            console.log('crear usuario');
            return 'Usuario creado';
        },
    },
};

export { resolversAutenticacion }