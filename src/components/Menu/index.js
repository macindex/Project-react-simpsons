import React from 'react'
import { Link } from 'react-router-dom'

import './style.css'


const Menu = () => {
  return (
    <div>
      <ul className='menu'>
        <li>
          <Link className='link' to='/'>Home</Link>
        </li>
        <li>
          <Link className='link' to='/simpsons'>Simpsons</Link>
        </li>
        <li>
          <Link className='link' to='/sobre'>Sobre mim</Link>
        </li>
      </ul>
    </div>
  )
}

export default Menu