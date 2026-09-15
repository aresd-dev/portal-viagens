import CardDestino from "@/components/CardDestino";
import { destinos } from "@/data/destinos";
import styles from "./page.module.css";

export default function Destinos() {
  return (
    <section>
      <h1 className={styles.title}>Destinos</h1>
      <div className={styles.grid}>
        {destinos.map((destino) => (
          <CardDestino key={destino.id} destino={destino} />
        ))}
      </div>
    </section>
  );
}