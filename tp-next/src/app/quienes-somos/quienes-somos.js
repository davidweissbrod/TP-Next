import React from 'react'
import IanDavid from '../../img/david-ian.jpg'
import { Image } from 'react-bootstrap'

const Nosotros = () =>{
    <>
        <h1>¿Quienes somos?</h1>
        <br/>
        <h2>Ian y David</h2>
        <Image src={IanDavid}/>
        <p>
            Somos dos personas que aman a los animalitos y buscamos ayudarlos de las maneras que podemos, por eso es que creamos esta pagina para nuestra 
            guardia, haciendo que sea mas facil organizar los turnos logrando asi mucho mas dinamismo y el poder ayudar a muchas mas mascotas.
            ¡Muchas gracias por elegirnos!
        </p>
    </>
}
export default Nosotros;