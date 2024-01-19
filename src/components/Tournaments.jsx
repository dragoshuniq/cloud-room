import Brackets from "./Brackets";

const Tournaments = () => {
  return (
    <div className="bg-primary w-full h-full flex justify-center items-center">
      <div className="absolute z-[0] left-0 top-0 w-full h-full rounded-full white__gradient" />
      <div className="absolute z-[0] left-0 bottom-0 w-full h-full rounded-full blue__gradient" />
      <Brackets x={1} y={1} />
    </div>
  );
};

export default Tournaments;
