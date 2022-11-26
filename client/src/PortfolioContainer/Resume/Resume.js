import React, {useState} from 'react'
import ScreenHeading from "../../utilities/ScreenHeading/ScreenHeading"
import ScrollService from "../../utilities/ScrollService"
import Animations from "../../utilities/Animations"
import "./Resume.css"

export default function Resume(props) {

    const [selectedBulletIndex, SetSelectedBulletIndex] = useState(0)
    const [carousalOffSetStyle, setCarousalOffSetStyle] = useState({})

    const ResumeHeading = (props) => {
        <div className='resume-heading'>
            <div className='resume-main-heading'>
                <div className='heading-bullet'>
                    <span>{props.heading ? props.heading : ""}</span>
                    {props.fromDate && props.toDate ? (
                        <div className='heading-date'>
                            {props.fromDate + "_" + props.toDate}
                        </div>
                    ) : (
                        <div></div>
                    )}
                </div>
                <div className='resume-sub-heading'>
                    <span>{props.subHeading ? props.subHeading : ''}</span>
                </div>
                <div className='resume-heading-description'>
                    <span>{props.description ? props.description : ''}</span>
                </div>
            </div>
        </div>

    }

    const resumeBullets = [
        {label : "Education", logoSrc: "education.svg"}, 
        {label: "Work History", logoSrc: "work-history.svg"},
        {label: "Programming Skills", logoSrc: "programming-skills.svg"}, 
        {label: "Projects", logoSrc: "projects.org"}, 
        {label: "Interests", logoSrc: "interests.svg"}
        
    ]

    let fadeInScreenHandler = (screen) => {
        if(screen.fadeScreen !== props.id)
        return
        Animations.animations.fadeInScreen(props.id)
    }

    const fadeInSubscription = ScrollService.currentScreenFadeIn.subscribe(fadeInScreenHandler);

  return (
    <div resume-container screen-container id={props.id || ""}>
        <div className='resume-content'>
            <ScreenHeading title={'Resume'} subHeading={"My Bio Details"}/>
        </div>

    </div>
  )
}
