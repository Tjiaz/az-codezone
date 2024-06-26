import React from "react";
import styles from "./footer.module.css";
import Image from "next/image";

const Footer = () => {
  const date = new Date().getFullYear()
  return (
    <div className={styles.container}>
      <div>©{date} Az-codezone. All rights reserved.</div>
      <div className={styles.social}>
        <Image
          src="/1.png"
          width={15}
          height={15}
          className={styles.icon}
          alt="LinkedIn account"
        />
        <Image
          src="/2.png"
          width={15}
          height={15}
          className={styles.icon}
          alt="Github"
        />
        <Image
          src="/3.png"
          width={15}
          height={15}
          className={styles.icon}
          alt="Twitter"
        />
        <Image
          src="/4.png"
          width={15}
          height={15}
          className={styles.icon}
          alt="Youtube"
        />
      </div>
    </div>
  );
};

export default Footer;
