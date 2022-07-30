import { Frontend } from "../templates/Frontend"
import {Container } from './styles'
import rightmain from '../assets/rightmain.svg'
function Main() {

  return (
    <div style={{height:'100%'}} className="App">
      <Frontend>
       
      </Frontend>
      <Container>
          <div className="mainleft">
            <div>Love and kindness are never wasted.</div>
            <p>We help around 1,00,000+ cats and kittens every year thanks in no small part to our network of over 200+ volunteer-run branches.</p>
            <button>Join Us</button>
          </div>
          <div className="mainright"><img src={rightmain} alt='imagem grande da direita'></img></div>
        </Container>
    </div>
  )
}

export default Main
