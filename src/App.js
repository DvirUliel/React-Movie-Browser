import './App.css';
import Navbar from './Components/Navbar';
import Home from './Components/Home';
import AboutView from './Components/AboutView';
import {Routes,Route} from 'react-router-dom';
import SearchView from './Components/SearchView';
import { useState,useEffect } from 'react';
import MovieView from './Components/MovieView';
import NotFound from './Components/NotFound';

function App() {
  const [searchResults , setSearchResults] = useState([]);
  const [searchText , setSearchText] = useState('');
  const apiKey = process.env.REACT_APP_API_KEY;
  const apiUrl = process.env.REACT_APP_API_URL;

  useEffect(() => {
    if(searchText){
      fetch(`${apiUrl}/search/movie?query=${searchText}&api_key=${apiKey}`)
      .then(response => response.json())
      .then(data => {
        setSearchResults(data.results)
      })}
  }, [apiUrl,apiKey,searchText])
    
    
  return (
    <div className="App"> 
      <Navbar searchText={searchText} setSearchText={setSearchText} />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='About/' element={<AboutView />} />
        <Route path='Search/' element={<SearchView keyword={searchText} searchResults={searchResults} />} />
        <Route path='/movie/:id' element={<MovieView />} />
        <Route path='*' element={<NotFound />} />
      </Routes>      
    </div>
  );
}

export default App;
