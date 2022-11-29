import Dropdown from 'react-bootstrap/Dropdown';
import React from 'react';
import { useState } from 'react';

const DropdownButton = (props) => {
  const [text,setText] = useState("All");

  const sortByLikesDesc = () =>{
    const tempList = [...props.cards].sort((a, b) =>a.likes - b.likes);
    setText("Likes: low to high");
    props.arrangeList(tempList);
  }

  const sortByLikesAsc = () =>{
    const tempList = [...props.cards].sort((a, b) =>b.likes - a.likes);
    setText("Likes: high to low");
    props.arrangeList(tempList);
  }

  const sortByDateAsc = () =>{
    const tempList = [...props.cards].sort((a, b) => new Date(b.publishDate) - new Date(a.publishDate));
    setText("Release date: earliest");
    props.arrangeList(tempList);
  }

  const sortByDateDesc = () =>{
    const tempList = [...props.cards].sort((a, b) => new Date(a.publishDate) - new Date(b.publishDate));
    setText("Release date: latest");
    props.arrangeList(tempList);
  }

  const showAll = () =>{
    const tempList = [...props.cards].sort((a, b) => new Date(b.publishDate) - new Date(a.publishDate));
    setText("All");
    props.arrangeList(tempList);
  }

  return (
    <Dropdown>
      <Dropdown.Toggle variant="success" id="dropdown-basic">
       {text}
      </Dropdown.Toggle>

      <Dropdown.Menu>
        <Dropdown.Item onClick={showAll}>All</Dropdown.Item>
        <Dropdown.Item onClick={sortByLikesDesc}>Likes: low to high</Dropdown.Item>
        <Dropdown.Item onClick={sortByLikesAsc}>Likes: high to low</Dropdown.Item>
        <Dropdown.Item onClick={sortByDateAsc}>Release date: earliest</Dropdown.Item>
        <Dropdown.Item onClick={sortByDateDesc}>Release date: latest</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
  );
}

export default DropdownButton;