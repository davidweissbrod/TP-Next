import React from 'react';
import Animales from '../../public/img/animales.jpg'
import styles from './styles/home.module.css';
import Image from 'next/image';

export default function Home(){
  
  return (
    <>
     <br/>
     <div className = {styles.container}>
       <h1>Guardia de Mascotas</h1>
       <p>Aca tenes un espacio para poder sacar turnos para tener citas en la guardia</p>
       <Image src={Animales} alt='Animales' layout='responsive' />
     </div>
   </>
  );
}
