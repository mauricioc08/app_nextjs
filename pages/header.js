import Head from 'next/head'
import Link from 'next/link'

export default function Header(props) {
  return (
    
    <header class="header">
    <h1><a href="./index.html">Mauricio Cassiano</a></h1>
    <nav>
      <ul class="header-menu">
        <li><a href="#experiencia">Experiencia</a></li>
        <li><a href="#formacao">Formação</a></li>
        <li><a href="#contato">Contato</a></li>
      </ul>
    </nav>
  </header>

  )
}
