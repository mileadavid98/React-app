
import Card from "./Card";
const CardList = (props) =>{
    return(
        <>
            {props.results.map((mediaCard)=>{
                return(
                <Card {...mediaCard} key={mediaCard.id} />
                );
            })}
    
        </>
    )
}
export default CardList;