import imagen from '../../public/img/nosotros.jpg'
import styles from '~/styles/nosotros.css'

export const meta = () => {
    return {
        title: 'GuitarLA - Sobre Nosotros'
    }
}

export const links = () => {
    return [
      {
        rel: 'stylesheet',
        href: styles
      },
      {
        rel: 'preload',
        href: imagen,
        as: 'image'
      }
    ]
} 

const Nosotros = () => {
  return (
    <main className="contenedor nosotros">
        <h2 className="heading">Nosotros</h2>

        <div className="contenido">
            <img src={ imagen } alt="Imagen sobre nosoteos" />

            <div>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent vestibulum eros ut est semper ornare. Vivamus condimentum, quam sit amet congue dapibus, erat justo fringilla orci, eu vehicula nibh risus non velit. Cras feugiat fringilla urna, at eleifend nulla suscipit sed. Etiam aliquet malesuada diam nec malesuada. Nam ut lectus urna.</p>
              
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent vestibulum eros ut est semper ornare. Vivamus condimentum, quam sit amet congue dapibus, erat justo fringilla orci, eu vehicula nibh risus non velit. Cras feugiat fringilla urna, at eleifend nulla suscipit sed. Etiam aliquet malesuada diam nec malesuada. Nam ut lectus urna.</p>
            </div>
        </div>
    </main>
  )
}

export default Nosotros;