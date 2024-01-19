import {
  SVGViewer,
  SingleEliminationBracket,
  createTheme,
} from "@g-loot/react-tournament-brackets/dist/cjs";
import useWindowDimensions from "../utils/useWindowDImensions";
import clsx from "clsx";
import { useCallback, useEffect, useState } from "react";
import { getMatches } from "../api/API";
// import { simpleBracket } from "./mock-matches";

const INTERVAL_SECONDS = 5; // schimba aici intervalul la request in secunde
const MATCHES_INTERVAL = 1000 * INTERVAL_SECONDS;

const Brackets = ({ x = 0.9, y = 0.8 }) => {
  const { height, width } = useWindowDimensions();

  const [matches, setMatches] = useState([]);

  const fetchMatches = useCallback(() => {
    getMatches().then(setMatches);
  }, []);

  useEffect(() => {
    fetchMatches();
    // const intervalId = setInterval(fetchMatches, MATCHES_INTERVAL);
    // return () => clearInterval(intervalId);
  }, []);
  console.log(matches);
  if (!matches.length) return null;
  return (
    <div id="brackets-tournament">
      <SingleEliminationBracket
        theme={theme}
        matches={matches}
        matchComponent={({
          onMouseEnter,
          topParty,
          bottomParty,
          connectorColor,
          teamNameFallback,
          resultFallback,
        }) => {
          console.log(bottomParty);
          return (
            <div className="w-full h-full flex flex-col justify-around bg-gray-gradient rounded-xl">
              <div
                onMouseEnter={() => onMouseEnter(topParty.id)}
                className={clsx(
                  "flex justify-between items-center px-5",
                  {
                    "font-bold  text-[#33bbcf]": topParty.isWinner,
                    "text-red-500": !topParty.isWinner,
                  }
                )}
              >
                <div>{topParty.name || teamNameFallback}</div>
                <div>
                  {topParty.resultText ?? resultFallback(topParty)}
                </div>
              </div>
              <div
                style={{
                  height: "1px",
                  width: "100%",
                  background: connectorColor,
                }}
              />
              <div
                onMouseEnter={() => onMouseEnter(bottomParty.id)}
                className={clsx(
                  "flex justify-between items-center px-5",
                  {
                    "font-bold  text-[#33bbcf]": bottomParty.isWinner,
                    "text-red-500": !bottomParty.isWinner,
                  }
                )}
              >
                <div>{bottomParty.name || teamNameFallback}</div>
                <div>
                  {bottomParty.resultText ?? resultFallback(topParty)}
                </div>
              </div>
            </div>
          );
        }}
        svgWrapper={({ children, ...props }) => (
          <SVGViewer
            SVGBackground={"transparent"}
            width={width * x}
            height={height * y}
            {...props}
          >
            {children}
          </SVGViewer>
        )}
      />
    </div>
  );
};

export default Brackets;

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
