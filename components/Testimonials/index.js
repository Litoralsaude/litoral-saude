import React from "react";
import Slider from "react-slick";
import Testimonial from "./Testimonial";
import styles from "./styles.module.css";
import globalStyles from "../../styles/global.module.css";
import { testimonials } from "./data";

const CarouselItem = ({ item }) => {
  <div key={item.user} className={styles.testimonialsWrapper}>
    <Testimonial {...item} />
  </div>;
};

const Testimonials = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <section className={`${styles.container} container`}>
      <header>
        <p className={styles.clients}>Nossos clientes</p>
        <h2 className={`${globalStyles.h1} ${styles.h2}`}>Depoimentos</h2>
      </header>
      <div>
        <Slider {...settings}>
          {testimonials.map((item) => (
            <div key={item.user}>
              <div className={styles.testimonialsWrapper}>
                <Testimonial {...item} />
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
};

export default Testimonials;
