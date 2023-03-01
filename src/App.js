
import './App.css';
import InputWord from './components/Input';
import Words from './components/Words';
import Results from './components/results';

function App() {


  return (
    <div className="App">
      
       <Results></Results>
      
      <Words></Words>
      <InputWord></InputWord>
    </div>
  );
}

export default App;
