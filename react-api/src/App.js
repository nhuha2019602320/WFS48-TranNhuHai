import logo from './logo.svg';
import './App.css';
import axios from './axios.js'
import api from 'axios'
import {getRestaurant} from 'axios'

const renderItem = (item) => {
  return
    <div>
      <p>ten: {item.name}</p>
      <p>gia: {item.price}</p>
      <p>dia chi:{item.address}</p>
    </div>
}
function App() {
  
  useEffect(()=>{
    getRestaurant().then(res => {
      setData(res.data)
    })
  },[])
  
  
  const [data, setData] = useEfect(null)
  return (
    <div>
      <ul className="App">
        {data ? data.map(renderItem): null}
      </ul>

    </div>
  );
}

export default App;
