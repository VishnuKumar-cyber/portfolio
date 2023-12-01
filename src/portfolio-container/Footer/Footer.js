import React from 'react'
import './Footer.css'
import { faFacebook, faLinkedin, faGithub, faInstagram } from "@fortawesome/free-brands-svg-icons"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const Footer = () => {
    /* SOCIALS STATIC DATA */
    let socialDetails = [ { icon: faFacebook, link: '#' },
                          { icon: faLinkedin, link: '#' },
                        //   { icon: faGithub, link: '' },
                          { icon: faInstagram, link: '#' } ]

    /* GET CURRENT YEAR */
    let currentYear = new Date().getFullYear();

    /* RENDER SOCIAL ICONS */
    const getSocials = () => {
        return (socialDetails.map((social,index) => (
            <a rel="noopener noreferrer" key={index} href={social.link} target="_blank" >
                <FontAwesomeIcon className="social-icon" icon={social.icon} />
            </a>
        )));
    }

    return (
        <div className="main-footer-container">
            <div className="main-footer-content">
                <div className="main-footer-message">
                    <span> Created by Vishnu Kumar { currentYear } </span>
                </div>
                <div className="main-footer-socials">
                    { getSocials() }
                </div>
            </div>
        </div>
    )
}

export default Footer;