import { qrcode } from "../assets";
import { features } from "../constants";
import styles, { layout } from "../style";
const FeatureCard = ({ icon, title, content, index }) => (
  <div
    className={`flex flex-row p-6 rounded-[20px] ${
      index !== features.length - 1 ? "mb-6" : "mb-0"
    } feature-card`}
  >
    <div
      className={`w-[64px] h-[64px] rounded-full ${styles.flexCenter} bg-dimBlue`}
    >
      <img
        src={icon}
        alt="star"
        className="w-[50%] h-[50%] object-contain"
      />
    </div>
    <div className="flex-1 flex flex-col ml-3">
      <h4 className="font-poppins font-semibold text-white text-[18px] leading-[23.4px] mb-1">
        {title}
      </h4>
      <p className="font-poppins font-normal text-dimWhite text-[16px] leading-[24px]">
        {content}
      </p>
    </div>
  </div>
);

const Reservations = () => {
  return (
    <section id="reservations" className={layout.section}>
      <div className={layout.sectionInfo}>
        <h2 className={styles.heading2}>
          Rezervă Locul Tău Rapid
          <br className="sm:block hidden" />
        </h2>
        <div className="flex justify-center items-center gap-10 mt-10 flex-col md:flex-row w-full">
          <a
            href="https://t.me/cloud_rooom_bot"
            target="_blank"
            rel="noreferrer"
            className="w-1/2 max-w-[470px]"
          >
            <img
              src={qrcode}
              className="w-full h-full md:max-w-[470px] rounded-3xl shadow-2xl"
            />
          </a>
          <div className="flex flex-col">
            <p className={`${styles.paragraph} max-w-[470px]`}>
             Bucură-te de o experiență de gaming fără griji! Cu botul nostru PlayStation pentru rezervări, economisești timp și obții transparență totală în privința disponibilității și orarului în sala noastră.:
            </p>
            <div className="flex items-center justify-center">
              <a
                href="https://t.me/cloud_rooom_bot"
                target="_blank"
                rel="noreferrer"
                className={`select-none	mt-10 py-4 px-6 font-poppins font-medium text-[18px] text-primary bg-blue-gradient rounded-[10px] outline-none `}
              >
                Începe acum
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className={`${layout.sectionImg} flex-col`}>
        {features.map((feature, index) => (
          <FeatureCard key={feature.id} {...feature} index={index} />
        ))}
      </div>
    </section>
  );
};

export default Reservations;
