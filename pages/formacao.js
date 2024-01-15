import styles from "./formacao.module.css";

export default function Formacao(props) {
  return (
    <>
      <section className={styles.formacao} id="formacao" aria-label="Formação">
        <div className={styles.formacaoContainer}>
          <h2 className={styles.subtitulo}>Formação</h2>
          <div>
            <p className={styles.formacaoTexto}>
              Minha mais recente experiência acadêmica foi a{" "}
              <strong>Pós Graduação</strong> 🎓 em{" "}
              <strong> Gestão de Pessoas</strong>. Além disso me mantenho sempre
              atualizado com cursos intensivos online.
            </p>

            <ul className={styles.faculdadeLista}>
              <li className={styles.faculdade}>
                <span className={styles.faculdadeTipo}>Graduação</span>
                <h3 className={styles.faculdadeCurso}>Análise e Desenvolvimento de Sistemas</h3>
                <span className={styles.faculdadeInstituicao}>UNIFAEL</span>
              </li>
              <li className={styles.faculdade}>
                <span className={styles.faculdadeTipo}>TECNÓLOGO</span>
                <h3 className={styles.faculdadeCurso}>Processos Gerenciais</h3>
                <span className={styles.faculdadeInstituicao}>FAEL</span>
              </li>
              <li className={styles.faculdade}>
                <span className={styles.faculdadeTipo}>Pós Graduação</span>
                <h3 className={styles.faculdadeCurso}>Gestão de Pessoas</h3>
                <span className={styles.faculdadeInstituicao}>FAEL</span>
              </li>
            </ul>

            <div className={styles.formacaoExtra}>
              <div className={styles.cursos}>
                <h3>Cursos Intensivos</h3>
                <ul>
                  <li>
                    ReactJs<span>Origamid</span>
                  </li>
                  <li>
                    React Js do zero ao avançado na pratica<span>Udemy</span>
                  </li>
                  <li>
                    Front End para Iniciantes<span>Origamid</span>
                  </li>
                  <li>
                    JavaScript<span>Origamid</span>
                  </li>
                  <li>
                    Programação para iniciantes<span>RocketSeat</span>
                  </li>
                </ul>
              </div>

              <div className={styles.idiomas}>
                <h3>Idiomas</h3>
                <ul>
                  <li>
                    Inglês <span>/ Básico</span>
                  </li>
                  <li>
                    Português <span>/ Nativo / Avançado</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
