import { useEffect } from 'react';
import{ API} from './API/API';
import './App.css';
import Cards from './Components/Cards';
import Charts from './Components/Charts';
import CountryPicker from './Components/CountryPicker';





function App() {
  useEffect(() => {
    document.title='Covid-19'
  }, [])

API()  

  return (
    <div className="App">
      <img src='coronavirus-edit.jpg' alt='img' width='20%'></img>
      <Cards></Cards>
      <CountryPicker></CountryPicker>
      <Charts></Charts>
    </div>
  );
}

export default App;
