import React from "react";
import Image from "next/image";
import Link from "next/link";
import Item from "./Item";
import styles from "./styles.module.css";
import itemStyles from "./Item/styles.module.css";
import globalStyles from "../../styles/global.module.css";

const Contact = () => {
  return (
    <main className={`${styles.container} container-fluid`}>
      <div className={` container`}>
        <section>
          <h1 className={globalStyles.h2}>Contato</h1>
          <div className={styles.flexContainer}>
            <div className={styles.items}>
              <div>
                <p className={`${globalStyles.h3} ${itemStyles.h3}`}>
                  Endereço:
                </p>{" "}
                <p>R. Garibaldi, 366 - Centro, Osório - RS, </p>
                <p>CEP: 95520-000</p>
              </div>
              <div className={styles.media}>
                <Image
                  width={17}
                  height={17}
                  src="/face.svg"
                  alt="Imagem de onda"
                  style={{ opacity: 1 }}
                />
                <Link href={"https://www.facebook.com"}>
                  <a target="_blank">Facebook</a>
                </Link>
              </div>
              <div className={styles.media}>
                <Image
                  width={17}
                  height={17}
                  src="/insta.svg"
                  alt="Imagem de onda"
                  style={{ opacity: 1 }}
                />
                <Link href={"https://www.instagram.com"}>
                  <a target="_blank">Instagram</a>
                </Link>
              </div>
            </div>
            <div className={styles.items}>
              <Item title="Telefone" description="(51) 3601-0063" />
              <Item
                title="E-mail"
                description="atendimento@litoralsaude.com.br"
              />
              <Item
                title="Vendas varejo:"
                description="atendimento@litoralsaude.com.br"
              />
              <Item
                title="Vendas órgãos Públicos"
                description="atendimento@litoralsaude.com.br"
              />
              <Item title="SAC" description="atendimento@litoralsaude.com.br" />
              <Item
                title="Financeiro"
                description="atendimento@litoralsaude.com.br"
              />
            </div>
          </div>
        </section>
      </div>
    </main>
  );
};

export default Contact;
