const Card = (props) => {
    return (
            <div className="px-2 py-2" id={'card' + props.card.id}>
                <div className="mt-2 bg-light rounded-1 px-2 py-1">
                    <p>Index of this card is "{'card' + props.card.id}"</p>
                    <p>{props.card.body}</p>
                </div>
            </div>
    )
}
export default Card;
