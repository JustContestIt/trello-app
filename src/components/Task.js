export default function Task(props){
    return (
        <div>
            <div className="name">{props.person.name}</div>
            <div className="phone">{props.person.phone}</div>
            <div className="email">{props.person.email}</div>
            <img className="img" src={props.person.img}></img>
        </div>
    )
}

function work(){
    let row = []
    for(let i = 1; i <= 100; i++){
        let x = i + " "
        row.push(x);
    }
    return row
}