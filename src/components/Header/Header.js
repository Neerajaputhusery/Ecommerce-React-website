import React from 'react'
import './Header.css';
import { Link } from 'react-router-dom';
function Header() {
  return (
<header className='header'>
    <Link to='/' style={{TextDecoration:'none',color:'#fff'}}>
    <h1>NYKA STORE</h1>
    </Link>
    <Link to='/logout'>
    <button className='log-button'>Log out</button>
    </Link>
  
</header>
  )
}

export default Header