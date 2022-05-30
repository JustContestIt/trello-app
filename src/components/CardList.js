import React from "react";
import Card from "./Card";
import Task from "./Task";

const CardList = ({cards, colIndex}) => {
    return (
        <div>
            {cards.map((card) =>{
                return (
                    <Card
                        card={card}
                        key={'column' + colIndex + 'card' + card.id}
                    />
                )
            })
            }
        </div>
        
    )
}

export default CardList;