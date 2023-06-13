import styles from "./footer.module.css";

export default function Footer(props) {
  return (
    <footer className={styles.footer} id="contato">
      <div className={styles.footerContainer}>
        <p className={styles.footerTexto}>
          Estou disponível para novos projetos no momento. Entre em contato
          comigo e marcamos uma conversa 👋
        </p>
        <ul className={styles.footerContato}>
          <li> mauricio-cassiano@hotmail.com</li>
          <li>
            <a
              href="https://api.whatsapp.com/send?1=pt_BR&phone=5511945396825"
              target="_blank"
              rel="noreferrer"
            >
              Whatsapp
            </a>
          </li>
          <li>
            <a
              href="https://www.linkedin.com/in/mauricio-cassiano-4186b0164/"
              target="_blank"
              rel="noreferrer"
            >
              Linkedin
            </a>
          </li>
          <li>
            <a
              href="https://github.com/mauricioc08"
              target="_blank"
              rel="noreferrer"
            >
              GitHub
            </a>
          </li>
        </ul>
        <p className={styles.footerCopy}>
          Mauricio Cassiano © Alguns direitos reservados.
        </p>
      </div>
    </footer>
  );
}
