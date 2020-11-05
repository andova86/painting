import Head from "next/head";
import styles from "../styles/Home.module.css";
import Image from "next/image";

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
          Empezamos el desarrollo de la página de pinturas
        </p>

        <div className={styles.grid}>
       

        

          <a
            href="https://github.com/vercel/next.js/tree/master/examples"
            className={styles.card}
          >
            <h3>Palmeras &rarr;</h3>
            <Image
              src="/pint.jpg"
              alt="Picture of the author"
              width={500}
              height={500}
            />
          </a>

          <a
            href="https://github.com/vercel/next.js/tree/master/examples"
            className={styles.card}
          >
            <h3>Sol y Mar &rarr;</h3>
            <Image
              src="/pint2.jpg"
              alt="Picture of the author"
              width={500}
              height={500}
            />
          </a>

          <a
            href="https://github.com/vercel/next.js/tree/master/examples"
            className={styles.card}
          >
            <h3>Arbol solitario &rarr;</h3>
            <Image
              src="/pint3.jpg"
              alt="Picture of the author"
              width={500}
              height={500}
            />
          </a>

          <a
            href="https://github.com/vercel/next.js/tree/master/examples"
            className={styles.card}
          >
            <h3>Reflejos en el Mar &rarr;</h3>
            <Image
              src="/pint4.jpg"
              alt="Picture of the author"
              width={500}
              height={500}
            />
          </a>

      

        </div>
      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{" "}
          <img
            src="/team.svg"
            alt="DevTeam Logo"
            className={styles.logo}
            style={{ paddingRight: "5px" }}
          />
          2020
        </a>
      </footer>
    </div>
  );
}
