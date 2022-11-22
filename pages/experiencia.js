import Image from 'next/image'
import imgBikcraft from '../public/img/bikcraft.jpg'
import imgSitas from '../public/img/Sitas&Peculiar.jpg'
import imgInsta from '../public/img/Instagram-Login.jpg'
import imgNetf from '../public/img/Netflix-clone.jpg'
import imgCalc from '../public/img/Calculador-imc.jpg'
import imgFlex from '../public/img/Flexbox-page.jpg'
import combustivel from '../public/img/gasoline.png'
import qrcodeImg from '../public/img/Qrcode.png'
import pokeImg from '../public/img/pokemon.png'
import cepImg from '../public/img/buscadorCep.png'


export default function Experiencia(props) {
  return (
    
    <section className="experiencia" id="experiencia" aria-label="Experiência">
    <h2 className="subtitulo">Experiência</h2>
    <div className="carousel">
      <p className="experiencia-texto">Desenvolvo projetos como o Bikcraft e Buscador de Cep utilizando <strong>HTML</strong> , <strong>CSS</strong>, <strong>JavaScript</strong> e <strong>ReactJs</strong>. Para o meu desenvolvimento e experiência tenho alguns projetos que desenvolvi durante os meus estudos na área.</p>

      <div className="empresa">
        <span className="empresa-ano">2022</span>
        <h3 className="empresa-titulo"><a href="https://cep-search-react-ay5cz0723-mauricioc08.vercel.app/" target="_blank" rel="noreferrer">Buscador_de_CEP</a></h3>
        <span className="empresa-titulo">Desenvolvedor Front-End</span>
        <p className="empresa-texto">Este é um projeto onde você pode pesquisar qualquer endereço a partir do CEP..<br/>Basta digitar o Cep desejado e pesquisar.</p>
        <ul className="empresa-habilidades">
          <Image src={cepImg} alt="Imagem de um site gerador de Qrcode"/>
          <li>HTML</li>
          <li>CSS</li>
          <li>JavaScript</li>
          <li>ReactJs</li>
        </ul>
      </div>

      <div className="empresa">
        <span className="empresa-ano">2022</span>
        <h3 className="empresa-titulo"><a href="https://app-pokemons-mixgb706l-mauricioc08.vercel.app/" target="_blank" rel="noreferrer">Pokémon_Api</a></h3>
        <span className="empresa-titulo">Desenvolvedor Front-End</span>
        <p className="empresa-texto">Desenvolvi um projeto para consumir uma API de nome, tipo e imagem de Pokémon do site PokéAPI em reactjs.<br/>Támbem é possivel pesquisar pelo nome do Pokémon.</p>
        <ul className="empresa-habilidades">
          <Image src={pokeImg} alt="Imagem de um site gerador de Qrcode"/>
          <li>HTML</li>
          <li>CSS</li>
          <li>JavaScript</li>
          <li>ReactJs</li>
        </ul>
      </div>

      <div className="empresa">
        <span className="empresa-ano">2022</span>
        <h3 className="empresa-titulo"><a href="https://qrcode-generator-5f5ll540b-mauricioc08.vercel.app/" target="_blank" rel="noreferrer">Gerador-de-Qrcode</a></h3>
        <span className="empresa-titulo">Desenvolvedor Front-End</span>
        <p className="empresa-texto">Desenvolvi um Gerador de Qrcode em reactjs com a opção de baixar a imagem.<br/>Basta digitar o link do site desejado e o Qrcode ficará disponivel.</p>
        <ul className="empresa-habilidades">
          <Image src={qrcodeImg} alt="Imagem de um site gerador de Qrcode"/>
          <li>HTML</li>
          <li>CSS</li>
          <li>JavaScript</li>
          <li>ReactJs</li>
        </ul>
      </div>

      <div className="empresa">
        <span className="empresa-ano">2022</span>
        <h3 className="empresa-titulo"><a href="https://mauricioc08.github.io/gasolineVsEtanol/" target="_blank" rel="noreferrer">GasolineVsEtanol</a></h3>
        <span className="empresa-titulo">Desenvolvedor Front-End</span>
        <p className="empresa-texto">Devido a grande oscilação dos preços dos combustíveis, eu desenvolvi esse projeto para me ajudar a escolher o combustível ideal de acordo com o preço de cada um {`${'"paridade de combustivél"'}`}.<br/>Espero que este aplicativo possa ajudar outras pessoas com o mesmo problema.</p>
        <ul className="empresa-habilidades">
          <Image src={combustivel} alt="Imagem de um site de paridade de combustível"/>
          <li>HTML</li>
          <li>CSS</li>
          <li>JavaScript</li>
        </ul>
      </div>

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
        <h3 className="empresa-titulo"><a href="https://mauricioc08.github.io/Sitas-e-Peculiar/" target="_blank" rel="noreferrer">Sitas&Peculiar</a></h3>
        <span className="empresa-titulo">Desenvolvedor Front-End</span>
        <p className="empresa-texto">(Sitas&peculiar) tem como objetivo mostrar algumas dicas e informações sobre espécies, alimentação, meio ambiente, criação de calopsitas e muito mais... <br/>

          Importante ressaltar que esse é um projeto feito totalmente do zero, sem qualquer base de site para copiar somente informações de veterinários e sites especialistas na criação de calopsitas.</p>
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