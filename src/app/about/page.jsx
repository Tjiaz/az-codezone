import styles from "./page.module.css";
import Image from "next/image";
import Button from "@/components/Button/Button";

const About = () => {
  return (
    <div className={styles.container}>
      <div className={styles.imgContainer}>
        <Image
          src="https://images.pexels.com/photos/3194521/pexels-photo-3194521.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
          fill={true}
          alt=""
          className={styles.img}
        />
        <div className={styles.imgText}>
          <h1 className={styles.imgTitle}>Storytellers in the digital realm</h1>
          <h2 className={styles.imgDesc}>
            Creating exceptional digital experiences that consistently win
            awards
          </h2>
        </div>
      </div>
      <div className={styles.textContainer}>
        <div className={styles.item}>
          <h1 className={styles.title}>Who Are We?</h1>
          <p className={styles.desc}>
            Welcome to Azcodezone your one-stop destination for cutting-edge
            website development, comprehensive machine learning training, and
            robust testing of AI models. At Azcodezone, we are passionate about
            crafting exceptional digital experiences that engage, captivate, and
            drive results. Our team of skilled developers harnesses the latest
            technologies and industry best practices to create stunning websites
            that seamlessly blend aesthetics with functionality. Whether you
            need a sleek corporate website, an e-commerce platform, or a dynamic
            web application, we have the expertise to bring your vision to life.
            In addition to our website development prowess, we specialize in
            machine learning, providing top-notch training and testing services.
            Our dedicated team of data scientists and AI experts collaborates
            closely with clients to understand their unique requirements and
            tailor solutions that leverage the power of machine learning.
            <br />
            <br />
            From developing custom models to optimizing existing ones, we offer
            a comprehensive suite of services that empower businesses to unlock
            the true potential of their data. What sets us apart is our
            commitment to delivering exceptional quality and ensuring the utmost
            satisfaction of our clients. We prioritize open communication,
            transparency, and timely project delivery, guaranteeing that your
            website or machine learning project is executed flawlessly from
            start to finish. Whether you are a startup looking to establish your
            online presence or an enterprise seeking to leverage the potential
            of artificial intelligence, Azcodezone is your trusted partner. Join
            us on this exciting journey, and lets create remarkable digital
            experiences and shape the future together. Contact us today to learn
            more about how we can assist you in achieving your digital
            ambitions.
          </p>
        </div>
        <div className={styles.item}>
          <h1 className={styles.title}>What We Do?</h1>
          <p className={styles.desc}>
            Our comprehensive range of services caters to businesses of all
            sizes, empowering them to thrive in the digital landscape. Website
            Development: Our team of talented developers possesses a deep
            understanding of the latest technologies and industry trends. We
            design and develop stunning websites that not only captivate users
            but also drive tangible business outcomes. Whether you need a
            visually appealing corporate website, a feature-rich e-commerce
            platform, or a dynamic web application, we have the expertise to
            bring your ideas to life. We prioritize user experience,
            responsiveness, and seamless functionality to ensure your online
            presence stands out from the competition. Machine Learning Training:
            Unlock the potential of your data with our machine learning training
            services. Our experienced data scientists and AI experts work
            closely with your team to understand your specific needs and design
            custom machine learning models tailored to your business goals. From
            natural language processing to computer vision and predictive
            analytics, we cover a wide range of applications. Through hands-on
            training, we equip your team with the knowledge and skills required
            to leverage machine learning effectively, enabling you to make
            data-driven decisions and gain a competitive edge. Machine Learning
            Testing: Ensuring the accuracy, reliability, and performance of
            machine learning models is essential for their successful
            implementation. Our dedicated testing team conducts rigorous
            evaluations to validate and optimize your AI models. We employ a
            wide array of techniques, including data validation, model
            performance analysis, and stress testing, to ensure that your models
            deliver precise results, even in real-world scenarios. By
            identifying and resolving potential issues early on, we help you
            achieve robust and dependable machine learning solutions. Consulting
            and Strategy: At Azcodezone, we understand that every business has
            unique challenges and requirements. Thats why we offer personalized
            consulting and strategic guidance to help you make informed
            decisions. Our experienced consultants work closely with you to
            assess your needs, define clear objectives, and create a roadmap for
            success. Whether you need assistance with technology selection,
            project planning, or digital transformation, we provide expert
            advice and actionable strategies to drive your business forward.
            <br />
            <br /> - Dynamic Websites
            <br />
            <br /> - Machine Learning Training
            <br />
            <br /> - Mobile Apps
            <br />
            <br /> - Consulting and Strategy
          </p>
          <Button url="/contact" text="Contact" />
        </div>
      </div>
    </div>
  );
};

export default About;
