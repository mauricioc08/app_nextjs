export default function Formacao(props) {
  return (
    <>
      <section className="formacao" id="formacao" aria-label="Formação">
        <div className="formacao-container">
          <h2 className="subtitulo">Formação</h2>
          <div>
            <p className="formacao-texto">
              Minha mais recente experiência acadêmica foi a{" "}
              <strong>Pós Graduação</strong> 🎓 em{" "}
              <strong> Gestão de Pessoas</strong>. Além disso me mantenho sempre
              atualizado com cursos intensivos online.
            </p>

            <ul className="faculdade-lista">
              <li className="faculdade">
                <span className="faculdade-tipo">Bacharel</span>
                <h3 className="faculdade-curso">Administração</h3>
                <span className="faculdade-instituicao">UNINOVE</span>
              </li>
              <li className="faculdade">
                <span className="faculdade-tipo">TECNÓLOGO</span>
                <h3 className="faculdade-curso">Processos Gerenciais</h3>
                <span className="faculdade-instituicao">FAEL</span>
              </li>
              <li className="faculdade">
                <span className="faculdade-tipo">Pós Graduação</span>
                <h3 className="faculdade-curso">Gestão de Pessoas</h3>
                <span className="faculdade-instituicao">FAEL</span>
              </li>
            </ul>

            <div className="formacao-extra">
              <div className="cursos">
                <h3>Cursos Intensivos</h3>
                <ul>
                  <li>
                    Front End para Iniciantes<span>Origamid</span>
                  </li>
                  <li>
                    JavaScript<span>Origamid</span>
                  </li>
                  <li>
                    Programação para iniciantes<span>RocketSeat</span>
                  </li>
                  <li>
                    React Js do zero ao avançado na pratica<span>Udemy</span>
                  </li>
                </ul>
              </div>

              <div className="idiomas">
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
