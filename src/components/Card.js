import { LazyLoadImage } from "react-lazy-load-image-component";
import 'react-lazy-load-image-component/src/effects/blur.css';
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, {useState} from 'react';

const Card = (cardItem) => {

    const [isHovering, setIsHovering] = useState(false);
    const handleMouseOver = () => {
      setIsHovering(true);
    };
  
    const handleMouseOut = () => {
      setIsHovering(false);
    };


    return(
        <div className="card text-center bg-secendary mb-6" key={cardItem.id} >
            <LazyLoadImage src={cardItem.image} alt="" onMouseOver={handleMouseOver} onMouseOut={handleMouseOut} className="posts-image"/>
            <div className="hover-image">
                {isHovering && <p>{cardItem.text}</p>}
            </div>
            <span className ="card"> 
                <span className="title">{cardItem.owner.firstName}</span>
                <span className="likes">
                    <FontAwesomeIcon icon={faHeart} />
                    {cardItem.likes}
                </span>
            </span>
        </div>                   
           
    );
}

export default Card;
