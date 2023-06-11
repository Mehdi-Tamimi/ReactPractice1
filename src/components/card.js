import Description from "./Description";
import MoreButton from "./MoreButton";
import Name from "./Name";
import ShareButton from "./ShareButton";
import Picture from "./Picture";
import './CSS/Card.css'


const Card = (props) => {
    console.log(props.leftButton)
    return(
        <div className="Card">
            
            <Picture picture={props.picture}/>
            <Name name={props.name}/>
            <Description description={props.description}/>
            <div className="buttons">
                <ShareButton leftButton={props.leftButton}/>
                <MoreButton rightButton={props.rightButton}/>
            </div>
        </div>
    )
}
export default Card;