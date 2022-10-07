import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Link from 'next/link'

export default function Header(props) {
  return (
    <>
    <body className='w-screen '>
    
    <header className='flex items-center justify-between px-5 py-10 max-w-7xl my-0 mx-auto'>
     <h1 className='text-5xl font-bold p-0 m-0 cursor-pointer'>Mauricio Cassiano</h1>
     <nav >
      <ul className='flex flex-wrap gap-10 justify-center'>
        <li><a className='text-lg m-0 leading-5  px-5 py-3 block duration-700 hover:bg-black hover:text-neutral-100 rounded' href="#experiencia">Experiencia</a></li>
        <li><a className='text-lg m-0 leading-5 px-5 py-3 block duration-700 hover:bg-black hover:text-neutral-100 rounded' href="#formacao">Formação</a></li>
        <li><a className='text-lg m-0 leading-5 px-5 py-3 block duration-700 hover:bg-black hover:text-neutral-100 rounded' href="#contato">Contato</a></li>
      </ul>
     </nav>
    
    </header>

    <main className='grid grid-cols-3 items-center gap-28 max-w-7xl m-0 mx-auto px-5 py-10'> 
      <img className='rounded-bl-lg' src="./img/minha_foto.jpg" alt="foto perfil"/>
      <div className='grid col-start-2'>
        <h1 className='text-7xl leading-tight font-bold mb-8 relative'>Desenvolvedor <br/>Front-End</h1>
        <p className='text-2xl'>Localizado em Guarulhos-SP</p>
      </div>
    </main>

    

  </body>
    </>
  )
}
