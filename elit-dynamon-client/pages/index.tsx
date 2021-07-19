import Head from "next/head";
import styles from "../styles/Home.module.scss";
import Link from "next/link";
import Image from "next/image";


export default function Home() {
  return (
    <>
      <Head>
     <title>Elit Dynamon | Articles for geeks</title>
      </Head>
          <main className={styles.homePage}>
            <nav className={styles.sideNavbar}>
              <div className={styles.mainContentLinks}>
                <div className="logo">
                  <Link href="/">
                    <Image  height={40}  width={90}  src="/Elit Dynamon-SVG.svg" alt="" />
                  </Link>
                </div>
                <div className={styles.allLinks}>
                  <div className="homeLink">
                    <Link href="/home">
                     <h2>Home</h2>
                    </Link>
                  </div>
                  <div className="ArticlesLink">
                <Link href="/blog">
                  <h2>Articles</h2>
                    </Link>
                  </div>
                  <div className="AboutUsLink">
                    <Link href="/aboutus">
                      <h2>About us</h2>
                    </Link>
                  </div>
                  <div className="contactLink">
                    <Link href="/contactUs">
                      <h2>Contact US</h2>
                    </Link>
                  </div>
                </div>
              </div>
              <div className={styles.socialMediaLinks}>

              </div>
            </nav>
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
