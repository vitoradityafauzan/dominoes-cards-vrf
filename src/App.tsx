/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react";
import "./App.css";
import { findDuplicateAndDoubleArrays, flipArrayOfArrays, getRandomArray, getUniqueArrays, removeCardsWithTotal, sortArrayOfArrays } from "./utils";
import DominoCard from "./components/Card";

interface IDuplicates {
  duplicateIndexes: number[];
  totalDouble: number;
}

function App() {
  const [defaultt, setDefault] = useState(getRandomArray());
  const [count, setCount] = useState<number[][]>([[]]);
  const [duplicates, setDuplicates] = useState<IDuplicates>();
  const [removeCertain, setRemoveCertain] = useState<number>(0);

  useEffect(() => {
    if (defaultt) {
      // setCount([...defaultt.map((subArray) => [...subArray])]);
      setCount(JSON.parse(JSON.stringify(defaultt)));
    }
  }, [defaultt]);

  useEffect(() => {
    if (count[0].length > 0) {
      console.log("for componentm ", count);

      setDuplicates(findDuplicateAndDoubleArrays(count));
    }
  }, [count]);

  const handleClicked = () => {
    if (removeCertain !== undefined) {
      setCount(removeCardsWithTotal(count, removeCertain))
    }
  }

  return (
    <>
      {count && duplicates && (
        <div className="text-[0.30rem] md:text-[0.40rem] w-screen h-fit border-4 flex flex-col gap-7 items-center p-5">
          <h1>Play Dominoes</h1>
          <div className="flex flex-col">
            <div className="flex">
              {defaultt.map((c, index) => (
                <h1 key={index}>[{c.join(", ")}]</h1>
              ))}
            </div>
            <div className="flex gap-5 w-6/12">
              <h1>Doubles:</h1>
              <h1>{duplicates?.totalDouble}</h1>
            </div>
            <div className="gap-2 flex flex-wrap w-full">
              {count.map((c, index) => (
                <DominoCard key={index} numbers={c} />
              ))}
            </div>
          </div>
          <div className="flex flex-wrap gap-2 ">
            <button
              className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-xs px-5 py-2.5 me-2 mb-2 focus:outline-none "
              onClick={() => {
                setDefault(getRandomArray());
              }}
            >
              Randomize
            </button>
            <button
              className="text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-xs px-5 py-2.5 me-2 mb-2 focus:outline-none "
              onClick={() => {
                setCount(sortArrayOfArrays(count, "asc"));
              }}
            >
              Sort Ascending
            </button>
            <button
              className="text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-xs px-5 py-2.5 me-2 mb-2 focus:outline-none "
              onClick={() => {
                setCount(sortArrayOfArrays(count, "desc"));
              }}
            >
              Sort Descending
            </button>
            <button
              className="text-white bg-purple-700 hover:bg-purple-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-xs px-5 py-2.5 me-2 mb-2 focus:outline-none "
              onClick={() => {
                setCount(flipArrayOfArrays(count));
              }}
            >
              Flip
            </button>
            <button
              className="text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-xs px-5 py-2.5 me-2 mb-2 focus:outline-none "
              onClick={() => {
                setCount(getUniqueArrays(count, duplicates?.duplicateIndexes));
              }}
            >
              Remove Dups
            </button>
            <button
              className="text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-xs px-5 py-2.5 me-2 mb-2 focus:outline-none "
              onClick={() => {
                setCount(defaultt);
              }}
            >
              Reset
            </button>
          </div>
          <div className="flex gap-5 justify-center">
            <input type="number" id="small-input" name='removeCertain' value={removeCertain || 0}
            onChange={(e) => setRemoveCertain(Number(e.target.value)) }
            className="block w-full p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 text-xs focus:ring-blue-500 focus:border-blue-500" placeholder="input number ...." />
            <button
              className="text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-xs px-5 py-2.5 me-2 mb-2 focus:outline-none "
              onClick={handleClicked}
            >
              Remove
            </button>
          </div>
        </div>
      )}
    </>
  );
}

export default App;
