import { Article } from "./Article"
import img1 from '../assets/images/A1.jpg'
import img2 from '../assets/images/A2.jpg'
import img3 from '../assets/images/A3.jpg'

export const ArticlesContainer = () => {
  return (
    <section className="mt-6 md:flex">
        <Article 
            img={img1}
            number='01'
            title='¿Qué llantas usar para un menor consumo?'
            text='Te recomendamos las mejores llantas y rines para tu primer auto.'
        />
        <Article 
            img={img2}
            number='02'
            title='¿Por qué no usar una matrícula personalizada?'
            text='Te decimos el porqué no usar una.'
        />
        <Article 
            img={img3}
            number='03'
            title='¿Los simuladores ayudan a un mejor manejo?'
            text='Los simuladores de conducción ayudan a la hora de manejar.'
        />
    </section>
  )
}
