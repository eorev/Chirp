
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

export default function Level5() {
    const [array, setArray] = useState([2, 1, 4, 3, 5, 8, 6]);

  const handleItemReorder = (currentPos:number, newPos:number) => {
    const newArray = array.slice();
    const [removed] = newArray.splice(currentPos, 1);
    newArray.splice(newPos, 0, removed);
    setArray(newArray);
    console.log(newArray); 
    // Log the updated array
  };

    return (
        <div className="flex flex-col m-24 justify-center items-center text-4xl">
            <h1 className="text-4xl font-bold mb-4">Quick Sort Example</h1>
            <div className="text-sm mb-4">
            <p>Quick Sort is probably the hardest to understand out of the algorithms you've learned. This is the final test... After this, you'll be a sorting algorithms expert!</p>
            <h2 className="font-bold mb-2">How Quick Sort works:</h2>
            <ol className="list-decimal list-inside mb-4">
                <li>Imagine you have a bunch of numbers that you want to sort from smallest to largest.</li>
                <li>To do this with quick sort, you first have to choose a "pivot" element. Its easy to choose the first element.</li>
                <li>Now, move along the numbers to the right until you find a number greater than or equal to pivot. This number will be the new pivot.</li>
                <li>Do the same thing with the new pivot, but this time go to the left and switch pivots when the number is less than or equal to it.</li>
                <li>Repeat the previous 2 steps until the pivot is partitioned. This means that every number to the left of it is less than the pivot, and every number to the right of it is greater than the pivot.</li>
                <li>Repeat this with the rest of the numbers (the left side first, then the right side, over and over until they are all sorted), and you have completed quick sort!</li>
            </ol>
            </div>

            <div>

            </div>

            <h1 style={{fontSize:"18px"}}></h1>
            <div className="flex">
                <Draggable onPosChange={handleItemReorder}>
                    {array.map((item) => (
                    <div key={item} className="w-10 h-10 bg-red-500 m-2 flex justify-center items-center rounded-md text-white font-bold">
                        {item}
                    </div>
                    ))}
                </Draggable>

            </div>
            {arraysEqual(array, [2, 1, 4, 3, 5, 8, 6]) && arraysEqual(array, [4,3]) && <p className="text-sm mb-2">Start with the first number as the pivot, and compare it with the numbers to the right. If a number is greater than or equal to the pivot, smaller, make it the new pivot. Once it is partitioned, swap!</p>}
            {arraysEqual(array, [4, 1, 2, 3, 5, 8, 6]) && arraysEqual(array, [4,3]) && <p className="text-sm mb-2">Great job! Now the pivot will be 4.</p>}
            {arraysEqual(array, [5, 1, 2, 3, 4, 8, 6]) && arraysEqual(array, [4,3]) && <p className="text-sm mb-2">Great job! Now the pivot will be 5.</p>}
            {arraysEqual(array, [8, 1, 2, 3, 4, 5, 6]) && arraysEqual(array, [4,3]) && <p className="text-sm mb-2">Great job! Now the pivot will be 8.</p>}
            {arraysEqual(array, [6, 1, 2, 3, 4, 5, 8]) && arraysEqual(array, [4,3]) && <p className="text-sm mb-2">Great job! Now the pivot will be 6.</p>}
            {arraysEqual(array, [6, 1, 2, 3, 4, 5, 8]) && arraysEqual(array, [4,3]) && <p className="text-sm mb-2">Great job! Now the pivot will be 6. Insert it in the right spot!</p>}
            {arraysEqual(array, [1, 2, 3, 4, 5, 6, 8]) && arraysEqual(array, [4,3]) && <p className="text-sm mb-2">Congratulations! You just learned 5 new sorting algorithms!</p>}

    </div>
    )
}