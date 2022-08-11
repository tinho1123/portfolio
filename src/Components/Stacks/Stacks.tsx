import React from 'react'
import { css3, html5, javascript, materialUi, reactLogo, redux } from '../../images'
import './styles.css'

const Stacks = () => {
  return (
    <div id='stacks'>
      <div className='stacksContainer'>
        <h1>Todas as Stacks que conheço</h1>
        <div className='stacks__frontEnd'>
          <h2>Front-End</h2>
          <a href='https://developer.mozilla.org/pt-BR/docs/Web/HTML' target='_blank' rel='noreferrer'>
            <img  src={html5} alt='html5' />
          </a>

          <a href='https://developer.mozilla.org/pt-BR/docs/Web/CSS' target='_blank' rel='noreferrer'>
            <img src={css3} alt='css' />
          </a>

          <a href='https://developer.mozilla.org/pt-BR/docs/Web/JavaScript' target='_blank' rel='noreferrer'>
            <img src={javascript} alt='javascript' />
          </a>

          <a href='https://pt-br.reactjs.org/' target='_blank' rel='noreferrer'>
            <img src={reactLogo} alt='react' />
          </a>

          <a href='https://redux.js.org/' target='_blank' rel='noreferrer'>
            <img src={redux} alt='redux' />
          </a>

          <a href='https://mui.com/pt/' target='_blank' rel='noreferrer'>
            <img src={materialUi} alt='materialUi' />
          </a>

          <a href='https://developer.mozilla.org/pt-BR/docs/Web/JavaScript' target='_blank' rel='noreferrer'>
            <img src={javascript} alt='javascript' />
          </a>
        </div>

        <div className='stacks__backEnd'>
          <h2>Back-end</h2>
          <a href='https://developer.mozilla.org/pt-BR/docs/Web/HTML' target='_blank' rel='noreferrer'>
            <img  src={html5} alt='html5' />
          </a>

          <a href='https://developer.mozilla.org/pt-BR/docs/Web/CSS' target='_blank' rel='noreferrer'>
            <img src={css3} alt='css' />
          </a>

          <a href='https://developer.mozilla.org/pt-BR/docs/Web/JavaScript' target='_blank' rel='noreferrer'>
            <img src={javascript} alt='javascript' />
          </a>

          <a href='https://pt-br.reactjs.org/' target='_blank' rel='noreferrer'>
            <img src={reactLogo} alt='react' />
          </a>

          <a href='https://redux.js.org/' target='_blank' rel='noreferrer'>
            <img src={redux} alt='redux' />
          </a>

          <a href='https://mui.com/pt/' target='_blank' rel='noreferrer'>
            <img src={materialUi} alt='materialUi' />
          </a>

          <a href='https://developer.mozilla.org/pt-BR/docs/Web/JavaScript' target='_blank' rel='noreferrer'>
            <img src={javascript} alt='javascript' />
          </a>
        </div>

      </div>
    </div>
  )
}

export default Stacks