import Link from "next/link";
import styles from "./Layout.module.css";

interface LayoutProps {
  children: React.ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  return (
    <div className={styles.wrapper}>
      <header className={styles.header}>
        <span className={styles.logo}>Portal de Viagens</span>
        <nav className={styles.nav}>
          <Link href="/" className={styles.link}>
            Início
          </Link>
          <Link href="/destinos" className={styles.link}>
            Destinos
          </Link>
        </nav>
      </header>

      <main className={styles.main}>{children}</main>

      <footer className={styles.footer}>
        <p>
          © {new Date().getFullYear()} Portal de Viagens. Todos os direitos
          reservados.
        </p>
      </footer>
    </div>
  );
}