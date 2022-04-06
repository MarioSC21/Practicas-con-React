import {useState} from "react";
import { Container, Grid, TextField, Button } from "@mui/material";
import { storeProductClothe } from "../../service/firestore";
import swal from "sweetalert";

const ProductAdmin = () => {
    const [values, setValues] = useState({
        name: "",
        photo: "",
        price: "",
        price_sale: "",
    });

    const handleinputChange = (e)=>{
        const {value, name} = e.target;
        
        setValues({
            ...values,
            [name]: value,
        });
    };

    const handleClickStore = async() => {
        await storeProductClothe(values);

        swal({
            icon: "success",
            title: "Success",
            text: "Se creo correctamente",
          });
    };


    return(
        <Container>
            <Grid container spacing={3} mt={3}>
                <Grid item md={12}>
                    <h1>Crear Productos</h1>
                </Grid>
                <Grid item md={6}>
                    <TextField label="Nombre del producto" name="name" onChange={handleinputChange} fullWidth/>
                </Grid>
                <Grid item md={6}>
                    <TextField  label="Link del producto" name="photo" onChange={handleinputChange} fullWidth/>
                </Grid>
                <Grid item md={6}>
                    <TextField type="number" id="number" label="Precio del producto" name="price" onChange={handleinputChange} fullWidth/>
                </Grid>
                <Grid item md={6}>
                    <TextField label="Precio oferta del producto" name="price_sale" onChange={handleinputChange} fullWidth/>
                </Grid>
                <Grid item md={12}>
                    <Button variant="contained" onClick={handleClickStore}>Crear</Button>
                </Grid>
            </Grid>
        </Container>
    );
};
export default ProductAdmin