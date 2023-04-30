
import { useState } from "react";
import { Draggable } from "react-drag-reorder";

export default function Level1() {
    const [array, setArray] = useState([1, 2, 3, 4, 5]);

  const handleItemReorder = (currentPos:number, newPos:number) => {
    const newArray = array.slice();
    const [removed] = newArray.splice(currentPos, 1);
    newArray.splice(newPos, 0, removed);
    setArray(newArray);
    console.log(newArray); // Log the updated array
  };

    return (
        <div className="flex flex-col mt-24 justify-center items-center text-4xl">
            <h1>Bubble Sort Example</h1>
            <div className="text-sm">
            <p>Bubble Sort is a simple and intuitive sorting algorithm that works by repeatedly swapping adjacent elements if they are in the wrong order. It is easy to understand and implement, and does not require any complex data structures.</p>
            <h2>How Bubble Sort works:</h2>
            <ol>
                <li>Start with an unsorted array of numbers.</li>
                <li>Compare the first two elements of the array, and swap them if they are in the wrong order.</li>
                <li>Move to the next pair of elements (i.e., elements 2 and 3), and repeat the comparison and swap process.</li>
                <li>Continue comparing and swapping adjacent elements until you reach the end of the array.</li>
                <li>Repeat steps 2-4 until no more swaps are needed (i.e., the array is now sorted).</li>
            </ol>
            </div>

            <div>

            </div>

            <div className="flex">
      <Draggable onPosChange={handleItemReorder}>
        {array.map((item) => (
          <div key={item} className="w-10 h-10 bg-red-500 m-2">
            {item}
          </div>
        ))}
      </Draggable>
    </div>
    </div>
    )
}