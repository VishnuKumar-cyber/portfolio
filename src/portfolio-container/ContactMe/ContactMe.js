import React, { useEffect, useState, useRef } from "react";
import imgBack from "../../../src/images/im4.jpg";
import load1 from "../../../src/images/load2.gif";
import ScreenHeading from "../../utilities/ScreenHeading/ScreenHeading";
import "./ContactMe.css";
import ScrollService from "../../utilities/ScrollService";
import Animations from "../../utilities/Animations";
import Footer from "../Footer/Footer";
import Typical from "react-typical";
import emailjs from '@emailjs/browser';


export const ContactMe = (props) => {
  const form = useRef();
  let fadeInScreenHandler = (screen) => {
    if (screen.fadeInScreen !== props.id) return;

    Animations.animations.fadeInScreen(props.id);
  };
  const fadeInSubscription = ScrollService.currentScreenFadeIn.subscribe(
    fadeInScreenHandler
  );

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [banner, setBanner] = useState("");
  const [bool, setBool] = useState(false);

  useEffect(() => {
    return () => {
      /* UNSUBSCRIBE THE SUBSCRIPTIONS */
      fadeInSubscription.unsubscribe();
    };
  }, [fadeInSubscription]);

  const formSubmit = async (e) => {
    e.preventDefault();

      emailjs.sendForm('service_fln8mtv', 'template_4102fp6', form.current, 'GKttJ7c8af9ZPsGFg')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
  };

  return (
    <div className="main-container" id={props.id || ""}>
      <ScreenHeading
        subHeading={"Let's Keep In Touch"}
        title={props.screenName ? props.screenName : ""}
      />
      <div className="central-form">
        <div className="col">
          <h2 className="title">
        

                {" "}
                <Typical
                  loop={Infinity}
                  steps={[
                    "Get in Touch 🤝",
                    1000,
                    
               
                
                  ]}
                />
            
        </h2>
          <a href="#">
            <i className="fa fa-facebook-square" />
          </a>
          <a href="">
            <i className="fa fa-google-plus-square" />
          </a>
          <a href="#">
            <i className="fa fa-instagram" />
          </a>
          <a href="#">
            <i className="fa fa-youtube-square" />
          </a>
          <a href="#">
            <i className="fa fa-twitter" />
          </a>
        </div>

        <div className="back-form">
          <div className="img-back">
            <h4>Send your message</h4>
            <img src={imgBack} alt="" />
          </div>
          <form ref={form} onSubmit={formSubmit}>
            <p>{banner}</p>
            <input type="hidden" name="to_name" value= "Vishnu Kumar"/>
            <label htmlFor="name">Name</label>
            <input type="text" name="from_name"/>

            <label htmlFor="email">Email</label>
            <input type="email" name="reply_to"/>

            <label htmlFor="message">Message</label>
            <textarea
              type="text"
              name="message"
            />

            <div className="send-btn">
              <button type="submit">
                Send <i className="fa fa-paper-plane"></i>
                {bool ? (
                  <b className="load">
                    <img src={load1} alt="load1" />
                  </b>
                ) : (
                  ""
                )}
              </button>
              <button type="reset">Clear</button>
            </div>
          </form>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default ContactMe;