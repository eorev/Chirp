
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

export default function Level4() {
  const finalArray = [1,2,3,4,5];
    const [visible, setVisible] = useState(false);
    const [arrayOne, setArrayOne] = useState([2, 1]);
    const [arrayTwo, setArrayTwo] = useState([4, 3]);
    const arrayThree = [5];

  const handleItemReorderOne = (currentPos:number, newPos:number) => {
    const newArray = arrayOne.slice();
    const [removed] = newArray.splice(currentPos, 1);
    newArray.splice(newPos, 0, removed);
    setArrayOne(newArray);
    console.log(newArray); 
    // Log the updated array
  };
  const handleItemReorderTwo = (currentPos:number, newPos:number) => {
    const newArray = arrayTwo.slice();
    const [removed] = newArray.splice(currentPos, 1);
    newArray.splice(newPos, 0, removed);
    setArrayTwo(newArray);
    console.log(newArray); // Log the updated array
  };

    return (
        <div className="flex flex-col mt-24 justify-center items-center text-4xl">
            <h1>Merge Sort Example</h1>
            <div className="text-sm">
            <p>Merge Sort is a little bit more tricky than the last two sorting algorithms you learned. Get ready for a challenge! Once you get the hand of it, it is easy to understand and implement.</p>
            <h2>How Merge Sort works:</h2>
            <ol>
                <li>Imagine you have a bunch of numbers that you want to sort from smallest to largest.</li>
                <li>To do this with merge sort, you first have to put every number into groups of two. You can also have an extra group of one if there are no more numbers.</li>
                <li>Once you do this, you compare each pair of numbers, and swap them as needed. The smaller number comes first!</li>
                <li>After you finish comparing every pair, you have to put them back together. Start by taking two pairs, and comparing the first number in each.</li>
                <li>Put the smaller number in a new group, and then compare the next two numbers, and so on.</li>
                <li>Repeat this until there are no more groups left, and then you've completed merge sort!</li>
            </ol>
            </div>

            <div>

            </div>

            <h1 style={{fontSize:"18px"}}>To make things easier for you, the numbers are already put into groups!</h1>
            <div className="flex">
                <Draggable onPosChange={handleItemReorderOne}>
                    {arrayOne.map((item) => (
                    <div key={item} className="w-10 h-10 bg-red-500 m-2">
                        {item}
                    </div>
                    ))}
                </Draggable>
            </div>
            <div className="flex">
                <Draggable onPosChange={handleItemReorderTwo}>
                    {arrayTwo.map((item) => (
                    <div key={item} className="w-10 h-10 bg-red-500 m-2">
                        {item}
                    </div>
                    ))}
                </Draggable>
            </div>
            <div className="flex">
                <Draggable>
                    {arrayThree.map((item) => (
                    <div key={item} className="w-10 h-10 bg-red-500 m-2">
                        {item}
                    </div>
                    ))}
                </Draggable>
            </div>
            {arraysEqual(arrayOne, [2,1]) && arraysEqual(arrayTwo, [4,3]) && <p className="text-sm">Start with the first group, and compare both numbers. If the second element is smaller, swap the two elements.</p>}
            {arraysEqual(arrayOne, [1,2]) && <p className="text-sm">Great Job! Now move to the second group and compare it  with the second element. If the second element is smaller, swap them. There is only one element in the third group, so you can skip it for now.</p>}
            {arraysEqual(arrayTwo, [3,4]) && <p className="text-sm">Great Job! The numbers are sorted. Click the button below!</p>}
            <button onClick={()=>setVisible(!visible)}>
              Click here to combine the groups once told!
              <div className="flex">
                {finalArray.map((item) => (
                  <div key={item} className="w-10 h-10 bg-red-500 m-2" hidden={!visible}>{item}</div>
                )
                )}
              </div>
            </button>
            {arraysEqual(arrayOne, [1,2,3,4,5]) && <p className="text-sm">You completed merge sort!</p>}
    </div>
    )
}