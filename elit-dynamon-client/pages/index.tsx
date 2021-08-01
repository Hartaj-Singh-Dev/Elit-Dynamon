import Head from "next/head";
import styles from "../styles/Home.module.scss";
import Link from "next/link";
import Image from "next/image";
import Navbar from "../components/Navbar/Navbar";
import HomeFirstPage from "../components/home/HomeFirstPage";
import {Element} from "react-scroll";
import About from "../components/About/About";
import Footer from "../components/Footer/Footer"

export default function Home() {
  return (
    <>
      <Head>
     <title>Elit Dynamon | Articles for geeks</title>
      </Head>
      <Navbar whichActive={"home"}/>
          <main className={styles.homePage}>
            <section className={styles.homePageContent}>
              <HomeFirstPage/>
            </section>
            <section className={styles.aboutPageContent}>
              <Element name="aboutSection" className='aboutSection'>
                <About/>
              </Element>
            </section>
          </main>
          <footer>
            <Footer/>
          </footer>
    </>
  );
}
