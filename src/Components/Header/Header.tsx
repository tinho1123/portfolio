import React from 'react'
import './styles.css'

const Header = () => {
  return (
    <div id='header'>
      <div className='headerContainer'>
        <div className='header__myName'>
          <h1>
          🧑‍💻 Wellington Carvalho
          </h1>
        </div>
        <div className='header__list'>
          <ul>
            <li><a href="#sobreMim">Sobre mim</a></li>
            <li><a href="#stacks">Stacks</a></li>
            <li><a href="#projetos">Projetos</a></li>
            <li><a href="#contatos">Contatos</a></li>


          </ul>
        </div>
      </div>
    </div>
  )
}

export default Header