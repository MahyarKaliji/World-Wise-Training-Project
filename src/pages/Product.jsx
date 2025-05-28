import PageNav from "../components/PageNav";
import styles from "./Product.module.css";

export default function Product() {
  return (
    <main className={styles.product}>
      <PageNav />

      <section>
        <img
          src="img-1.jpg"
          alt="person with dog overlooking mountain with sunset"
        />
        <div>
          <h2>About WorldWide.</h2>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eius ipsum
            velit error sit perspiciatis aliquid itaque quasi iusto quas illum,
            corrupti dolore officiis maiores, sequi ab rem eaque et aperiam!
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos, omnis
            mollitia incidunt possimus delectus, molestias, natus facilis
            maiores nam qui ab corrupti? Repudiandae fugiat eligendi magni
            pariatur accusantium illum placeat.
          </p>
        </div>
      </section>
    </main>
  );
}
