import { useState } from "react"
import { DragDropContext, Draggable, DropResult } from "react-beautiful-dnd";
import "../../StrictModeDroppable"
import { StrictModeDroppable } from "../../StrictModeDroppable";

const getItemStyle = (isDragging: boolean, draggableStyle: any) => ({
    padding: 10,
    margin: "0 10px 10px 10px",
    background: isDragging ? "#00539f" : "white",
    color: isDragging ? "white" : "black",
    fontSize: "20px",
    borderRadius: "5px",
    ...draggableStyle
});

function DragDrop({startingOrder}: {
    startingOrder: number[]
}): JSX.Element {
    const [order, setOrder] = useState<number[]>(startingOrder);

    const onDragEnd = (result: DropResult) => {
        const {source, destination} = result;
        if (!destination) return;
        const items = Array.from(order);
        const [newOrder] = items.splice(source.index, 1);
        items.splice(destination.index, 0, newOrder);
        setOrder(items);
    }

    return (
        <div className="itemList">
            <DragDropContext onDragEnd={onDragEnd}>
                <StrictModeDroppable droppableId="item">
                    {(provided) => (
                        <div className="order" {...provided.droppableProps} ref={provided.innerRef}>
                            {order.map((num, index) => {
                                return (
                                    <Draggable key={num} draggableId={num.toString()} index={index}>
                                        {(provided, snapshot) => (
                                            <span ref={provided.innerRef} {...provided.draggableProps} {...provided.dragHandleProps} style={getItemStyle(snapshot.isDragging, provided.draggableProps.style)}>
                                                {num}
                                            </span>
                                        )}
                                    </Draggable>
                                )
                            })}
                        </div>
                    )}
                </StrictModeDroppable>
            </DragDropContext>


        </div>
    )
};
export default DragDrop