import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import {Grid, Container, Card, CardMedia, Button, CardActionArea} from "@mui/material";

const VerBandera = ()=> {
  const { names } = useParams();

    const [value, setValue] = useState({
      name: "",
      flags: "",
      capital: "",
      languages: "",
      population: "",
      region: "",

    });
    // const [languag, setlanguag] = useState([])
    const history = useNavigate();

    const fetchFlags = async()=>{
        const response = await fetch(`https://restcountries.com/v3.1/name/${names}`);
        const data = await response.json();
        console.log(data)
        setValue({
          name : data[0].name.common,
          flags : data[0].flags.png,
          capital: data[0].capital[0],
          languages: Object.values(data[0].languages),
          population: data[0].population,
          region: data[0].region,
        })
    }
    

    useEffect(() => {
         fetchFlags();
      }, []);
      console.log(value)
      
    return(
      <Container sx={{background: "#27272949", borderRadius:"15px"}}>
                  <Button variant="contained" onClick={()=> history(-1)} sx={{margin:"10px"}} color="success">
                    regresar
                  </Button>
          <Grid container spacing={2} alignItems="center" sx={{height: "60vh"}} textAlign="center">
            <Grid item md={7} >
                <img
                  height="300"
                  width={550}
                  src= {value.flags}
                  alt=""
                />
            </Grid>
            <Grid item md={5} >
              <Grid item md={12} sx={{textAlign: "start"}} ml={3}>
               <h1 >{value.name}</h1>
              </Grid>
              <Grid item md={6} sx={{textAlign: "start"}} ml={3}>
               <p><strong>Capital : </strong>{value.capital}</p>
               <p><strong>Languages : </strong>{value.languages.length > 0 && value.languages.map(val=> (
                 <span>{val}, </span>
               ))}</p>
               <p><strong>Population : </strong>{value.population}</p>
               <p><strong>Continent: </strong>{value.region}</p>
              </Grid>
            </Grid>
          </Grid>
      </Container>
    )
};
export default VerBandera;