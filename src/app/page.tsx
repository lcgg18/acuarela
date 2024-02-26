import Image from "next/image";
import NextLink from "next/link";
import styles from "../../styles/Home.module.css";

export default function Home() {
  return (
  
      <main>
        <h1 className={styles.title}>Bienvenidos a la APP del Conjunto</h1>
        <h2 className={styles.subtitle}>
          Metodos de pago de la Administración
        </h2>
        <div className={styles.imagine}>
          <NextLink
            href="https://www.psepagos.co/PSEHostingUI/ShowTicketOffice.aspx?ID=6615"
            rel="noopener noreferrer"
            target="_blank"
            passHref
          >
            <Image src="/PSE.png" alt="Pago por PSE" width={150} height={150} />
          </NextLink>
        </div>
        <div className={styles.imagine}>
          
            <Image src="/QR.png" alt="Codigo QR para Pago" width={250} height={300} />
        </div>

        <h2 className={styles.subtitle}>
          Metodos de contacto con la Administración
        </h2>
        <div className={styles.imagine}>
          <NextLink
            href="https://wa.me/573105192544?text=Hola%20!"
            rel="noopener noreferrer"
            target="_blank"
            passHref
          >
            <Image src="/WA.png" alt="WhatsApp" width={100} height={100} />
          </NextLink>
        </div>
        <div className={styles.imagine}>
          <NextLink
            href="mailto:conjuntocerradoacuarela@hotmail.com"
            rel="noopener noreferrer"
            target="_blank"
            passHref
          >
            <Image
              src="/CE.png"
              alt="conjuntocerradoacuarela@hotmail.com"
              width={100}
              height={100}
            />
          </NextLink>
        </div>
        {/* <br />
        <h2 className={styles.subtitle}>Solicitud de Garantia Constructora</h2>
        <div className={styles.imagine}>
          <NextLink
            href="https://orbeconstrucciones.com.co/postventa/"
            rel="noopener noreferrer"
            target="_blank"
            passHref
          >
            <Image src="/PV.png" alt="Garantía" width={100} height={100} />
          </NextLink>
        </div> */}
      </main>
  );
}
