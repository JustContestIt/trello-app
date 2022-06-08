import React from "react";

function drag(ev){
    ev.dataTransfer.setData("text", ev.target.id);
    console.log(ev.dataTransfer)
}

const CardList = ({cards, colIndex}) => {
    return (
        <div>
            {cards.map(card =>{
                return (
                    <Card
                        card={card}
                        id={colIndex}
                        key={colIndex + card.id}
                    />
                )
            })
            }
        </div>
    )
}

const Card = (props) => {
    return (
            <div className="my-2" id={props.id + props.card.id} onDragStart={drag} draggable>
                <div className="bg-light rounded px-3 py-1 shadow-sm">
                    {props.card.name}
                </div>
            </div>
    )
}
export default CardList;
