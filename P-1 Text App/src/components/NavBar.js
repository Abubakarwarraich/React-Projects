import React from 'react'
import Logo from '../assets/LJ.png';

export default function NavBar(props) {
  return (
   <>
<nav className='nav'>


    <h3>{props.title}</h3>
    <li>Home</li>
    <li>About</li>

    <img src= {Logo} alt='Logo'/>

</nav>
<h1 id='heading'>Hello Abubakar</h1>

   </>
  )
}

NavBar.defaultProps = {
    title: "Hello Set title"
  };
