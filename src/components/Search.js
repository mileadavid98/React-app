import React, {useEffect, useState} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";

const Search = (props) => {

    const [isVisible, setIsVisible] = useState(true);
    const [height, setHeight] = useState(0)
  
    useEffect(() => {
        window.addEventListener("scroll", listenToScroll);
        return () => 
            window.removeEventListener("scroll", listenToScroll); 
    })
    
    const listenToScroll = () => {
        let heightToHideFrom = 10;
        const winScroll = document.body.scrollTop || 
            document.documentElement.scrollTop;
        setHeight(winScroll);

        if (winScroll > heightToHideFrom) {  
            isVisible && setIsVisible(false);
        } else {
            setIsVisible(true);
        }  
    };
      
    return (
        <>
            {
                isVisible
                    &&
                <div id="hide">
                    <FontAwesomeIcon icon={faMagnifyingGlass} className="search-icon"/>
                    <input type="text" id="search" placeholder="Search" className="search-bar" onChange={(event)=>props.handleInputChange(event.target.value.toLowerCase())} />
                </div>
            }
        </>
    );

};


export default Search;