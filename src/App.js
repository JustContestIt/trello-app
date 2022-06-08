import './App.css';
import Header from './components/Header';
import 'bootstrap/dist/css/bootstrap.min.css';
import Column from './components/Column';
import Task from "./components/Task";
import Data from "./components/Data";
import {useState} from "react";

function App() {
    let a = {
        name: "Alan",
        phone: "777",
        email: "alan@mail.com",
        img: "./airplane.png"
    };

    const [number, setNumber] = useState({})

    const data = Data;


    return (
        <div>
            <div id='mainScreen'>
                <Header />
                <div className='d-flex'>
                    {
                        data.map(columnData => {
                            return <Column key={columnData.id} columnData={columnData} />
                        })
                    }
                </div>
                <button onClick={show_modal} className="btn btn-primary">Show modal</button>
                {/*<div>{console.log(data)}</div>*/}
            </div>
            <div id='modalScreen' className='modalScreen hidden' onClick={hide_modal}>
                <div id='modalBox' className="modalBox">
                    <a onClick={hide_modal} id="closeIcon">X</a>
                    <button className="btn btn-primary">it works</button>
                </div>
            </div>
        </div>
    );
}

function show_modal(){
    let modal = document.getElementsByClassName('modalScreen')[0];
    let main = document.getElementById('mainScreen');
    modal.classList.remove('hidden');
    main.classList.add('blur-in');
}
function hide_modal(event){
    if(event.target.id === 'modalScreen' || event.target.id === 'closeIcon') {
        let modal = document.getElementsByClassName('modalScreen')[0];
        let main = document.getElementById('mainScreen');
        modal.classList.add('hidden');
        main.classList.remove('blur-in');
    }
}

export default App;
