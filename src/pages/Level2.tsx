
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

export default function Level2() {
    const [array, setArray] = useState([2, 1, 4, 3, 5]);

    const handleItemReorder = (currentPos:number, newPos:number) => {
        const newArray = array.slice();
        const [removed] = newArray.splice(currentPos, 1);
        newArray.splice(newPos, 0, removed);
        setArray(newArray);
        console.log(newArray); // Log the updated array
      };

    return (
        <div className="flex flex-col mt-24 justify-center items-center text-4xl">
            <h1>Selection Sort Example</h1>
            <div className="text-sm">
            <p>Selection Sort is another simple sorting algorithm that works by traversing an array and swapping the smallest element.</p>
            <h2>How Selection Sort works:</h2>
            <ol>
                <li>Imagine you have a bunch of cards with numbers on them.</li>
                <li>With selection sort, we first look at all of the cards and find the one with the lowest number.</li>
                <li>We swap this card with the very first card, and then find the card with the smallest number again. This time though, don't include the card you had just found!</li>
                <li>If the card you are going to swap with already has the lowest number, move to the next one!</li>
                <li>Repeat this over and over, swapping the card you find with the second card, and then the third, and so on, until there are no more cards to swap.</li>
                <li>Now you are done! You just used selection sort!</li>
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
            {arraysEqual(array, [2,1,4,3,5]) && <p className="text-sm">Start by  finding the smallest card and swapping it with the first card.</p>}
            {arraysEqual(array, [1,2,4,3,5]) && <p className="text-sm">Great Job, now repeat the comparisons and swap the cards!</p>}
            {arraysEqual(array, [1,2,3,4,5]) && <p className="text-sm">Great Job, now repeat the comparisons and swap the cards!</p>}
            {arraysEqual(array, [1,2,3,4,5]) && <p className="text-sm">Great Job, You completed Selection Sort!</p>}
    </div>
    )
}