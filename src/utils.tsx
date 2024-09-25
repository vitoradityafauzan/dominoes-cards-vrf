// React set mutable as read-only, https://react.dev/learn/updating-arrays-in-state

export function getRandomArray() {
  const maxNumber = 6;
  const minNumber = 1;

  // Creates new reference so state will detect change and re-render
  const res = [];
  for (let i = 1; i <= 8; i++) {
    const temp = [Math.floor(Math.random() * (maxNumber - minNumber + 1)) + minNumber, Math.floor(Math.random() * (maxNumber - minNumber + 1)) + minNumber];

    res.push(temp);
  }

  return res;
}

export function sortArrayOfArrays(arr: number[][], order: "asc" | "desc") {
  /*
    // This only mutated reference, so state doen't detect new refence and doen't re-render
    const nre = arr.sort((a, b) => a[0] - b[0])
    console.log(nre);
    */

    const res: number[][] = JSON.parse(JSON.stringify(arr))

  return res.sort((a, b) => {
    if (order === "asc") {
      return a[0] - b[0];
    } else {
      return b[0] - a[0];
    }
  });
}

export function flipArrayOfArrays(arr: number[][]) {

  const res: number[][] = JSON.parse(JSON.stringify(arr))
  

  return res.map((a) => a.reverse());
}

export function findDuplicateAndDoubleArrays(arr: number[][]): { totalDuplicates: number; duplicates: { array: number[]; indexes: number[] }[]; duplicateIndexes: number[], totalDouble: number } {
  // store result in object, where props one is the array number, second props contains index from original array of array that will have more than one value if there are duplicates
  const duplicates: { array: number[]; indexes: number[] }[] = [];

  const seen: { [key: string]: number[] } = {};

  let doubles: number = 0;  

  arr.forEach((subArray, index) => {

    // Finds array that is double
    if (subArray[0] === subArray[1]) doubles += 1;

    // Create a key based on the sorted values so that [1, 2] and [2, 1] are treated the same
    const key = JSON.stringify(subArray.slice().sort((a, b) => a - b)); 

    if (seen[key]) {
      seen[key].push(index);
    } 
    else {
      seen[key] = [index];
    }
    
  });

  for (const key in seen) {
    
    if (seen[key].length > 1) {
      duplicates.push({ array: JSON.parse(key), indexes: seen[key] });
    }
  }

  const duplicatedIndexes = duplicates.map(d => JSON.parse(JSON.stringify(d.indexes)))

  return {
    totalDuplicates: duplicates.length,
    duplicates,
    duplicateIndexes: duplicatedIndexes.flat(),
    totalDouble: doubles
  };
}


export function getUniqueArrays(arr: number[][], indexes: number[]): number[][] {
  
  const uniqueArrays = JSON.parse(JSON.stringify(arr));
  

  const newIndexes = indexes.sort((a, b) => b - a);


  newIndexes.forEach((i) => {
    uniqueArrays.splice(i, 1)
  })


  return uniqueArrays;
}

export function removeCardsWithTotal(arr: number[][], totalToRemove: number): number[][] {

  const res: number[][] = JSON.parse(JSON.stringify(arr));

  return res.filter(subArray => {
    const sum = subArray.reduce((acc, curr) => acc + curr, 0); 
    return sum !== totalToRemove; 
  });
}

/*
function removeDuplicateDominoes(dominoes: [number, number][]): [number, number][] {
  const dominoSet = new Set<string>();

  // Create a map to track the frequency of each normalized domino
  const freqMap = new Map<string, number>();

  dominoes.forEach(([a, b]) => {
    const normalized = a <= b ? `${a}-${b}` : `${b}-${a}`;
    freqMap.set(normalized, (freqMap.get(normalized) || 0) + 1);
  });

  // Filter out any dominoes that appear more than once (both combinations)
  const uniqueDominoes = dominoes.filter(([a, b]) => {
    const normalized = a <= b ? `${a}-${b}` : `${b}-${a}`;
    if (freqMap.get(normalized) === 1) {
      return true;
    } else {
      return false;
    }
  });

  return uniqueDominoes;
}

export function findDuplicateArrays(arr: number[][]): { totalDuplicates: number; duplicates: { array: number[]; indexes: number[] }[]; indexesList: number[] } {
  // store result in object, where props one is the array number, second props contains index from original array of array that will have more than one value if there are duplicates
  const duplicates: { array: number[]; indexes: number[] }[] = [];

  const seen: { [key: string]: number[] } = {};

  console.log('FindDuplicate, arr, ', arr);
  

  arr.forEach((subArray, index) => {
    console.log('forloop, index, ', index, '-', typeof index);
    
    console.log('forloop, subarray, ', subArray, '-', typeof subArray);

    // Create a key based on the sorted values so that [1, 2] and [2, 1] are treated the same
    const key = JSON.stringify(subArray.slice().sort((a, b) => a - b)); 

    console.log('forloop, key, ', key, '-', typeof key);

    if (seen[key]) {
      seen[key].push(index);
    } 
    else {
      seen[key] = [index];
    }

    console.log('forloop, seen, ',seen);
    
  });

  for (const key in seen) {
    console.log('forloop 2, key, ', key);
    
    if (seen[key].length > 1) {
      duplicates.push({ array: JSON.parse(key), indexes: seen[key] });
    }
  }

  // console.log('findDUplicate final, total, ', duplicates.length, '\n duplicate , ', duplicates[0]['indexes']);

  const duplicatedIndexes = duplicates.map(d => JSON.parse(JSON.stringify(d.indexes)))

  // duplicates.map((d) => {duplicatedIndexes.push(JSON.parse(JSON.stringify(d.indexes)))})

  console.log('\nfindDUplicate final, new indexes, ', duplicatedIndexes.flat());
  

  return {
    totalDuplicates: duplicates.length,
    duplicates,
    indexesList: duplicatedIndexes.flat()
  };
}

export function getUniqueArrays(arr: number[][]): number[][] {
  const uniqueArrays: number[][] = [];
  const seen: Set<string> = new Set();

  arr.forEach((subArray) => {
    const sortedSubArray = [...subArray].sort((a, b) => a - b);
    const key = JSON.stringify(sortedSubArray);

    if (!seen.has(key)) {
      seen.add(key);
      uniqueArrays.push(subArray);
    }
  });

  return uniqueArrays;
}

*/