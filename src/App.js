import './App.css';
import Countries from './Components/Countries/Countries';

function App() {
  return (
    <div className="App">
      <Countries></Countries>
    </div>
  );
}

/* function LoadCountriesData (){
  const [countries,setCountries] = useState([])
  useEffect(()=>{
    fetch('https://restcountries.com/v3.1/all')
      .then(res => res.json())
      .then(data => setCountries(data))
  } ,[])
  return (
    <div>
      <h1>All Countries Data</h1>
      <h3>Available Countries: {countries.length}</h3>
      {
        countries.map(country =><Country name={country.name.common}></Country>)
      }
    </div>
  )
} */
/* function Country (props){
  return (
    <div>
      <h3>Name: {props.name}</h3>
    </div>
  )
} */
export default App;
