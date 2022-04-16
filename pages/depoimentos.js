import React from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Testimonial from "../components/Testimonials/Testimonial";
import { testimonials } from "../components/Testimonials/data";
import styles from "../styles/depoimentos.module.css";
import globalStyles from "../styles/global.module.css";

const Depoimentos = () => {
  return (
    <>
      <Header />
      <div className={`${styles.container} container`}>
        <h1 className={globalStyles.h2}>Depoimentos de clientes</h1>
        {testimonials.map((item) => (
          <Testimonial {...item} />
        ))}
      </div>
      <Footer />
    </>
  );
};

export default Depoimentos;
