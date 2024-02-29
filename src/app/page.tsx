import Image from "next/image";
import NextLink from "next/link";
import styles from "../../styles/Home.module.css";

export default function Home() {
  return (
    <main>
      <h1 className={styles.title}>Bienvenidos a la APP del Conjunto</h1>
      <h2 className={styles.subtitle}>Metodos de pago de la Administración</h2>
      <div className={styles.imagine}>
        <Image
          src="/CB.png"
          alt="Convenio corresponsal bancario"
          width={220}
          height={220}
        />
      </div>
      <div className={styles.imagine}>
        <NextLink
          href="https://www.psepagos.co/PSEHostingUI/ShowTicketOffice.aspx?ID=6615"
          rel="noopener noreferrer"
          target="_blank"
          passHref
        >
          <Image
            src="/PSETOUCH.png"
            alt="Pago por PSE"
            width={220}
            height={220}
          />
        </NextLink>
      </div>
      <div className={styles.imagine}>
        <NextLink href="/qr" rel="noopener noreferrer" target="_blank" passHref>
          <Image
            src="/QRTOUCH.png"
            alt="Codigo QR para Pago"
            width={220}
            height={220}
          />
        </NextLink>
      </div>
      <div className={styles.imagine}>
        <NextLink
          href="/CODIFICACION BANCOLOMBIA.pdf"
          rel="noopener noreferrer"
          target="_blank"
          passHref
        >
          <Image
            src="/REFTOUCH.png"
            alt="Referencia para Pago"
            width={220}
            height={220}
          />
        </NextLink>
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
    </main>
  );
}
