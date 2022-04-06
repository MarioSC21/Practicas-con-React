import { useState, useEffect, useContext } from "react";
import { Container, Grid, Button } from "@mui/material";
import "./index.css";
import { getProductClothes } from "../../service/firestore";
import { UserContext } from "../../Context/UserContext";
import DeleteForeverRoundedIcon from "@mui/icons-material/DeleteForeverRounded";

const PopularWeek = () => {

  const {basket, storeBasket, deleteElementFromBasket } = useContext(UserContext);

  const [clothes, setClothes] = useState([]);

  const fetchClothes = async()=>{
    const data = await getProductClothes("product_clothes");
    setClothes(data);
  };
  
  //vamos a crear un componenete que recibe el id y verifiquye de que existe

  const ButtonForProduct = ({ clothe }) => {
    const findProduct = basket.find((bas) => bas.id === clothe.id);
    // console.log(findProduct)
    return (
      <>
        {findProduct ? (
          <Button color="error" onClick={() => deleteElementFromBasket(clothe.id)}>
            <DeleteForeverRoundedIcon />
          </Button>
        ) : (
          <Button onClick={() => storeBasket(clothe)} className="button-basket">
            + Add to Basket
          </Button>
        )}
      </>
    );
  };
  
  useEffect(()=>{
    fetchClothes();
  },[]);
  return (
    <Container maxWidth="xl">
      <Grid container spacing={3} mt={5}>
        <Grid item md={12}>
          <h2 className="center">POPULAR WEEK</h2>
        </Grid>
        {clothes.length > 0 &&
          clothes.map((clothe) => (
            <Grid item md={3}>
              <img className="product-photo" width={297} src={clothe.photo} alt="" />
              <div className="description">
                <p>{clothe.name}</p>
                <p className="container-buttons">
                  <span className="price">$ {clothe.price_sale}</span>
                  <span className="price-tacched">$ {clothe.price}</span>
                  <ButtonForProduct clothe={clothe} />
                </p>
              </div>
            </Grid>
          ))}
      </Grid>
    </Container>
  );
};

export default PopularWeek;