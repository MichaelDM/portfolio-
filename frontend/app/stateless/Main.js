import React from 'react';
import {Link} from 'react-router';



const Main = (props) => {
  return(
    <div className="site-external-wrapper">
      <main>
        {props.children}
      </main>

      <footer className='footer'>
        <Link to='/'>
          <button type='button'>HOME PAGE</button>
        </Link>
        <br>
        </br>
        <Link to='/form'>
          <button type='button'>FORM PAGE</button>
        </Link>
      </footer>
    </div>
  )
}

export default Main;
