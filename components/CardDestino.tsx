import Link from "next/link";
import Image from "next/image";
import type { Destino } from "@/data/destinos";
import styles from "./CardDestino.module.css";

interface CardDestinoProps {
  destino: Destino;
}

export default function CardDestino({ destino }: CardDestinoProps) {
  return (
    <Link href={`/destinos/${destino.id}`} className={styles.card}>
      <div className={styles.imagemWrapper}>
        <Image
          src={destino.imagem}
          alt={destino.nome}
          fill
          sizes="(max-width: 600px) 100vw, 220px"
          className={styles.imagem}
        />
      </div>
      <h3 className={styles.nome}>{destino.nome}</h3>
    </Link>
  );
}