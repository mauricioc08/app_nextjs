import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Link from 'next/link'

export default function Header(props) {
  return (
    <>
    <div className='border-white text-center border-2 mauricio'>
    <h1>Menu Header {props.quem}</h1>
    <Link href="/portifolio">Portifolio</Link><br />
    <Link href="/">Home</Link>
    </div>
    </>
  )
}
