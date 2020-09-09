import React, {useState, useEffect} from 'react';
import Header from './components/components ui/header';
import CharacterGrid from './components/characteres/charactergrid';
import Search from './components/components ui/search';
import './App.css';
import Axios from 'axios';

const App = () => {
  const [items, setItems] = useState([])
  const [isloading, setIsLoading] = useState(true)
  const [query, setQuery] = useState('')

  useEffect(() => {
    const fetchItems = async () => {
      const result = await Axios(`https://www.breakingbadapi.com/api/characters?name=${query}`)
      console.log(result.data);
      setItems(result.data);
      setIsLoading(false);
    }
    fetchItems();
  }, [query])
  return (
    <div className="container">
      <Header />
      <Search getQuery={(q)=> setQuery(q)}/>
      <CharacterGrid isloading={isloading} items = {items} />
    </div>
  );
}

export default App;
