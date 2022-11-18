import React, {useEffect} from 'react'
import ScreenHeading from "../../utilities/ScreenHeading/ScreenHeading"
import ScrollService from "../../utilities/ScrollService"
import Animations from "../../utilities/Animations"

export default function AboutMe(props) {

    let fadeInScreenHandler = (screen) => {
        if(screen.fadeScreen !== props.id)
        return
        Animations.animations.fadeInScreen(props.id)
    }

    const fadeInSubscription = ScrollService.currentScreenFadeIn.subscribe(fadeInScreenHandler);

    const SCREEN_CONSTANTS = {
        description: "full stack web developer with knowledge of MERN stack full stack web developer with knowledge of MERN stackfull stack web developer with knowledge of MERN stackfull stack web developer with knowledge of MERN stackfull stack web developer with knowledge of MERN stackfull stack web developer with knowledge of MERN stack. full stack web developer with knowledge of MERN stackfull stack web developer with knowledge of MERN stack.",
        // list of highlights
        highlights: {
            bullets: [
                "Full Stack Web Developer",
                "Front End web development",
                "React", 
                "SQL/Database Management"
            ],
            heading: "Here are a few highlights"
        }
    }
    const renderHighlight = () => {
        return SCREEN_CONSTANTS.highlights.bullets.map((value, i) => (
                <div className='highlisghts' key ={i}>
                    <div className='highlight-blob'></div>
                        <span>{value}</span>
                    </div>
            ));
    };

  return (
    <div className='about-me-container screen-container' id = {props.id || ""}>
        <div className='about-me-parent'>
            <ScreenHeading title={"About Me"} subHeading = {"Why Choose Me?"}/>
            <div className='about-me-card'>
                <div className='about-me-profile'></div>
                <div className='about-me-details'>
                    <span className='about-me-description'>{SCREEN_CONSTANTS.description}</span>
                    <div className='about-me-highlights'>
                        <div className='highlight-heading'> 
                            <span>{SCREEN_CONSTANTS.highlights.heading}</span>
                        </div>
                        {renderHighlight()}
                    </div>
                    <div className='about-me-options'>
                    <button className="btn primary-btn">
              {" "}
              Hire Me {" "}
            </button>
            <a href = "chrishrutkay.pdf" download = "chrishrutkay.pdf">
              <button className="btn highlighted-btn">Get Resume</button>
            </a>
                    </div>   
                </div>
            </div>
        </div>
    </div>
  )
}
