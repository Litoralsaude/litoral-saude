import React from "react";
import Link from "next/link";
import Image from "next/image";
import styles from "./styles.module.css";
import globalStyles from "../../../styles/global.module.css";

const Testimonial = ({ description, user, photo }) => {
  return (
    <div className={styles.container}>
      <div className={`${styles.imgWrapper} d-none d-lg-block d-xl-block`}>
        <Image
          className={styles.circle}
          width={220}
          height={220}
          src={photo}
          alt="Foto do cliente que fez o depoimento"
        />
      </div>
      <div className={styles.contentWrapper}>
        <p className={`${globalStyles.text} ${styles.text}`}>{description}</p>
        <p className={styles.client}>{user}</p>
        <Link href="/depoimentos">
          <a className={globalStyles.link}>Ver tudo</a>
        </Link>
      </div>
    </div>
  );
};

export default Testimonial;
