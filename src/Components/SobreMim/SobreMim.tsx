import React from 'react'
import './styles.css';
import { css3, fotoProfile, html5, javascript, reactLogo, trybe } from '../../images';

const SobreMim = () => {
  return (
    <div id='sobreMim'>
      <div className='sobreMimContainer'>
        <div className='sobreMim__information'>
          <h1>Hi there 👋</h1>
          <h1>Me chamo Wellington</h1>
          <label>Sou um apaixonado por jogos e tecnologia!</label>
          <p>Atualmente estudante de Desenvolvimento Web na Trybe!</p>
          <div className="sobreMim__information__studentOrg">
          <a href='https://www.betrybe.com/'>
            <img src={trybe} alt='Organização onde estudo'/>
          </a>
          </div>
            <p>
            Utilizando tecnologias como:
            </p> 

          <div className='sobreMim__information__stacks'>
              <img src={html5} alt='html5'/>
              <img src={css3} alt='html5'/>
              <img src={javascript} alt='html5'/>
          </div>

          <p>Frameworks:</p> 
          <div className='sobreMim__information__stacks'>   

              <img src={reactLogo} alt='React'/>

          </div>
        </div>
        <div className='sobreMim_profile' >
          <img src={fotoProfile} alt='Minha foto do perfil' />
        </div>
      </div>
    </div>
  )
}

export default SobreMim