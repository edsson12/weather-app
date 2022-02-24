import React from 'react'
import './Header.scss'

const Header = ({titulo}) => {
  return (
   <nav>
       <div className="o-container">
           <h1>{titulo}</h1>
       </div>
   </nav>
  )
}

export default Header