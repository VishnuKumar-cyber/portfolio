import React, { useEffect } from 'react'
import ScreenHeading from '../../utilities/ScreenHeading/ScreenHeading';
import ScrollService from '../../utilities/ScrollService';
import Animations from '../../utilities/Animations';

import './AboutMe.css';

const AboutMe = (props) => {

    let fadeInScreenHandler = (screen) => {
        if(screen.fadeInScreen !== props.id)
        return;
        Animations.animations.fadeInScreen(props.id);
    } 
    const fadeInSubscription = ScrollService.currentScreenFadeIn.subscribe(fadeInScreenHandler);

    const SCREEN_CONSTANTS = { 
        description: "Mobile apps developing is my strong side of my skills. Apart from that, I am also able to work on full stack development also.I am willing to become an valuable asset to an organisation. ",
        highlights: {
            bullets: [
                "Flutter Mobile App development",
                "Interactive Front End as per the design",
                "React web development",
                "Android Mobile Development",
                "Gis Web Apps",         
           ],
           heading: "Here are a Few Highlights:"
        }
    }

    const renderHighlights = () => {
        return (
            SCREEN_CONSTANTS.highlights.bullets.map((value,i) => (
                <div className="highlight" key={i}>
                    <div className="highlight-blob"></div>
                    <span>{ value }</span>
                </div>
            ))
        )
    }

    useEffect(() => {
        return () => {
            /* UNSUBSCRIBE THE SUBSCRIPTIONS */
            fadeInSubscription.unsubscribe();
        }
    }, [fadeInSubscription]);

    return (
        <div className="about-me-container screen-container fade-in" id={ props.id || ''}>
            <div className="about-me-parent">
            <ScreenHeading title={'About Me'} subHeading={'Why Choose Me?'} />
            <div className="about-me-card">
                <div className="about-me-profile"></div>
                <div className="about-me-details">
                    <span className="about-me-description">{SCREEN_CONSTANTS.description}</span>
                    <div className="about-me-highlights">
                        <div className="highlight-heading">
                            <span>{ SCREEN_CONSTANTS.highlights.heading }</span>
                        </div>
                        { renderHighlights() }
                    </div>
                    <div className="about-me-options">
                         <button className="btn primary-btn" onClick={() => ScrollService.scrollHandler.scrollToHireMe()}> Hire Me </button>
                         <a href="Vishnu Kumar N.pdf" download="Vishnu Kumar.pdf">
                            <button className="btn highlighted-btn"> Get Resume </button>
                         </a>
                    </div>
                </div>
                </div>
            </div>
        </div>
    )
}

export default AboutMe;