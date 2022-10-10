import Image from 'next/image'
import imgBikcraft from '../public/img/bikcraft.jpg'
import imgSitas from '../public/img/Sitas&Peculiar.jpg'
import imgInsta from '../public/img/Instagram-Login.jpg'
import imgNetf from '../public/img/Netflix-clone.jpg'
import imgCalc from '../public/img/Calculador-imc.jpg'
import imgFlex from '../public/img/Flexbox-page.jpg'


export default function Experiencia(props) {
  return (
    
    <section className="experiencia" id="experiencia" aria-label="Experiência">
    <h2 className="subtitulo">Experiência</h2>
    <div className="carousel">
      <p className="experiencia-texto">Desenvolvo pequenos projetos como o Bikcraft utilizando apenas <strong>HTML</strong> , <strong>CSS</strong>  e <strong>JavaScript</strong>. Para o meu desenvolvimento e experiência tenho alguns projetos que desenvolvi durante os meus estudos na área.</p>

      <div className="empresa">
        <span className="empresa-ano">2022</span>
        <h3 className="empresa-titulo"><a href="https://mauricioc08.github.io/bikcraft/" target="_blank" rel="noreferrer" >Bikcraft</a></h3>
        <span className="empresa-titulo">Desenvolvedor Front-End</span>
        <p className="empresa-texto">No projeto Bikcraft eu trabalhei no desenvolvimento completo do HTML, CSS e JavaScript do site.<br/> É um site fictício de vendas, onde os produtos são bicicletas elétricas e seguros para os compradores. Além disso o site contém formulários de contatos e orçamentos.</p>
        <ul className="empresa-habilidades">
          <Image src={imgBikcraft} alt="Imagem de um site de Bicicletas a venda"/>
          <li>HTML</li>
          <li>CSS</li>
          <li>JavaScript</li>
        </ul>
      </div>

      <div className="empresa">
        <span className="empresa-ano">2022</span>
        <h3 className="empresa-titulo"><a href="https://mauricioc08.github.io/Sitas-e-Peculiar/" target="_blank" rel="noreferrer" >Sitas&Peculiar</a></h3>
        <span className="empresa-titulo">Desenvolvedor Front-End</span>
        <p className="empresa-texto">(Sitas&peculiar) tem como objetivo mostrar algumas dicas e informações sobre espécies, alimentação, meio ambiente, criação de calopsitas e muito mais... <br/>

          Importante ressaltar que esse é um projeto feito totalmente do zero, sem qualquer base de site para copiar (somente informações de veterinários e sites especialistas na criação de calopsitas.</p>
        <ul className="empresa-habilidades">
          <Image src={imgSitas} alt="Foto de um site sobre calopsitas"/>
          <li>HTML</li>
          <li>CSS</li>
        </ul>
      </div>

      <div className="empresa">
        <span className="empresa-ano">2022</span>
        <h3 className="empresa-titulo"><a href="https://mauricioc08.github.io/Clone_instagram/" target="_blank" rel="noreferrer" >Clone-Instagran</a></h3>
        <span className="empresa-titulo">Desenvolvedor Front-End</span>
        <p className="empresa-texto">No projeto Clone-Instagran eu trabalhei no desenvolvimento de uma pagina inicial de login do instagran.</p>
        <ul className="empresa-habilidades">
          <Image src={imgInsta} alt="Foto de um site, login do instragram"/>
          <li>HTML</li>
          <li>CSS</li>
        </ul>
      </div>

      <div className="empresa">
        <span className="empresa-ano">2022</span>
        <h3 className="empresa-titulo"><a href="https://mauricioc08.github.io/netflix-clone/" target="_blank" rel="noreferrer" >Netflix-clone</a></h3>
        <span className="empresa-titulo">Desenvolvedor Front-End</span>
        <p className="empresa-texto">Um projeto de um site simples e responsivo baseado no Layout da Netflix, onde você pode acessar alguns conteúdos de trailers ao clicar no filme, série ou conteúdo desejado.</p>
        <ul className="empresa-habilidades">
          <Image src={imgNetf} alt="Foto de um site clone da netflix"/>
          <li>HTML</li>
          <li>CSS</li>
          <li>JavaScript</li>
        </ul>
      </div>

      <div className="empresa">
        <span className="empresa-ano">2022</span>
        <h3 className="empresa-titulo"><a href="https://mauricioc08.github.io/Calculador-de-IMC/" target="_blank" rel="noreferrer" > Calculador-de-IMC</a></h3>
        <span className="empresa-titulo">Desenvolvedor Front-End</span>
        <p className="empresa-texto">Um calculador de imc simples, onde você pode calcular se está a acima, a baixo ou no peso ideal segundo o IMC (Índice de Massa Corporal) pelo seu peso e altura.</p>
        <ul className="empresa-habilidades">
          <Image src={imgCalc} alt="Foto de um site sobre calcular imc"/>
          <li>HTML</li>
          <li>CSS</li>
          <li>JavaScript</li>
        </ul>
      </div>

      <div className="empresa">
        <span className="empresa-ano">2022</span>
        <h3 className="empresa-titulo"><a href="https://mauricioc08.github.io/page-flexbox-origamid/" target="_blank" rel="noreferrer" >Page-flexbox-origamid</a></h3>
        <span className="empresa-titulo">Desenvolvedor Front-End</span>
        <p className="empresa-texto">Uma pagina feita no curso de front-end da Origamid com layout responsivo toda feita usando flexbox.</p>
        <ul className="empresa-habilidades">
          <Image src={imgFlex} alt="Foto de um site colorido usando elementos do flexbox"/>
          <li>HTML</li>
          <li>CSS</li>
        </ul>
      </div>

    </div>
    </section>



  )
}