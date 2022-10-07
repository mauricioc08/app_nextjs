import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Header from './header'
import Footer from './footer'
import imageLogo from '../public/img/minha_foto.jpg'

export default function Formacao() {
  return (
    <>
    <Header/>
    
    <main className='colunas'> 
      <Image className='rounded-bl-lg' src={imageLogo} alt="foto perfil"/>
      Formacao teste
    </main>

    <Footer/>
    </>
  )
}
