//sera un componenente el cual nos renderizara un formulario de registro
import { useState } from "react";

const FormRegister = () => {
    //como podemos capturar el valor de un input
    const [nombre, setNombre] = useState("");
    const [apellido, setApellido] = useState("");
    //event para obtener el valor de l input
    const handleInputName = (event)=>{
        setNombre(event.target.value);
    }
    const handleInputApellido = (event)=>{
        setApellido(event.target.value);
    }
    return (
        <div>
            <form action="">
                <h4>Formulario de registro</h4>
                <h4>Nombre {nombre}</h4>
                <h4>Apellido {apellido}</h4>
                <p>
                    <input type="text" onChange={handleInputName} placeholder="Ingrese su nombre"></input>
                </p>
                <p>
                    <input type="text" onChange={handleInputApellido} placeholder="Ingrese su apellido"></input>
                </p>
                <p>
                    <input type="email" placeholder="Ingrese su email"></input>
                </p>
                <p>
                    <input type="password" placeholder="Ingrese su passwword"></input>
                </p>
                <button>Registrar</button>
            </form>
        </div>
    );
};

export default FormRegister;