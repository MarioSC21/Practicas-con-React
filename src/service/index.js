//Archivo donde vamos almacenar las peticiones

const BASE_URL = "https://pokeapi.co/api/v2/pokemon?limit=100";

//creacion de una funcion generica que se encargue de hacer una peticion

export const getDataPokemon = async(url = BASE_URL)=>{
    try {
        const response = await fetch(url);
        const data = await response.json();
        return data
    } catch (error) {
        console.log(error.message);
    }
}

