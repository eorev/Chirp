
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
                <li>To do this with quick sort, you first have to choose a "pivot" element. Its easy to choose the middle element and move it to the end.</li>
                <li>Now, choose the left and right bounds, and move the left bound along the numbers to the right until you find a number greater than or equal to the pivot. The left bound is the leftmost number, and the right bound is the rightmost number (this doesn't include numbers you've used as pivots!).</li>
                <li>Do the same thing with the right bound, but this time go to the left and swap the bounds when they cross each other, or swap with the pivot when both bounds cant go farther.</li>
                <li>Repeat the previous 2 steps until the pivot is partitioned. This means that every number to the left of it is less than the pivot, and every number to the right of it is greater than the pivot.</li>
                <li>Repeat this with the rest of the numbers (the left side first, then the right side, over and over until they are all sorted), and you have completed quick sort!</li>
            </ol>
            </div>

            <div>

            </div>

            <h1 style={{fontSize:"18px"}}>We've given you a harder dataset to work with. Time to put your knowledge to the test! You will be given minimal guidance.</h1>
            <div className="flex">
                <Draggable onPosChange={handleItemReorder}>
                    {array.map((item) => (
                    <div key={item} className="w-10 h-10 bg-red-500 m-2 flex justify-center items-center rounded-md text-white font-bold">
                        {item}
                    </div>
                    ))}
                </Draggable>

            </div>
            {arraysEqual(array, [2, 1, 4, 3, 5, 8, 6]) && <p className="text-sm mb-2">Start with 3 as the pivot. Move it to the end by swapping it with 6.</p>}
            {arraysEqual(array, [2, 1, 4, 6, 5, 8, 3]) && <p className="text-sm mb-2">Nice! Now set the bounds to 2, and 8, and traverse.</p>}
            {arraysEqual(array, [2, 1, 3, 6, 5, 8, 4]) && <p className="text-sm mb-2">Great job!.</p>}
            {arraysEqual(array, [1, 2, 3, 6, 5, 8, 4]) && <p className="text-sm mb-2">Great job!</p>}
            {arraysEqual(array, [1, 2, 3, 4, 6, 8, 5]) && <p className="text-sm mb-2">Great job!</p>}
            {arraysEqual(array, [1, 2, 3, 4, 6, 8, 5]) && <p className="text-sm mb-2">Great job!</p>}
            {arraysEqual(array, [1, 2, 3, 4, 5, 8, 6]) && <p className="text-sm mb-2">Great job! Insert the final pivot in the right spot!</p>}
            {arraysEqual(array, [1, 2, 3, 4, 5, 6, 8]) && <p className="text-sm mb-2">Congratulations! You just learned 5 new sorting algorithms!</p>}

    </div>
    )
}