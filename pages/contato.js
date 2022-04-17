import React from "react";
import Image from "next/image";
import Footer from "../components/Footer";
import Header from "../components/Header";
import ContactComponent from "../components/Contact";
import pagesStyles from "../styles/pages.module.css";

const Contact = () => {
  return (
    <>
      <Header />
      <div className={`${pagesStyles.img} ${pagesStyles.noImg}`}>
        <Image
          width={2560}
          height={840}
          src="/onda2.png"
          alt="Imagem de onda"
          style={{ opacity: 1 }}
        />
      </div>
      <ContactComponent></ContactComponent>
      <Footer />
    </>
  );
};

export default Contact;
