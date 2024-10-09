import photo_info from "../assets/photos/homehop-photo-grid.png"
import './experience.css'
function Experience() {
    return (
        <div className = "experience">
            <img src = {photo_info} className = "info-pic" />
            <h1 className = "info-title"> Online Activities </h1>
            <p className = "experience-text"> Join unique interactive activities led be unique hosts - all while traveling.</p>
        </div>
    )
}

export default Experience;