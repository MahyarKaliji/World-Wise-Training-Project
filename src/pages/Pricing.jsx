import PageNav from "../components/PageNav";
import styles from "./Product.module.css";

export default function Pricing() {
  return (
    <main className={styles.product}>
      <PageNav />

      <section>
        <h1>Pricing</h1>
      </section>
    </main>
  );
}
