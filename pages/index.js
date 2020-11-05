import Head from 'next/head'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Pinturas de Martha</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Ya empezamos <a href="https://nextjs.org">Churi</a>
        </h1>

        <p className={styles.description}>
          Empezamos el desarollo de la pagina de pinturas
          
        </p>

        <div className={styles.grid}>
          <a href="https://nextjs.org/docs" className={styles.card}>
            <h3>Pinturas &rarr;</h3>
            <p>La pintura es el arte de la representación gráfica utilizando pigmentos mezclados con otras sustancias aglutinantes orgánicas o sintéticas. Aqui encontraras todo los detalles de la autora</p>
          </a>

          <a href="https://nextjs.org/learn" className={styles.card}>
            <h3>Acerca de  &rarr;</h3>
            <p>Toda la informacion referida a la autora de las pinturas mostradas en nuestro sistio</p>
          </a>

          <a
            href="https://github.com/vercel/next.js/tree/master/examples"
            className={styles.card}
          >
            <h3>Galeria &rarr;</h3>
            <p>La pintura conjuga elementos de la representación plástica como las formas, los colores, las texturas, la armonía, el equilibrio, la perspectiva, la luz y el movimiento. Aquí descubriras las mejores pinturas creadas por la autora en una galeria de fotos</p>
          </a>

          <a
            href="https://vercel.com/import?filter=next.js&utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
            className={styles.card}
          >
            <h3>Contacto &rarr;</h3>
            <p>
              Mediante este enlace podraas contactar con la autora de las pinturas.
            </p>
          </a>
        </div>
      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <img src="/team.svg" alt="DevTeam Logo" className={styles.logo} />
        </a>
      </footer>
    </div>
  )
}
