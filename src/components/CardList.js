import React from "react";
import Card from "./Card";

const CardList = ({cards, colIndex}) => {
    return (
        <div>
            {cards.map((card) => 
                <Card 
                    card={card} 
                    key={'column' + colIndex + 'card' + card.id}
                />)
            }
        </div>
        
    )
}

export default CardList;