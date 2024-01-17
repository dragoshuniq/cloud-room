import styles from "../style";

const CTA = () => (
  <section
    className={`${styles.flexCenter} ${styles.marginY} ${styles.padding} sm:flex-row flex-col bg-black-gradient-2 rounded-[20px] box-shadow`}
  >
    <div className="flex-1 flex flex-col">
      <h2 className={styles.heading2}>Incepe jocul acum!</h2>
      <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
        Creșteți nivelul, jucați inteligent, creșteți oriunde
      </p>
    </div>

    <div
      className={`${styles.flexCenter} sm:ml-10 ml-0 sm:mt-0 mt-10`}
    >
      <a
        href="https://t.me/cloud_rooom_bot"
        target="_blank"
        rel="noreferrer"
        className={`select-none	mt-10 py-4 px-6 font-poppins font-medium text-[18px] text-primary bg-blue-gradient rounded-[10px] outline-none `}
      >
        Începe acum
      </a>
    </div>
  </section>
);

export default CTA;
