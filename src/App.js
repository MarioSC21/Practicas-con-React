
//Primer paso apra definir un compnente es el nombre
//nombre del componente siempre debe iniciar en mayuscula
//se puede usar function o arrow function

//?useState importar
import { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
// import FormRegister from "./form";
import FormUser from "./formUser";


const PrimerComponente = () => {

  //? useState
  //count > mostrar el valor
  //setCount > asigna un valor a count
  //parametro de useState es el valor inicial > count = 0
  const[count, setCount] = useState(0);

  //? creacion de funciones
  const sumar = ()=>{
    setCount(count+1);
  }
  const restar = ()=>{
    setCount(count-1);
  }

  const suma = (n1, n2)=>{
    setCount (n1 + n2);
  }

  return (
    <div>
      <Header/>
      <h1>Hola mundo {count}</h1>
      <div>
        <h4>Hola desde el componente</h4>
        {/* creacion de botones uno para sumar a 1 count y otro para restarle*/}
        <button onClick={sumar}>Sumar</button>
        <button onClick={restar}>Restar</button>

        <button onClick={()=> suma(10,20)}>Con parametros</button>
      </div>
      <Footer/>
      <hr/>
      {/* <FormRegister/> */}
      <FormUser/>
    </div>
  );
};

//exportar
export default PrimerComponente;
