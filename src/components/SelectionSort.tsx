import { useState } from "react"
import "./SelectionSort.css"
import { DragDropContext, Draggable, DropResult } from "react-beautiful-dnd";
import "../../StrictModeDroppable"
import { StrictModeDroppable } from "../../StrictModeDroppable";

const getItemStyle = (isDragging: boolean, draggableStyle: any) => ({
    padding: 10,
    margin: "0 200px 10px 200px",
    background: isDragging ? "#00539f" : "#bdbdbd",
    color: isDragging ? "white" : "black",
    fontSize: "20px",
    borderRadius: "5px",
    ...draggableStyle
});

function SelectionSort(): JSX.Element {
    const [order, setOrder] = useState<number[]>([2,5,2,6,9,3,1]);
    const [visible, setVisible] = useState<boolean>(false);

    const onDragEnd = (result: DropResult) => {
        const {source, destination} = result;
        if (!destination) return;
        const items = Array.from(order);
        const [newOrder] = items.splice(source.index, 1);
        items.splice(destination.index, 0, newOrder);
        setOrder(items);
    }

    return (
        <div className="body">
            <div className="title">
                <h1>Welcome to your first lesson!</h1>
            </div>
            <p className="intro">Here, you will be learning about sorting algorithms. 
                    Get ready for a fun and interactive way to learn about one of the most important topics when it comes to computers!
            </p>
            
            <button className="start-button" onClick={()=>setVisible(!visible)} hidden={visible}>Lets Get Started!</button>
            <div className="instructions" hidden={!visible}>
                <p>Computers use sorting algorithms to arrange things in order. Imagine you have a bunch of toys that you want to put in order from smallest to biggest. Sorting algorithms can do that for you! Lets start with the simplest one, selection sort. You'll be a pro in no time!</p>
                <p></p>
            </div>
            <div className="itemList">
                <DragDropContext onDragEnd={onDragEnd}>
                    <StrictModeDroppable droppableId="item">
                        {(provided) => (
                            <div className="order" {...provided.droppableProps} ref={provided.innerRef}>
                                {order.map((num, index) => {
                                    return (
                                        <Draggable key={num} draggableId={num.toString()} index={index}>
                                            {(provided, snapshot) => (
                                                <div ref={provided.innerRef} {...provided.draggableProps} {...provided.dragHandleProps} style={getItemStyle(snapshot.isDragging, provided.draggableProps.style)}>
                                                    {num}
                                                </div>
                                            )}
                                        </Draggable>
                                    )
                                })}
                            </div>
                        )}
                    </StrictModeDroppable>
                </DragDropContext>
            </div>
        </div>
    )
};
export default SelectionSort