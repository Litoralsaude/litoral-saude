import React from "react";
import Link from "next/link";
import golbalStyles from "../../../styles/global.module.css";
import headerStyles from "../styles.module.css";

const Li = ({ title, href }) => (
  <li className={`${golbalStyles.h3} ${headerStyles.item}`}>
    <Link href={href}>
      <a>{title}</a>
    </Link>
  </li>
);

const Navigation = ({ styles, navClassName }) => {
  return (
    <nav className={navClassName}>
      <ul className={styles.list}>
        <Li title="Quem Somos" href={"/"} />
        <Li title="Produtos" href={"/"} />
        <Li title="Depoimentos" href={"/"} />
        <Li title="Contato" href={"/"} />
      </ul>
    </nav>
  );
};

export default Navigation;
