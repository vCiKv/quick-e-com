"use client";
export default function three() {
  const arrayChallenge = (arr: number[]): number => {
    arr = arr.sort((a, b) => a - b).filter((val, index,array) => array.indexOf(val) == index);
    const arrLenght = arr.length - 1;
    const missingNumbers = arr[0] - arr[arrLenght] - arrLenght;
    return  missingNumbers;
  }
    // const min = arr[0];
    // const max = arr[arrLenght];
    // const diff =  max - min;
    // const missingNumbers = diff - arrLenght;
    // console.group();
    // console.log("arr is", arr);
    // console.log("lenght", arrLenght);
    // console.log("min", min);
    // console.log("max", max);
    // console.log("diffence", diff);
    // const diff = min < 0 ? max - min;
    // console.log("missing", missingNumbers);
    // console.groupEnd();

  const numbers = [
    [-1, 3, 1, 4],
    [-2, 3, 1, 4, 10, 11],
    [3, 1, 4],
    [3, 0, 3, 11],
    [-4, 3, 1, 4, 8, 3],
    [0, 3, 1, 7],
    [1, 3, 1, 7],
    [-1, 3, 1, 7],

  ];
  return (
    <div>
      <div className="my-10 py-5 text-2xl text-center">
        {JSON.stringify(numbers)}
      </div>
      <br />
      {numbers.map((number, index) => (
        <button
          key={index}
          className="bg-blue-700 p-6 m-6 text-white text-3xl rounded-lg"
          onClick={() => arrayChallenge(number)}
        >
          Test
        </button>
      ))}
    </div>
  );
}
