import Head from "next/head";
import styles from "../styles/Home.module.scss";
import Link from "next/link";
import Image from "next/image";
import Navbar from "../components/Navbar/Navbar";


export default function Home() {
  return (
    <>
      <Head>
     <title>Elit Dynamon | Articles for geeks</title>
      </Head>
      <Navbar/>
          <main className={styles.homePage}>
            <section className={styles.homePageContent}>
              <div className={styles.home}>
                hello
              </div>
              <div className={styles.home}>
                hello world
              </div>
              <footer>
                hello world
              </footer>
            </section>
          </main>
    </>
  );
}
