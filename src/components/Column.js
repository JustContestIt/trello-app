import React, { useState } from 'react';
import Submission from './Submission'
import CardList from './Card'

const Column = (props) => {
    const [cards, setCards] = useState(props.columnData.cards)

    const [text, setText] = useState('')

    function drop(ev){
        let data = ev.dataTransfer.getData("text");
        ev.target.appendChild(document.getElementById(data));
        ev.preventDefault();
    }
    function allowDrop(ev) {
        ev.preventDefault();
    }

    const addNewCard = () => {
        const newCard = {
            id: cards.length + 1,
            name: text
        }
        setCards([...cards, newCard])
    }

    return (
        <div className="bg-primary bg-opacity-25">
            <div id={props.columnData.id} className="m-5 card-width bg-secondary bg-opacity-25 rounded p-3">
                <b className="p-3">{props.columnData.name}</b>
                <div onDrop={drop} onDragOver={allowDrop}>
                    <CardList cards={cards} colIndex={props.columnData.id}/>
                </div>
                <Submission
                    onChange={event => setText(event.target.value)}
                    onClick={addNewCard}
                />
            </div>
        </div>
    )
}

export default Column;