import React from 'react';
import '../static/styles/components/Layout.css'
import logo from '../static/images/logo.png'

const Layout = ({ children }) => {
  return (
    <>
      <header>
        <img alt='logo' src={logo} />
        <h1>Harness Job Manager</h1>
      </header>
      <div className='actions-containers'>
          <button className='btn-add'>Agregar Trabajo</button>
      </div>
      {children}
      <footer>
        <h3>Prueba Técnica</h3>
        <ul className='contactos'>
          <li>
            <a href='https://github.com/JaviMiot'>Github Javim_iot</a>
          </li>
          <li>
            <a href='https://www.linkedin.com/in/javimiot/'>
              Linkedin Javim_iot
            </a>
          </li>
        </ul>
      </footer>
    </>
  );
};

export default Layout;
