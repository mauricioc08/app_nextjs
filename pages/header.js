import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Link from 'next/link'

export default function Header(props) {
  return (
    <>
    <body className='w-screen'>
    
    <header className='flex items-center justify-between px-40 py-20 max-w-1200 m-0'>
     <h1 className='text-5xl font-bold p-0 m-0 cursor-pointer'>Mauricio Cassiano</h1>
     <nav >
      <ul className='flex flex-wrap gap-10 justify-center'>
        <li><a className='text-lg m-0 leading-5  px-5 py-3 block duration-700 hover:bg-black hover:text-neutral-100 rounded' href="#experiencia">Experiencia</a></li>
        <li><a className='text-lg m-0 leading-5 px-5 py-3 block duration-700 hover:bg-black hover:text-neutral-100 rounded' href="#formacao">Formação</a></li>
        <li><a className='text-lg m-0 leading-5 px-5 py-3 block duration-700 hover:bg-black hover:text-neutral-100 rounded' href="#contato">Contato</a></li>
      </ul>
     </nav>
    
    </header>

    

  </body>
    </>
  )
}
