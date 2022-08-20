import { useEffect, useState } from "react";
import "../components/Profile.css"

// main state of the profile element
const  RandomProfile = () => {
        const [FirstName, setFirstName] = useState("");
        const [LastName, setLastName] = useState("");
        const [Image, setImage] = useState("");

// get the api from randomuser
    const getRandomProfile = () => {
        fetch('https://randomuser.me/api/')
        .then(res => {
            return res.json()
        })

        .then(data => {
        
            let firstName = data.results[0].name.first
            let lastName = data.results[0].name.last
            let image = data.results[0].picture.large
// temporary state of the profile element
            setFirstName(firstName)
            setLastName(lastName)
            setImage(image)
        })  
    }

    // function to generate ramdom user when button is clicked
       const handleClick = () => {
        getRandomProfile()
       } 
       useEffect(
        getRandomProfile,
       )

    return(
        <div className="profileDiv">
            <img src={Image} alt=""/>
            <p>FirstName: {FirstName}</p>
            <p>LastName: {LastName}</p>
            <button onClick={handleClick}>Generate Profile</button>
        </div>
    );;
}

export default RandomProfile;