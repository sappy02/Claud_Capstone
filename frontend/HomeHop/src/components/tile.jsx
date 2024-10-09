import './tile.css'
import star_photo from '../assets/photos/homehop-star.png'


function Tile (props) {
    let badgeText 
    if (props.openSpot === 0) {
        badgeText = "SOLD OUT"
    } else if (props.location.toLowerCase() === "online"){
        badgeText = "ONLINE"
    }
    return (
        <div className = "tile"> 
            <img src = {`src/assets/photos/tile/${props.image}`} className = "tile-image" /> 
            {badgeText  && <div className = "tile-badge"> {badgeText}</div>}
            <div className = "tile-stats"> 
                <img src= {star_photo} className="tile-star" />
                <span>  &nbsp; {props.rate}</span>
                <span className = "tile-count"> ({props.count}) • &nbsp; </span>
                <span className = "tile-location"> {props.location} </span>
            </div>
            <p className = "tile-info"> {props.info} </p>
            <p> <span className = "bold"> From {props.price}</span> /person </p>
        </div>
    )
}

export default Tile;