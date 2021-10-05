import React from 'react';
import { Link } from 'react-router-dom';
import '../static/styles/components/Layout.css';
import logo from '../static/images/logo.png';

const styles = {
  link: { textDecoration: 'none', color: 'white' },
};

const Layout = (props) => {
  const { children } = props;

  return (
    <>
      <header>
        <img alt='logo' src={logo} />
        <Link style={styles.link} to='/'>
          <h1>Harness Job Manager</h1>
        </Link>
      </header>

      <div className='content'>{children}</div>
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
