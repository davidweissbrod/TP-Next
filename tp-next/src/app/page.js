import Image from "next/image";
import styles from "./page.module.css";
import React from 'react';
import Animales from '../../img/animales.jpg'
import Boton from "./components/Boton";

export default function Home() {
  return (
    <>
   <br/>
     <div class = "container">
       <h1>Guardia de Mascotas</h1>
       <p>Aca tenes un espacio para poder sacar turnos para tener citas en la guardia</p>
       <img src={Animales}/>
     </div>
     <Boton color="primary">Reservar</Boton>
     <a href="/reservas">hola</a>
   </>
  );
}
