import Head from "next/head";
import Image from "next/image";
import styles from "../styles/pages.module.css";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Presentation from "../components/HomePage/Presentation";
import WhoWeAre from "../components/HomePage/WhoWeAre";
import Products from "../components/HomePage/Products";
import Testimonials from "../components/Testimonials";

export default function Home() {
  return (
    <div className={styles.container}>
      <Header />
      <div className={styles.img}>
        <Image
          width={2560}
          height={840}
          src="/onda2.png"
          alt="Imagem de onda"
        />
      </div>
      <Presentation />
      <WhoWeAre />
      <Products />
      <Testimonials />
      <Footer />
    </div>
  );
}
