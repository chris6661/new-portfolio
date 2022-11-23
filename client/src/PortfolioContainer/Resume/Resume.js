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

                </div>
            </div>
        </div>

    }

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
