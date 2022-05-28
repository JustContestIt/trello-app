import './App.css';
import Header from './components/Header';
import 'bootstrap/dist/css/bootstrap.min.css';
import Column from './components/Column';
import Task from "./components/Task";

function App() {
    let a = {
        name: "Alan",
        phone: "777",
        email: "alan@mail.com",
        img: "./airplane.png"
    }

    return (
        <div>
          <Header />
          <div className='d-flex py-5'>
            <Column colIndex={1}/>
            <Column colIndex={2}/>
          </div>
            <Task person={a}/>
        </div>
    );
}

export default App;
