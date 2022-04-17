import React from "react";
import styles from "./styles.module.css";
import globalStyles from "../../../styles/global.module.css";

const Item = ({ title, description }) => (
  <p>
    <span className={`${globalStyles.h3} ${styles.h3}`}>{title}:</span>{" "}
    <span className={globalStyles.text}>{description}</span>
  </p>
);

export default Item;
