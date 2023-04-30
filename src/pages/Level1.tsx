import { useState } from "react";
import { Draggable } from "react-drag-reorder";

function arraysEqual(a: number[], b: number[]) {
  if (a === b) return true;
  if (a == null || b == null) return false;
  if (a.length !== b.length) return false;

  for (let i = 0; i < a.length; i++) {
    if (a[i] !== b[i]) return false;
  }

  return true;
}

export default function Level1() {
  const [array, setArray] = useState([2, 1, 4, 3, 5]);
  const [correct, setCorrect] = useState(false);

  const handleItemReorder = (currentPos: number, newPos: number) => {
    const newArray = array.slice();
    const [removed] = newArray.splice(currentPos, 1);
    newArray.splice(newPos, 0, removed);
    setArray(newArray);
    console.log(newArray); // Log the updated array
    arraysEqual(array, [1, 2, 3, 4, 5]) ? setCorrect(true) : setCorrect(false);
  };

  return (
    <div className="flex flex-col mt-24 justify-center items-center text-4xl">
      <h1 className="text-4xl font-bold mb-4">Bubble Sort Example</h1>
      <div className="text-sm mb-4">
        <p className="mb-2">
          Bubble Sort is a simple and intuitive sorting algorithm that works by
          repeatedly swapping adjacent elements if they are in the wrong order.
          It is easy to understand and implement, and does not require any
          complex data structures.
        </p>
        <h2 className="font-bold mb-2">How Bubble Sort works:</h2>
        <ol className="list-decimal list-inside mb-4">
          <li>Start with an unsorted array of numbers.</li>
          <li>
            Compare the first two elements of the array, and swap them if they
            are in the wrong order.
          </li>
          <li>
            Move to the next pair of elements (i.e., elements 2 and 3), and
            repeat the comparison and swap process.
          </li>
          <li>
            Continue comparing and swapping adjacent elements until you reach
            the end of the array.
          </li>
          <li>
            Repeat steps 2-4 until no more swaps are needed (i.e., the array is
            now sorted).
          </li>
        </ol>
      </div>

      <div className="flex mb-4">
        <Draggable onPosChange={handleItemReorder}>
          {array.map((item) => (
            <div
              key={item}
              className="w-10 h-10 bg-red-500 m-2 flex justify-center items-center rounded-md text-white font-bold"
            >
              {item}
            </div>
          ))}
        </Draggable>
      </div>
      {arraysEqual(array, [2, 1, 4, 3, 5]) && (
        <p className="text-sm mb-2">
          Start by comparing the first two elements and swap them if they are in
          the wrong order
        </p>
      )}
      {arraysEqual(array, [1, 2, 4, 3, 5]) && (
        <p className="text-sm mb-2">
          Great Job, Move to the next</p>
        )}
    </div> )}
