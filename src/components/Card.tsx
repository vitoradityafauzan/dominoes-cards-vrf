import React from "react";

// Props definition for domino card numbers
interface DominoCardProps {
  numbers: number[]; // Array of two numbers representing domino numbers
}

const DominoCard: React.FC<DominoCardProps> = ({ numbers }) => {
  const [topNumber, bottomNumber] = numbers; // Destructure the numbers

  return (
    <div className="flex flex-col text-[0.30rem] text-center">
      <h1>{topNumber}</h1>
      <div className="flex flex-col w-[5rem] h-fit border-4 border-black">
        <div className="grid grid-rows-3 grid-flow-col gap-4  w-fit h-fit p-5">
          {Array.from({ length: topNumber }).map((_, index) => (
            <div key={index} className="rounded-full w-2 h-2 bg-black"></div>
          ))}
        </div>
        <div className="border-2 border-black h-fit w-full"></div>
        <div className="grid grid-rows-3 grid-flow-col gap-4  w-fit h-fit p-5">
          {Array.from({ length: bottomNumber }).map((_, index) => (
            <div key={index} className="rounded-full w-2 h-2 bg-black"></div>
          ))}
        </div>
      </div>
      <h1>{bottomNumber}</h1>
    </div>
    // <div className="flex justify-center items-center m-4">
    //   <div className="border border-black rounded-lg w-16 h-32 relative bg-white">
    //     {/* Top Number */}
    //     <div className="absolute top-2 left-1/2 transform -translate-x-1/2 text-4xl font-bold">
    //       {topNumber}
    //     </div>

    //     {/* Middle Divider */}
    //     <div className="absolute inset-y-1/2 left-0 w-full border-t-2 border-black"></div>

    //     {/* Bottom Number */}
    //     <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 text-4xl font-bold">
    //       {bottomNumber}
    //     </div>
    //   </div>
    // </div>
  );
};

export default DominoCard;
