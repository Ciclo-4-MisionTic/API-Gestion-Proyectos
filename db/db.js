import { connect } from "mongoose";

const conectarBD = async () =>{
return await connect('mongodb+srv://admin:AdminCodex@gestorcodexproject.7gfui.mongodb.net/GestionProyectos?retryWrites=true&w=majority'
).then(() =>{
    console.log('Conexión exitosa');
}).catch((e)=>{
    console.error("Error conectando a la bd", e);
})
};
export default conectarBD;