import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

export default function Header(props) {
  return (
    <>
    <div className='border-white text-center border-2 mauricio'>
    <h1>Menu Header {props.quem}</h1>
    <a href="/portifolio">Portifolio</a><br />
    <a href="/">Home</a>
    </div>
    </>
  )
}
