import Head from 'next/head'
import Link from 'next/link'

export default function Header(props) {


  return (
    
    <header className="header">
    <Link href="/"><h1><a>Mauricio Cassiano</a></h1></Link>
    <nav>
      <ul className="header-menu js-menu">
        <li><a href="#experiencia">Experiencia</a></li>
        <li><a href="#formacao">Formação</a></li>
        <li><a href="#contato">Contato</a></li>
      </ul>
    </nav>
    </header>

  )
}
