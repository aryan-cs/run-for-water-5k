import Card from './Card';
import './AboutUs.css'; 

function AboutUs () {

    return (

        <div className = "AboutUs" id = "AboutUsPage">

            <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Rounded:opsz,wght,FILL,GRAD@48,400,0,0" />

            <Card person = "shiven"
                  name = "Shiven Patel"
                  role = "Founder"
                  links = {["google.com", "google.com"]}/>

            <Card person = "aryan" name = "Aryan Gupta" role = "Head of Graphics & Web Dev"/>
            <Card person = "sid" name = "Sid Dayaneni" role = " Head of Web Dev"/>
            <Card person = "amani" name = "Amani Julia Urban" role = "Head of Fundraising"/>
            <Card person = "andrea" name = "Andrea Kehaiova" role = "Head of Advertising"/>
            <Card person = "stephanie" name = "Stephanie Filtcheva" role = "Fundraising"/>
            <Card person = "liam" name = "Liam Cunningham" role = "Fundraising"/>
            <Card person = "reyna" name = "Reyna Shah" role = "Outreach"/>

        </div>

    );

}

export default AboutUs;