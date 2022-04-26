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
      <div className="container opacityToLeftTransition">
        <section>
          <h1 className={globalStyles.h2}>Contato</h1>
          <div className={styles.flexContainer}>
            <picture className={styles.picture}>
              <Image
                width={566}
                height={376}
                src="/osorio.jpg"
                alt="Icone facebook"
                style={{ opacity: 1 }}
              />
            </picture>
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
                  alt="Icone facebook"
                  style={{ opacity: 1 }}
                />
                <Link href="https://www.facebook.com/people/Litoral-Sa%C3%BAde/100004638612180/">
                  <a target="_blank">Facebook</a>
                </Link>
              </div>
              <div className={styles.media}>
                <Image
                  width={17}
                  height={17}
                  src="/insta.svg"
                  alt="Icone instagram"
                  style={{ opacity: 1 }}
                />
                <Link href="https://www.instagram.com/litoral.saude/">
                  <a target="_blank">Instagram</a>
                </Link>
              </div>
            </div>
            <div className={styles.items}>
              <Item title="Telefone" description="+55 (51) 3601-0062/0063" />
              <Item
                title="E-mail"
                description="atendimento@litoralsaude.com.br"
              />
              <Item
                title="Vendas varejo"
                description="vendas@litoralsaude.com.br"
              />
              <Item
                title="Vendas órgãos Públicos"
                description="licitacao@litoralsaude.com.br"
              />
              <Item
                title="Serviço de Atendimento ao Consumidor"
                description="sac@litoralsaude.com.br"
              />
              <Item
                title="Financeiro"
                description="faturamento@litoralsaude.com.br"
              />
            </div>
          </div>
        </section>
      </div>
    </main>
  );
};

export default Contact;
