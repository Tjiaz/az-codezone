import Image from "next/image";
import styles from "./page.module.css";
import Hero from "public/hero3.svg";
import Button from "@/components/Button/Button";

const Home = () => {
  return (
    <div className={styles.container}>
      <div className={styles.item}>
        <h1 className={styles.title}>
          Enhanced aesthetics for your digital products.
        </h1>
        <p className={styles.desc}>
          Transforming your concept into actuality by uniting teams from the
          worldwide technology sector.
        </p>
        <Button url="/portfolio" text="See Projects" />
      </div>
      <div className={styles.item}>
        <Image src={Hero} alt="" className={styles.img} />
      </div>
    </div>
  );
};

export default Home;
