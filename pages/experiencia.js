import styles from "./experiencia.module.css";
import Image from "next/image";
import imgBikcraft from "../public/img/bikcraft.jpg";
import imgSitas from "../public/img/SitasPeculiar.jpg";
import imgNetf from "../public/img/Netflix-clone.jpg";
import imgCalc from "../public/img/Calculador-imc.jpg";
import imgFlex from "../public/img/Flexbox-page.jpg";
import combustivel from "../public/img/gasoline.png";
import qrcodeImg from "../public/img/Qrcode.png";
import cepImg from "../public/img/buscadorCep.png";
import jokeImg from "../public/img/jokes.png";
import nasaImg from "../public/img/nasa.png";
import listaImg from "../public/img/listaTarefas.png";
import chatImg from "../public/img/chatApp.png";

export default function Experiencia(props) {
  return (
    <section
      className={styles.experiencia}
      id="experiencia"
      aria-label="Experiência"
    >
      <h2 className={styles.subtitulo}>Experiência</h2>
      <div className={styles.carousel}>
        <p className={styles.experienciaTexto}>
          Olá, me chamo Mauricio Cassiano, sou desenvolvedor Web
          experiente em <strong>HTML</strong> , <strong>CSS</strong>,{" "}
          <strong>JavaScript</strong> , <strong>ReactJs</strong> e{" "}
          <strong>NextJs</strong>. Crio projetos inovadores, aprimorando
          habilidades e conhecimento em desenvolvimento web.
          <br /> Busco por oportunidades para contribuir com novos projetos e
          desafios.
          <br /> Aqui estão alguns exemplos do meu trabalho:
        </p>

        <div className={styles.empresa}>
          <span className={styles.empresaAno}>2023</span>
          <h3 className={styles.empresaTitulo}>
            <a
              href="https://chat-gpt-nextjs-d3ocbsoon-mauricioc08.vercel.app/"
              target="_blank"
              rel="noreferrer"
            >
              ChatGpt_em_NextJs
            </a>
          </h3>
          <span className={styles.empresaTitulo}>Desenvolvedor Front-End</span>
          <p className={styles.empresaTexto}>
            este é um aplicativo feito no NextJs que faz a requisição com a API
            Chat-gpt. Implementamos um design responsivo e algumas funções que o
            NextJs possui.
          </p>
          <ul className={styles.empresaHabilidades}>
            <Image
              src={chatImg}
              alt="Imagem de um site baseado no chatGpt, faça uma pergunta e ele responde."
              width={350}
              height={250} 
            />
            <li>NextJs</li>
          </ul>
        </div>

        <div className={styles.empresa}>
          <span className={styles.empresaAno}>2023</span>
          <h3 className={styles.empresaTitulo}>
            <a
              href="https://lista-de-tarefas-reactjs-92qk8d3iq-mauricioc08.vercel.app/"
              target="_blank"
              rel="noreferrer"
            >
              Lista de tarefas
            </a>
          </h3>
          <span className={styles.empresaTitulo}>Desenvolvedor Front-End</span>
          <p className={styles.empresaTexto}>
            Um projeto feito em Reactjs que tem a opção de cadastro de usuário e
            senha Esse projeto tem a opção de criar listas de tarefas, editar e
            excluir. Foi usado o bando de dados do FireBase como local de
            guardar as informações, como usuários e listas.
          </p>
          <ul className={styles.empresaHabilidades}>
            <Image
              src={listaImg}
              alt="Imagem de um site que cria listas de tarefas"
              width={350}
              height={250} 
            />
            <li>ReactJs</li>
          </ul>
        </div>

        <div className={styles.empresa}>
          <span className={styles.empresaAno}>2022</span>
          <h3 className={styles.empresaTitulo}>
            <a
              href="https://cep-search-react-ay5cz0723-mauricioc08.vercel.app/"
              target="_blank"
              rel="noreferrer"
            >
              Buscador_de_CEP
            </a>
          </h3>
          <span className={styles.empresaTitulo}>Desenvolvedor Front-End</span>
          <p className={styles.empresaTexto}>
            Este é um projeto onde você pode pesquisar qualquer endereço a
            partir do CEP..
            <br />
            Basta digitar o Cep desejado e pesquisar.
          </p>
          <ul className={styles.empresaHabilidades}>
            <Image 
            src={cepImg} 
            alt="Imagem de um site gerador de Qrcode" 
            width={350}
            height={250}  
            />
            <li>ReactJs</li>
          </ul>
        </div>

        <div className={styles.empresa}>
          <span className={styles.empresaAno}>2022</span>
          <h3 className={styles.empresaTitulo}>
            <a
              href="https://qrcode-generator-5f5ll540b-mauricioc08.vercel.app/"
              target="_blank"
              rel="noreferrer"
            >
              Gerador-de-Qrcode
            </a>
          </h3>
          <span className={styles.empresaTitulo}>Desenvolvedor Front-End</span>
          <p className={styles.empresaTexto}>
            Desenvolvi um Gerador de Qrcode em reactjs com a opção de baixar a
            imagem.
            <br />
            Basta digitar o link do site desejado e o Qrcode ficará disponivel.
          </p>
          <ul className={styles.empresaHabilidades}>
            <Image 
              src={qrcodeImg} 
              alt="Imagem de um site gerador de Qrcode" 
              width={350}
              height={250}  
            />
            <li>ReactJs</li>
          </ul>
        </div>

        <div className={styles.empresa}>
          <span className={styles.empresaAno}>2022</span>
          <h3 className={styles.empresaTitulo}>
            <a
              href="https://mauricioc08.github.io/api_NASA/"
              target="_blank"
              rel="noreferrer"
            >
              NASA-API
            </a>
          </h3>
          <span className={styles.empresaTitulo}>Desenvolvedor Front-End</span>
          <p className={styles.empresaTexto}>
            Desenvolvi um site onde é feito requisições de api da nasa, contendo
            fotos e descrição sobre o autor da imagem.
          </p>
          <ul className={styles.empresaHabilidades}>
            <Image 
             src={nasaImg} 
             alt="Imagem de um site de fotos da nasa" 
             width={350}
             height={250}  
             />
            <li>HTML</li>
            <li>CSS</li>
            <li>JavaScript</li>
          </ul>
        </div>

        <div className={styles.empresa}>
          <span className={styles.empresaAno}>2022</span>
          <h3 className={styles.empresaTitulo}>
            <a
              href="https://mauricioc08.github.io/chuck_jokes_API/"
              target="_blank"
              rel="noreferrer"
            >
              Jokes_chockNorris
            </a>
          </h3>
          <span className={styles.empresaTitulo}>Desenvolvedor Front-End</span>
          <p className={styles.empresaTexto}>
            Desenvolvi um site muito divertido onde é feito requisições de api
            de piadas sobre o Chuck Nurris.
          </p>
          <ul className={styles.empresaHabilidades}>
            <Image 
             src={jokeImg} 
             alt="Imagem de um site de fotos da nasa"
             width={350}
             height={250} 
            />
            <li>HTML</li>
            <li>CSS</li>
            <li>JavaScript</li>
          </ul>
        </div>

        <div className={styles.empresa}>
          <span className={styles.empresaAno}>2022</span>
          <h3 className={styles.empresaTitulo}>
            <a
              href="https://mauricioc08.github.io/gasolineVsEtanol/"
              target="_blank"
              rel="noreferrer"
            >
              GasolineVsEtanol
            </a>
          </h3>
          <span className={styles.empresaTitulo}>Desenvolvedor Front-End</span>
          <p className={styles.empresaTexto}>
            Devido a grande oscilação dos preços dos combustíveis, eu desenvolvi
            esse projeto para me ajudar a escolher o combustível ideal de acordo
            com o preço de cada um {`${'"paridade de combustivél"'}`}.<br />
            Espero que este aplicativo possa ajudar outras pessoas com o mesmo
            problema.
          </p>
          <ul className={styles.empresaHabilidades}>
            <Image
              src={combustivel}
              alt="Imagem de um site de paridade de combustível"
              width={350}
              height={250} 
            />
            <li>HTML</li>
            <li>CSS</li>
            <li>JavaScript</li>
          </ul>
        </div>

        <div className={styles.empresa}>
          <span className={styles.empresaAno}>2022</span>
          <h3 className={styles.empresaTitulo}>
            <a
              href="https://mauricioc08.github.io/bikcraft/"
              target="_blank"
              rel="noreferrer"
            >
              Bikcraft
            </a>
          </h3>
          <span className={styles.empresaTitulo}>Desenvolvedor Front-End</span>
          <p className={styles.empresaTexto}>
            No projeto Bikcraft eu trabalhei no desenvolvimento completo do
            HTML, CSS e JavaScript do site.
            <br /> É um site fictício de vendas, onde os produtos são bicicletas
            elétricas e seguros para os compradores. Além disso o site contém
            formulários de contatos e orçamentos.
          </p>
          <ul className={styles.empresaHabilidades}>
            <Image
              src={imgBikcraft}
              alt="Imagem de um site de Bicicletas a venda"
              width={350}
              height={250} 
            />
            <li>HTML</li>
            <li>CSS</li>
            <li>JavaScript</li>
          </ul>
        </div>

        <div className={styles.empresa}>
          <span className={styles.empresaAno}>2022</span>
          <h3 className={styles.empresaTitulo}>
            <a
              href="https://mauricioc08.github.io/Sitas-e-Peculiar/"
              target="_blank"
              rel="noreferrer"
            >
              Sitas&Peculiar
            </a>
          </h3>
          <span className={styles.empresaTitulo}>Desenvolvedor Front-End</span>
          <p className={styles.empresaTexto}>
            (Sitas&peculiar) tem como objetivo mostrar algumas dicas e
            informações sobre espécies, alimentação, meio ambiente, criação de
            calopsitas e muito mais... <br />
            Importante ressaltar que esse é um projeto feito totalmente do zero,
            sem qualquer base de site para copiar somente informações de
            veterinários e sites especialistas na criação de calopsitas.
          </p>
          <ul className={styles.empresaHabilidades}>
            <Image 
             src={imgSitas} 
             alt="Foto de um site sobre calopsitas" 
             width={350}
             height={250} />
            <li>HTML</li>
            <li>CSS</li>
          </ul>
        </div>

        <div className={styles.empresa}>
          <span className={styles.empresaAno}>2022</span>
          <h3 className={styles.empresaTitulo}>
            <a
              href="https://mauricioc08.github.io/clone_netflix_example/"
              target="_blank"
              rel="noreferrer"
            >
              Netflix-clone
            </a>
          </h3>
          <span className={styles.empresaTitulo}>Desenvolvedor Front-End</span>
          <p className={styles.empresaTexto}>
            Um projeto de um site simples e responsivo baseado no Layout da
            Netflix, onde você pode acessar alguns conteúdos de trailers ao
            clicar no filme, série ou conteúdo desejado.
          </p>
          <ul className={styles.empresaHabilidades}>
            <Image 
             src={imgNetf} 
             alt="Foto de um site clone da netflix" 
             width={350}
             height={250} 
             />
            <li>HTML</li>
            <li>CSS</li>
            <li>JavaScript</li>
          </ul>
        </div>

        <div className={styles.empresa}>
          <span className={styles.empresaAno}>2022</span>
          <h3 className={styles.empresaTitulo}>
            <a
              href="https://mauricioc08.github.io/Calculador-de-IMC/"
              target="_blank"
              rel="noreferrer"
            >
              {" "}
              Calculador-de-IMC
            </a>
          </h3>
          <span className={styles.empresaTitulo}>Desenvolvedor Front-End</span>
          <p className={styles.empresaTexto}>
            Um calculador de imc simples, onde você pode calcular se está a
            acima, a baixo ou no peso ideal segundo o IMC (Índice de Massa
            Corporal) pelo seu peso e altura.
          </p>
          <ul className={styles.empresaHabilidades}>
            <Image 
             src={imgCalc} 
             alt="Foto de um site sobre calcular imc"
             width={350}
             height={250} 
            />
            <li>HTML</li>
            <li>CSS</li>
            <li>JavaScript</li>
          </ul>
        </div>

        <div className={styles.empresa}>
          <span className={styles.empresaAno}>2022</span>
          <h3 className={styles.empresaTitulo}>
            <a
              href="https://mauricioc08.github.io/page-flexbox-origamid/"
              target="_blank"
              rel="noreferrer"
            >
              Page-flexbox-origamid
            </a>
          </h3>
          <span className={styles.empresaTitulo}>Desenvolvedor Front-End</span>
          <p className={styles.empresaTexto}>
            Uma pagina feita no curso de front-end da Origamid com layout
            responsivo toda feita usando flexbox.
          </p>
          <ul className={styles.empresaHabilidades}>
            <Image
              src={imgFlex}
              alt="Foto de um site colorido usando elementos do flexbox"
              width={350}
              height={250} 
            />
            <li>HTML</li>
            <li>CSS</li>
          </ul>
        </div>
      </div>
    </section>
  );
}
