import React from 'react';
import Animales from '../../public/img/animales.jpg'
import Link from 'next/link';

export default function Home(){
  
  return (
    <>
     <br/>
     <div class = "container">
       <h1>Guardia de Mascotas</h1>
       <p>Aca tenes un espacio para poder sacar turnos para tener citas en la guardia</p>
       <img src={Animales}/>
     </div>
   </>
  );
}
