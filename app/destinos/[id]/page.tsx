import { notFound } from "next/navigation";
import Image from "next/image";
import { destinos } from "@/data/destinos";
import styles from "./page.module.css";

interface DestinoPageProps {
  params: Promise<{ id: string }>;
}

export default async function DestinoPage({ params }: DestinoPageProps) {
  const { id } = await params;
  const destino = destinos.find((item) => item.id === id);

  if (!destino) {
    notFound();
  }

  return (
    <article className={styles.article}>
      <div className={styles.imagemWrapper}>
        <Image
          src={destino.imagem}
          alt={destino.nome}
          fill
          sizes="(max-width: 700px) 100vw, 700px"
          className={styles.imagem}
          priority
        />
      </div>
      <h1 className={styles.nome}>{destino.nome}</h1>
      <p className={styles.descricao}>{destino.descricao}</p>
    </article>
  );
}