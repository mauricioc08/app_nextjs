import Image from 'next/image'
import MinhaFoto from '../public/img/minha_foto.jpg'

export default function Main(props) {
  return (
    
    <main className="introducao"> 
      <Image src={MinhaFoto} alt="foto perfil"/>
      <div>
        <h1>Desenvolvedor <br/> Front-End</h1>
        <p>Localizado em Guarulhos-SP</p>
      </div>
    </main>
    
  )
}
