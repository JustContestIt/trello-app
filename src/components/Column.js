import React, { useState } from 'react';
import Submission from './Submission'
import CardList from './CardList'

const Column = (props) => {
  const [cards, setCards] = useState([
    {id: 1, },
    {id: 2, },
    {id: 3, },
    {id: 4, }
  ])

  const [text, setText] = useState('')
  
  const addNewCard = () => {
    const newCard = {
      id: cards.length + 1, body: text
    }
    setCards([...cards, newCard])
  }
  
  return (
    <div className="
        horiz-scroll 
        m-5 
        card-width 
        bg-secondary 
        bg-opacity-50 
        rounded-3"
      >
      <div className="py-2 px-2">
        Mon 02.05
      </div>
      <div id={'column' + props.colIndex}>
        <CardList cards={cards} colIndex={props.colIndex}/>
      </div>
      <Submission 
        onChange={event => setText(event.target.value)}
        onClick={addNewCard}
      />
  </div>
  )
}

export default Column;