import React, {useEffect, useState} from 'react'
import ScreenHeading from "../../utilities/ScreenHeading/ScreenHeading"
import ScrollService from "../../utilities/ScrollService"
import Animations from "../../utilities/Animations"
import "./Resume.css"

export default function Resume(props) {

    const [selectedBulletIndex, SetSelectedBulletIndex] = useState(0)
    const [carousalOffSetStyle, setCarousalOffsetStyle] = useState({})

    let fadeInScreenHandler = (screen) => {
        if(screen.fadeScreen !== props.id)
        return;
        Animations.animations.fadeInScreen(props.id)
    }
    const fadeInSubscription = ScrollService.currentScreenFadeIn.subscribe(fadeInScreenHandler);

    const ResumeHeading = (props) => {
        return (
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
        )
    }

    const resumeBullets = [
        {label : "Education", logoSrc: "education.svg"}, 
        {label: "Work History", logoSrc: "work-history.svg"},
        {label: "Programming Skills", logoSrc: "programming-skills.svg"}, 
        {label: "Projects", logoSrc: "projects.svg"}, 
        {label: "Interests", logoSrc: "interests.svg"}  
    ];

    const programmingSkillDetails = [
        {skill: "JavaScript", ratingPercentage: 75},
        {skill: "React JS", ratingPercentage: 90},
        {skill: "Express JS", ratingPercentage: 60},
        {skill: "Node JS", ratingPercentage: 65},
        {skill: "Mongo DB", ratingPercentage: 85},
        {skill: "HTML", ratingPercentage: 80},
        {skill: "CSS", ratingPercentage: 75},
        {skill: "Python", ratingPercentage: 70}
    ];

    const projectDetails = [
        {
            title: "Portfolio", 
            duration: {fromDate: "2020", toDate: "2020"}, 
            description: "Portfolio website to showcase my personal work",
            subHeading: "Built with: React JS, Bootstrap"
        },
        {
            title: "Portfolio", 
            duration: {fromDate: "202", toDate: "2021"}, 
            description: "Portfolio website t",
            subHeading: "Built with: React JS, html"
        },
        {
            title: "Portfolio", 
            duration: {fromDate: "2022", toDate: "2022"}, 
            description: "Portfolio websitewcase my personal work",
            subHeading: "Built with: React JS, css"
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
            </div>,
            <div className='resume-screen-container programming-skills-container' key = "programming-skills">
                {programmingSkillDetails.map((skill, index) => (
                    <div className='skill-parent' key={index}>
                        <div className='heading-bullet'></div>
                        <span>{skill.skill}</span>
                        <div className='skill-precentage'>
                            <div style={{width: skill.ratingPercentage + "%"}} className="active-percentage">
                            
                            </div>
                        </div>
                    </div>
                ))}
            </div>,

            <div className='resume-screen-container' key = "projects">
                {projectDetails.map((projectDetails, index) => (
                    <ResumeHeading 
                    key={index}
                    heading= {projectDetails.title}
                    subHeading={projectDetails.subHeading}
                    description={projectDetails.description}
                    fromDate={projectDetails.duration.fromDate}
                    toDate = {projectDetails.duration.toDate}
                    />
                ))}
            </div>, 

            <div className='resume-screen-container' key = "interests">
                <ResumeHeading 
                heading="Working Out"
                description="getting in the gym and working out, doing stuff with weights"
                />
                <ResumeHeading 
                heading="Watching Netflix"
                description="finding new and different things to binge and watch on Netflix"
                />
                <ResumeHeading 
                heading="Hanging with Friends"
                description="going out and about to hang out and do stuff with friends"
                />
            </div>

        </div>
    ]

    const handleCarousal = (index) => {
        let offsetHeight = 360;
        let newCarousalOffset = {
            style: {transform: "translateY(" + index * offsetHeight * -1 + "px)"}
        };
        setCarousalOffsetStyle(newCarousalOffset)
        SetSelectedBulletIndex(index); 
    };

    const getBullets = () => {
        return resumeBullets.map((bullet, index) => (
            <div
            onClick = {() => handleCarousal(index)}
            className = {index === selectedBulletIndex ? "bullet selectedBullet" : "bullet"}
            key = {index}
            >
                <img className = "bullet-logo" 
                src = {require (`../../assets/Resume/${bullet.logoSrc}`).default}
                alt = "No internet connection."/>
            </div>
        ))
    }
    
    const getResumeScreen = () => {
        return (
            <div
            style = {carousalOffSetStyle.style}
            className = "resume-details-carousal"
            >
                {resumeDetails.map((ResumeDetail) => ResumeDetail)}
            </div>
        )
    };
    
    useEffect(() => {
        return() => {
            fadeInSubscription.unsubscribe();
        };
    }, [fadeInSubscription]);

  return (
    <div resume-container screen-container id={props.id || ""}>
        <div className='resume-content'>
            <ScreenHeading title={'Resume'} subHeading={"My Bio Details"}/>
            <div className='resume-card'>
                <div className='resume-bullets'>
                    <div className='bulet-container'>
                        <div className='bullet-icons'></div>
                        <div className='bullets'>{getBullets()}</div>
                    </div>
                </div>
                <div className='resume-bullet-details'>{getResumeScreen()}</div>
            </div>
        </div>
    </div>
  )
}
