import Head from 'next/head'
import Image from 'next/image'
import Header from './header'

export default function Main(props) {
  return (
    
    <main className="introducao"> 
      <img src="./img/minha_foto.jpg" alt="foto perfil"/>
      <div>
        <h1>Desenvolvedor <br/> Front-End</h1>
        <p>Localizado em Guarulhos-SP</p>
      </div>
    </main>
    
  )
}
