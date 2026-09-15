import Link from "next/link";
import styles from "./page.module.css";

export default function Home() {
  return (
    <section className={styles.hero}>
      <h1 className={styles.title}>Explore o Brasil com a gente</h1>
      <p className={styles.subtitle}>
        Reunimos destinos turísticos incríveis para você planejar sua
        próxima viagem, com informações e fotos de cada lugar.
      </p>
      <Link href="/destinos" className={styles.cta}>
        Ver destinos
      </Link>
    </section>
  );
}