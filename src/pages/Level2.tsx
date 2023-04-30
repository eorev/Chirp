
import { Draggable } from "react-drag-reorder";

export default function Level1() {
    let state = {
        array: [1, 2, 3, 4, 5, 6, 7, 8, 9]
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
                <li>Repeat this over and over, swapping the card you find with the second card, and then the third, and so on, until there are no more cards to swap.</li>
                <li>Now you are done! You just used selection sort!</li>
            </ol>
            </div>

            <div>

            </div>

            <div className="flex">
                <Draggable>
                    {state.array.map((item: any) => (
                        <div className="w-10 h-10 bg-red-500 m-2">{item}</div>
                    ))}
                </Draggable>
            </div>
    </div>
    )
}