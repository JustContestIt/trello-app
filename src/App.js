import './App.css';
import Header from './components/Header';
import 'bootstrap/dist/css/bootstrap.min.css';
import Column from './components/Column';

function App() {
  return (
    <div>
      <Header />
      <div className='d-flex py-5'>
        <Column colIndex={1}/>
        <Column colIndex={2}/>
      </div>
    </div>
  );
}

export default App;
