import Head from 'next/head'
import Image from 'next/image'
import Header from './header'
import Footer from './footer'
import imageLogo from '../public/img/minha_foto.jpg'

export default function Formacao(props) {
  return (
    <section class="formacao" id="formacao" aria-label="Formação">
      <div class="formacao-container">
        <h2 class="subtitulo">Formação</h2>
        <div>
          <p class="formacao-texto">
            Minha mais recente experiência acadêmica foi a <strong>Pós Graduação</strong>  🎓 em <strong> Gestão de Pessoas</strong>. Além disso me mantenho sempre atualizado com cursos intensivos online.
          </p>

          <ul class="faculdade-lista">
            <li class="faculdade">
              <span class="faculdade-tipo">Bacharel</span>
              <h3 class="faculdade-curso">Administração</h3>
              <span class="faculdade-instituicao">UNINOVE</span>
            </li>
            <li class="faculdade">
              <span class="faculdade-tipo">TECNÓLOGO</span>
              <h3 class="faculdade-curso">Processos Gerenciais</h3>
              <span class="faculdade-instituicao">FAEL</span>
            </li>
            <li class="faculdade">
              <span class="faculdade-tipo">Pós Graduação</span>
              <h3 class="faculdade-curso">Gestão de Pessoas</h3>
              <span class="faculdade-instituicao">FAEL</span>
            </li>
          </ul>

          <div class="formacao-extra">
            <div class="cursos">
              <h3>Cursos Intensivos</h3>
              <ul>
                <li>Front End para Iniciantes<span>Origamid</span></li>
                <li>JavaScript<span>Origamid</span></li>
                <li>Programação para iniciantes<span>RocketSeat</span></li>
                <li>React Js do zero ao avançado na pratica<span>Udemy</span></li>
              </ul>
            </div>

            <div class="idiomas">
              <h3>Idiomas</h3>
              <ul>
                <li>Inglês <span>/ Básico</span></li>
                <li>Português <span>/ Nativo</span></li>
              </ul>
            </div>

          </div>
        </div>
      </div>
    </section>
  )
}
