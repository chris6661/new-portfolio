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
    ];

    const programmingSkillDetails = [
        {skill: "JavaScript", ratingPercentage: 75},
        {skill: "React JS", ratingPercentage: 75},
        {skill: "Express JS", ratingPercentage: 75},
        {skill: "Node JS", ratingPercentage: 75},
        {skill: "Mongo DB", ratingPercentage: 75},
        {skill: "HTML", ratingPercentage: 75},
        {skill: "CSS", ratingPercentage: 75},
        {skill: "Python", ratingPercentage: 75}
    ];

    const projectDetails = [
        {
            title: "Portfolio", 
            duration: {fromDate: "2020", toDate: "2020"}, 
            description: "Portfolio website to showcase my personal work",
            subheading: "Built with: React JS, Bootstrap"
        },
        {
            title: "Portfolio", 
            duration: {fromDate: "202", toDate: "2021"}, 
            description: "Portfolio website t",
            subheading: "Built with: React JS, html"
        },
        {
            title: "Portfolio", 
            duration: {fromDate: "2022", toDate: "2022"}, 
            description: "Portfolio websitewcase my personal work",
            subheading: "Built with: React JS, css"
        }
    ];

    const resumeDetails = [
        <div className='resume-screen-container' key = "education">
            <ResumeHeading
            heading = {"University of Texas at Austin"}
            subHeading = {"Coding Boot Camp"}
            fromDate = {"November 2020"}
            toDate = {"June 2021"}
            // do i want to add in high school??
            />
        </div>,
        <div className='resume-screen-container' key = "work-experience">
            {/* work experience section */}
            <ResumeHeading
            heading = {"Hopdoddy Burger Bar"}
            subHeading = {"ospitality Manager"}
            fromDate = {"April 2021"}
            toDate = {"Present"}
            />

            <div className='experience-description'>
                <span className='resume-description-text'>
                    enter job description here, adding in filler words while building, need to change later
                </span>
            </div>

            <div className='experience-description'>
                <span className='resume-description-text'>
                    -Accomplishents in current role go here, add in some more filler text to render to page
                </span>
                <br />
                <span className='resume-description-text'>
                    -Accomplishents in current role go here, add in some more filler text to render to page
                </span>
                <br />
                <span className='resume-description-text'>
                    -Accomplishents in current role go here, add in some more filler text to render to page
                </span>
            </div>

        </div>
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
