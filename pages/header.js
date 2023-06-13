import Link from "next/link";
import Head from "next/head";
import { useState } from "react";
import styles from "./header.module.css";

export default function Header(props) {
  const [mytitle, setMytitle] = useState("Meu Portifolio");

  const handleTitle = (value) => {
    setMytitle(value);
  };

  return (
    <>
      <Head>
        <title>{mytitle}</title>
      </Head>
      <header className={styles.header}>
        <Link href="/">
          <h1>
            <span onClick={() => handleTitle("Meu Portifolio")}>
              Mauricio Cassiano
            </span>
          </h1>
        </Link>
        <nav>
          <ul className={`${styles.headerMenu} js-menu`}>
            <li>
              <a href="#experiencia" onClick={() => handleTitle("Experiencia")}>
                Experiencia
              </a>
            </li>
            <li>
              <a href="#formacao" onClick={() => handleTitle("Formação")}>
                Formação
              </a>
            </li>
            <li>
              <a href="#contato" onClick={() => handleTitle("Contato")}>
                Contato
              </a>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
}
