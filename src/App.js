import { Fragment, useEffect, useState } from "react";
import Clima from "./components/Clima/Clima";
import Error from "./components/Error/Error";
import Formulario from "./components/Formulario/Formulario";
import Header from "./components/Header/Header";


function App() {

  const [busqueda, setBusqueda] = useState({
    ciudad:"",
    pais:""

});
const [consultar, setConsultar] = useState(false)
const [resultado, setResultado] = useState({})
const [error, setError] = useState(false)
const {ciudad, pais}= busqueda;



useEffect(() => {
  
  const consultarAPI = async() =>{
if (consultar) {
  const appID= 'dff1bdba0efdd7b890dc185428f09e66';
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${ciudad},${pais}&appid=${appID}`;
  const response = await fetch(url);
  const resultado = await response.json();
  
  

  setResultado(resultado)
  setConsultar(false)

  
if (resultado.cod==="404") {
  setError(true);
  
}else{
  setError(false);
}
  
}
  }
  consultarAPI();
}, [consultar, ciudad, pais])


let componente;
if (error) {
  componente= <Error mensaje="No hay resultados"/>

  
}else{
  componente= <Clima resultado={resultado}
  busqueda={busqueda}
  
  />
}


  return (
   <Fragment>
     <Header titulo="Clima App"/>
     <Formulario busqueda={busqueda}
      setBusqueda={setBusqueda}
      setConsultar={setConsultar}
     
      />

    {componente}
   </Fragment>
  );
}

export default App;
