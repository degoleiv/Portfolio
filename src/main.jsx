import React from 'react'
import ReactDOM from 'react-dom/client'

import './index.css'
import './footer.css'
import { Nav } from './Nav'

ReactDOM.createRoot(document.getElementById('root')).render(

<React.Fragment>
<div className='container'>
<header>
  <Nav/>
</header>

<aside>
  <p>Filtros</p>
  <ul>
    <li><a href=""></a></li>
    <li><a href=""></a></li>
    <li><a href=""></a></li>
    <li><a href=""></a></li>
  </ul>


</aside>
<main>Contenido</main>
<aside>Noticias</aside>

<footer>
  <strong className='footer-title'>Acerca de nosotros </strong>
  <p className='footer-paragraph'>
  Somos una empresa comprometida con la excelencia y 
  la satisfacción del cliente. Nuestro equipo está formado por profesionales altamente calificados en sus respectivos campos.
  Estamos dedicados a proporcionar productos y servicios de alta calidad que satisfagan las necesidades y expectativas de nuestros clientes.</p>


  <ul className='footer-redes'>
    <li className='footer-redes-item'><a href="">Linkedln</a></li>
    <li className='footer-redes-item'><a href="">Facebook</a></li>
    <li className='footer-redes-item'><a href="">Instagram</a></li>
  </ul>


</footer>


</div>




  
</React.Fragment>

)
