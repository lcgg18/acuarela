import Image from "next/image";
import styles from "../../../styles/Home.module.css";

export default function Qr() {
  return (
    <main>
      <h1 className={styles.title}>Bienvenidos a la APP del Conjunto</h1>
      <h2 className={styles.subtitle}>
        Metodos de pago de la Administración por QR
      </h2>
      <div className={styles.imagine}>
        <Image
          src="/QR.png"
          alt="Codigo QR para Pago"
          width={500}
          height={600}
        />
      </div>
    </main>
  );
}
