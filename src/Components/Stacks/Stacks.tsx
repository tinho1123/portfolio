import React from 'react'
import { css3, express, html5, javascript, materialUi, mongo, mySql, node, reactLogo, redux, sequelize, typescript } from '../../images'
import './styles.css'

const Stacks = () => {
  return (
    <div id='stacks'>
      <div className='stacksContainer'>
        <h1>Todas as Stacks que conheço</h1>
        <div className='stacks'>
          <h2>Front-End</h2>
          <a href='https://developer.mozilla.org/pt-BR/docs/Web/HTML' target='_blank' rel='noreferrer'>
            <img  src={html5} alt='html5' className='imgSmall'/>
          </a>

          <a href='https://developer.mozilla.org/pt-BR/docs/Web/CSS' target='_blank' rel='noreferrer'>
            <img src={css3} alt='css' className='imgSmall'/>
          </a>

          <a href='https://developer.mozilla.org/pt-BR/docs/Web/JavaScript' target='_blank' rel='noreferrer'>
            <img src={javascript} alt='javascript' className='imgSmall' />
          </a>

            <a href='https://pt-br.reactjs.org/' target='_blank' rel='noreferrer' className='big'>
              <img src={reactLogo} alt='react'  className='imgBig'/>
            </a>
          

          <a href='https://redux.js.org/' target='_blank' rel='noreferrer'>
            <img src={redux} alt='redux' className='imgBig'/>
          </a>

          <a href='https://mui.com/pt/' target='_blank' rel='noreferrer'>
            <img src={materialUi} alt='materialUi' className='imgMedium'/>
          </a>

        </div>

        <div className='stacks'>
          <h2>Back-end</h2>
          <a href='https://nodejs.org/en/' target='_blank' rel='noreferrer'>
            <img  src={node} alt='node' className='imgBig'/>
          </a>

          <a href='https://expressjs.com/pt-br/' target='_blank' rel='noreferrer'>
            <img src={express} alt='express' className='imgBig'/>
          </a>

          <a href='https://www.typescriptlang.org/' target='_blank' rel='noreferrer'>
            <img src={typescript} alt='typescript'className='imgMedium' />
          </a>

          <a href='https://sequelize.org/' target='_blank' rel='noreferrer'>
            <img src={sequelize} alt='sequelize' className='imgMedium'/>
          </a>

        </div>

        <div className='stacks'>
          <h2>Banco de Dados</h2>

          <a href='https://www.mongodb.com/docs/' target='_blank' rel='noreferrer'>
            <img src={mongo} alt='mongo' className='imgBig' />
          </a>

          <a href='https://www.mysql.com/' target='_blank' rel='noreferrer'>
            <img src={mySql} alt='mysql' className='imgBig' />
          </a>



        </div>

      </div>
    </div>
  )
}

export default Stacks