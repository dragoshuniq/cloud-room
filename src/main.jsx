import styles from "./style";
import {
  CTA,
  Footer,
  Navbar,
  Stats,
  Hero,
  Table,
  Reservations,
  Clients,
} from "./components";

const Main = () => (
  <div className="bg-primary w-full overflow-hidden">
    <div className={`${styles.paddingX} ${styles.flexCenter}`}>
      <div className={`${styles.boxWidth}`}>
        <Navbar />
      </div>
    </div>

    <div className={`bg-primary ${styles.flexStart}`}>
      <div className={`${styles.boxWidth}`}>
        <Hero />
      </div>
    </div>

    <div
      className={`bg-primary ${styles.paddingX} ${styles.flexCenter}`}
    >
      <div className={`${styles.boxWidth}`}>
        <Stats />
        <Reservations />
        <Table />
        <Clients />
        <CTA />
        <Footer />
      </div>
    </div>
  </div>
);

export default Main;
