import Head from 'next/head'
import Image from 'next/image'
import Header from './header'
import Main from './introducao'
import Footer from './footer'
import Formacao from './formacao'

export default function Home() {
  return (
    <>
    
    <Header/>
    <Main/>
    <Formacao/>
    <Footer/>
    
    </>
  )
}
