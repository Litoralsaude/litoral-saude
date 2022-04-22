import Head from "next/head";
import Image from "next/image";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Presentation from "../components/HomePage/Presentation";
import WhoWeAre from "../components/HomePage/WhoWeAre";
import Products from "../components/HomePage/Products";
import Testimonials from "../components/Testimonials";
import styles from "../styles/pages.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <Header />
      <main>
        <div className={styles.img}>
          <Image
            width={2560}
            height={840}
            src="/onda.png"
            alt="Imagem de onda"
          />
        </div>
        <Presentation />
        <WhoWeAre />
        <Products />
        <Testimonials />
      </main>
      <Footer />
    </div>
  );
}
