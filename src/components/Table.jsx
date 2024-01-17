import styles, { layout } from "../style";
import {
  SingleEliminationBracket,
  Match,
  SVGViewer,
  createTheme,
} from "@g-loot/react-tournament-brackets";
import {
  matchesData,
  simpleBracket,
  simpleSmallBracket,
} from "./mock-matches";
import clsx from "clsx";
import useWindowDimensions from "../utils/useWindowDImensions";

const Table = () => {
  const { height, width } = useWindowDimensions();

  return (
    <section id="table" className={layout.sectionReverse}>
      <div className={clsx(layout.sectionImgReverse, "flex-col")}>
        <div className="absolute z-[3] -left-1/2 top-0 w-[50%] h-[50%] rounded-full white__gradient" />
        <div className="absolute z-[0] w-[50%] h-[50%] -left-1/2 bottom-0 rounded-full pink__gradient" />
        <h2 className={clsx(styles.heading2, "mb-5")}>
          Tournament table
        </h2>
        <div className="rounded-2xl overflow-hidden">
          <SingleEliminationBracket
            theme={theme}
            matches={simpleBracket}
            matchComponent={Match}
            svgWrapper={({ children, ...props }) => (
              <SVGViewer
                SVGBackground={theme.svgBackground}
                width={width * 0.9}
                height={height * 0.8}
                {...props}
              >
                {children}
              </SVGViewer>
            )}
          />
        </div>
      </div>
    </section>
  );
};

export default Table;

const theme = createTheme({
  textColor: {
    main: "white",
    highlighted: "#00f6ff",
    dark: "white",
  },
  matchBackground: {
    wonColor: "rgba(9, 151, 124, 0.1)",
    lostColor: "rgb(239 68 68)",
  },
  score: {
    background: {
      wonColor: "rgba(9, 151, 124, 0.1)",
      lostColor: "rgb(239 68 68)",
    },
    text: {
      highlightedWonColor: "#00f6ff",
      highlightedLostColor: "rgba(9, 151, 124, 0.1)",
    },
  },
  border: {
    color: "rgba(9, 151, 124, 0.1)",
    highlightedColor: "rgba(9, 151, 124, 0.1)",
  },
  roundHeader: {
    backgroundColor: "rgba(9, 151, 124, 0.1)",
    fontColor: "rgba(255, 255, 255, 0.7)",
  },
  connectorColor: "rgba(255, 255, 255, 0.7)",
  connectorColorHighlight: "#00f6ff",
  svgBackground:
    "radial-gradient(circle at 74.2% 50.9%, rgb(14, 72, 222) 5.2%, rgb(3, 22, 65) 75.3%)",
});
