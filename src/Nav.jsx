import './Nav.css'
export function Nav (){
    return (
        <nav className='Navbar'>
        <div className='logo'>
          <img src='src\assets\logotipo.svg' className='logo-img'></img>
          <label className='logo-label'>Pagina referencia</label>
        </div>
   

        <ul className='menu'>
          <li className='menu-item'><a href="">Inicio</a></li>
          <li className='menu-item'><a href="">Catalogo</a></li>
          <li className='menu-item'><a href="">Compras  </a></li>
          <li className='menu-item'><a href="">Sobre nosotros</a></li>
        </ul>

       
        <button class="dropbtn">Desplegable</button>
        </nav>

    )
}