
import CardList from "./components/CardList";
import Search from "./components/Search";
import React,{useEffect, useState} from 'react';
import DropdownButton from "./components/DropdownButton";
import axios from "axios";
import {useAsync} from "react-use";
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';

function App(props) {
  const [query, setQuery] = useState("");
  const [posts, setPosts] = useState([]);
  const [cards, setCards] = useState(posts);
  const [currPage, setCurrPage] = useState(0);
  const [isPageEnd, setIsPageEnd] = useState(false);

  const search = () => {
    if(query !== ""){
      const filteredData =  posts.filter(
        (item) => 
        item.text.toLowerCase().includes(query) ||
        item.owner.firstName.toLowerCase().includes(query)
      );
      setCards(filteredData);
    }
    else{
      setCards(posts);
    }
  }
  useEffect(() => {   
    search();
  }, [posts, query]);

  useEffect(() => {
    
    if (isPageEnd) {
      setCurrPage(currPage + 1);
    }
    
  }, [isPageEnd]);

  useEffect(() => {
    window.addEventListener('scroll', onScroll);

    return () => {
      window.removeEventListener('scroll', onScroll);
    };
  }, []);

  const onScroll = () => {
    if (window.innerHeight + window.scrollY >= document.body.offsetHeight) {
      setIsPageEnd(true);
      return;
    };
    setIsPageEnd(false);
  };
  const fetchData = async() => {
    const response = await axios.get(
      `https://dummyapi.io/data/v1/post?page=${currPage}&limit=18`,
    {
      headers: {
        'Content-Type': 'application/json',
        'app-id': '637e451627b4357e17a39345'        
      }
    });
    setPosts([...posts, ...response.data.data]);
  };
  
  useAsync(fetchData,[currPage]);

  return (
    <div className="container" onScroll={onScroll} posts={posts}>
      <header>
        <div className="header-container">
          <h4>ana luisa</h4>
        </div>
        <br></br>
        <br></br>
        <div className="search-input">
          <Search handleInputChange={setQuery}/>
          <div className="sort">
          <DropdownButton cards = {cards} arrangeList = {setCards}></DropdownButton>
          </div>
        </div>
      </header>
      <br></br>
      <h1>Posts</h1>
      <div className="grid">
      <CardList results = {cards} ></CardList>
      </div>
    </div>
  );
  
}

export default App;