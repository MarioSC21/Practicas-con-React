import { useEffect, useState } from "react";
import {Container, Card, CardContent, CardMedia, Grid}  from "@mui/material";
// como ejectutar la funcion exportada
import { getDataPokemon } from "../../service";
import PokemonDetail from "../../components/PokemonDetail";

const Home = ()=>{

    const imgUrl = "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/";

    const [pokemons, setPokemon] = useState([]);
    
    const fetchPokemonList = async() =>{

        const listPokemones =  await getDataPokemon();
        setPokemon(listPokemones.results);
    }
    useEffect(()=> {
        fetchPokemonList();
        //! En los useEffect se debe colocar un array vacio para evitar un bucle infinito
    },[]);
    
    return(
        <Container>
        <h1>Pokedex</h1>
        <Grid container spacing={3}>
          {pokemons.length > 0 &&
            pokemons.map((pokemon, index) => (
              // aca el codigo visual
              <Grid item md={4} lg={4} sm={4} xs={6}>
                <Card className="card-pokemon">
                  <CardMedia
                    component="img"
                    className="img-pokemon"
                    image={`${imgUrl}${index + 1}.svg`}
                  />
                  <CardContent className="center">
                    <h3 className="name-pokemon">{pokemon.name}</h3>
                    {/* Pasaremos el nombre como atributo */}
                    <PokemonDetail nombre={pokemon.name} url={pokemon.url}/>
                  </CardContent>
                </Card>
              </Grid>
            ))}
        </Grid>
      </Container>
    )
};

export default Home
