import Dropdown from 'react-bootstrap/Dropdown';
import React from 'react';
import { useState } from 'react';

const DropdownButton = (props) => {
  const [text,setText] = useState("sort");

  const sortByLikesDesc = () =>{
    const tempList = [...props.cards].sort((a, b) =>a.likes - b.likes);
    props.arrangeList(tempList);
  }

  const sortByLikesAsc = () =>{
    const tempList = [...props.cards].sort((a, b) =>b.likes - a.likes);
    props.arrangeList(tempList);
  }

  const sortByDateAsc = () =>{
    const tempList = [...props.cards].sort((a, b) => new Date(b.publishDate) - new Date(a.publishDate));
    props.arrangeList(tempList);
  }

  const sortByDateDesc = () =>{
    const tempList = [...props.cards].sort((a, b) => new Date(a.publishDate) - new Date(b.publishDate));
    props.arrangeList(tempList);
  }

  return (
    <Dropdown>
      <Dropdown.Toggle variant="success" id="dropdown-basic">
       {text}
      </Dropdown.Toggle>

      <Dropdown.Menu>
        <Dropdown.Item onClick={sortByDateAsc}>All</Dropdown.Item>
        <Dropdown.Item onClick={sortByLikesDesc}>Likes: low to high</Dropdown.Item>
        <Dropdown.Item onClick={sortByLikesAsc}>Likes: high to low</Dropdown.Item>
        <Dropdown.Item onClick={sortByDateAsc}>Release date: earliest</Dropdown.Item>
        <Dropdown.Item onClick={sortByDateDesc}>Release date: latest</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
  );
}

export default DropdownButton;