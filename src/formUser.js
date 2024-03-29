import { useState } from "react";
// import { Button, Form } from "react-bootstrap";
import {TextField, Button} from "@mui/material"

const FormUser = () => {
  // La otra forma en la cual podemos guardar los datos de los inputs
  // es un objeto para ello necesitamos que los inputs tenga un name
  // para que los name sirvan como un key el valor sea lo que se obtenga de
  // los inputs

  // ahora debemos crear una variable que tenga por default un objeto con los keys(name)
  // pero que los values esten vacios
  const [valorDeInputs, setValorInputs] = useState({
    nombre: "",
    apellido: "",
    correo: "",
    password: "",
  });

  // Ahora debemos construir una funcion que se encargue de almacenar los valores
  // de los input en el objeto
  const handleInputValues = (e) => {
    // debemos extrar 2 cosas de event
    // 1 el name de cada input
    // 2 el value de cada input
    // name = e.target.name
    // value = e.target.value
    const { name, value } = e.target;
    // ...valorDeInputs: Es para hacer una copia del objeto actual y ademas estamos agregando
    // el nuevo key y value que recibimos
    // [name] recurden que name es una variable por ende para poder usarla como key
    // debemos colocarla entra []
    // value: El valor que estamos recibiendo de nuesto input
    setValorInputs({
      ...valorDeInputs,
      [name]: value,
    });
  };

  return (
    <div>
      <form action="">
          {/* En react la forma en la cual damos un clase es usando el className */}
          <h4 className="title">Formualario de Usuarios</h4>
          <h5>Nombre {valorDeInputs.nombre}</h5>
          <h5>Apellido {valorDeInputs.apellido}</h5>
          <h5>Correo {valorDeInputs.correo}</h5>
          <h5>Password {valorDeInputs.password}</h5>
          <p>
            <TextField
              type="text"
              onChange={handleInputValues}
              name="nombre"
              label="Ingrese su nombre"
            />
          </p>
          <p>
            <TextField
              type="text"
              name="apellido"
              variant="filled"
              onChange={handleInputValues}
              label="Ingrese su apellido"
            />
          </p>
          <p>
            <TextField
              type="email"
              onChange={handleInputValues}
              name="correo"
              label="Ingrese su email"
            />
          </p>
          <p>
            <TextField
              type="password"
              name="password"
              onChange={handleInputValues}
              label="Ingrese su password"
            />
          </p>
          <p>
            <Button variant="contained" color="primary" type="submit">
              Registar
            </Button>
          </p>
      </form>
    </div>
  );
};

export default FormUser;