import styles, { layout } from "../style";
import clsx from "clsx";
import Brackets from "./Brackets";
import { Link } from "react-router-dom";

const Table = () => {
  return (
    <section id="table" className={clsx(layout.sectionReverse)}>
      <div className={clsx(layout.sectionImgReverse, "flex-col")}>
        <div className="absolute z-[0] left-0 top-0 w-full h-full rounded-full white__gradient" />
        <div className="absolute z-[0] left-0 bottom-0 w-full h-full rounded-full blue__gradient" />
        <Link
          className={clsx(styles.heading2, "mb-5 z-[1]")}
          to="/tournament"
        >
          Turneu
        </Link>
        <div className="rounded-2xl overflow-hidden min-h-[450px] border-2 border-[#33bbcf] shadow-lg	w-full flex items-center justify-center">
          <Brackets />
        </div>
      </div>
    </section>
  );
};

export default Table;
