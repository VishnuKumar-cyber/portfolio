import React, { useState, useEffect } from "react";
import ScreenHeading from "../../utilities/ScreenHeading/ScreenHeading";
import ScrollService from '../../utilities/ScrollService';
import Animations from '../../utilities/Animations';
import "./Resume.css";

const Resume = (props) => {
  /* STATES */
  const [selectedBulletIndex, setSelectedBulletIndex] = useState(0);
  const [carousalOffsetStyle, setCarousalOffsetStyle] = useState({});

  let fadeInScreenHandler = (screen) => {
    if(screen.fadeInScreen !== props.id)
      return;

    Animations.animations.fadeInScreen(props.id);
  };
  const fadeInSubscription = ScrollService.currentScreenFadeIn.subscribe(fadeInScreenHandler);

  /* REUSABLE MINOR COMPONENTS */
  const ResumeHeading = (props) => {
    return (
      <div className="resume-heading">
        <div className="resume-main-heading">
          <div className="heading-bullet"></div>
          <span>{props.heading ? props.heading : ""}</span>
          {props.fromDate && props.toDate ? (
            <div className="heading-date">
              {props.fromDate + "-" + props.toDate}
            </div>
          ) : (
            <div></div>
          )}
        </div>
        <div className="resume-sub-heading">
          <span>{props.subHeading ? props.subHeading : ""}</span>
        </div>
        <div className="resume-heading-description">
          <span>{props.description ? props.description : ""}</span>
        </div>
      </div>
    );
  };

  /* STATIC RESUME DATA */
  const resumeBullets = [
    { label: "Education", logoSrc: "education.svg" },
    { label: "Work History", logoSrc: "work-history.svg" },
    { label: "Programming Skills", logoSrc: "programming-skills.svg" },
    { label: "Projects", logoSrc: "projects.svg" },
    { label: "Interests", logoSrc: "interests.svg" },
  ];

  const programmingSkillsDetails = [

    { skill: "JavaScript", ratingPercentage: 85 },
    { skill: "React JS", ratingPercentage: 85 },
    { skill: "Flutter", ratingPercentage: 85 },
    { skill: "C++", ratingPercentage: 89 },
    { skill: "Node JS", ratingPercentage: 79 },
    { skill: "Android Studio", ratingPercentage: 80 },
    { skill: "Core Java", ratingPercentage: 80 },
    { skill: "HTML", ratingPercentage: 80 },
    { skill: "CSS", ratingPercentage: 80 },
  ];

  const projectsDetails = [
    {
      title: "Blood Donation Application",
      duration: { fromDate: "2021", toDate: "2022" },
      description:
        "My First Mobile Application that i learnend to develop my UG Project.",
      subHeading: "Technologies Used: Android Studio,Firebase",
    },
    {
      title: "Chat App",
      duration: { fromDate: "2022", toDate: "2023" },
      description:
        "An independent chat application that can be able to send messages in real time using firebase as backend",
      subHeading: "Technologies Used:  Flutter,Flutter Cli,Firebase.",
    },
    {
      title: "My Portfolio website",
      duration: { fromDate: "2022", toDate: "2023" },
      description:
        "I created my portfolio from react by learning from ehiedu to showcase my work and my ideas in on e single endity",
      subHeading:
        "Technologies Used: Mongo DB, Epress Js, React Js, Node JS, Redux, Bootstrap.",
    },
    
  ];

  const resumeDetails = [
    /* EDUCATION */
    <div className="resume-screen-container" key="education">
      <ResumeHeading
        heading={"SNS COLLEGE OF TECHNOLOGY,PG"}
        subHeading={"MASTER OF COMPUTER APPLICATIONS"}
        fromDate={"2022"}
        toDate={"EXPECTED TO COMPLETE IN 2024"}
      />
      <ResumeHeading
        heading={"SRI RAMASAMY NAIDU MEMORIAL COLLEGE,UG"}
        subHeading={"BACHLOR OF COMPUTER APPLICATIONS"}
        fromDate={"2019"}
        toDate={"2022"}
      />
      <ResumeHeading
        heading={"HSC"}
        subHeading={"Devangar Higher Secondary School,Aruppukottai"}
        fromDate={"2017"}
        toDate={"2019"}
      />
    </div>,
    /* WORK EXPERIENCE */
    <div className="resume-screen-container" key="work-experience">
      <div className="experience-container">
        <ResumeHeading
          heading={"Corizo Tech"}
          subHeading={"FLUTTER INTERN"}
          fromDate={"09-2023"}
          toDate={"10-2023"}
        />
        <div className="experience-description">
          <span className="resume-description-text">
           I learned to develop Flutter apps in this opportunity and i am able to develop cross functional apps for both IOS and android.
          </span>
        </div>
        <div className="experience-description">
          <span className="resume-description-text">
            - By far,this has leverage my level of developing apps so that able to integraded backend services also.
          .
          </span>
          <br />
        </div>
      </div>
    </div>,
    /* PROGRAMMING SKILLS */
    <div
      className="resume-screen-container programming-skills-container"
      key="programming-skills"
    >
      {programmingSkillsDetails.map((skill, index) => (
        <div className="skill-parent" key={index}>
          <div className="heading-bullet"></div>
          <span>{skill.skill}</span>
          <div className="skill-percentage">
            <div
              style={{ width: skill.ratingPercentage + "%" }}
              className="active-percentage-bar"
            ></div>
          </div>
        </div>
      ))}
    </div>,
    /* PROJECTS */
    <div className="resume-screen-container" key="projects">
      {projectsDetails.map((projectsDetails, index) => (
        <ResumeHeading
          key={index}
          heading={projectsDetails.title}
          subHeading={projectsDetails.subHeading}
          description={projectsDetails.description}
          fromDate={projectsDetails.duration.fromDate}
          toDate={projectsDetails.duration.toDate}
        />
      ))}
    </div>,
    /* Interests */
    <div className="resume-screen-container" key="interests">
      <ResumeHeading
        heading="Teaching"
        description="I believe that teaching is a part of learning also.With teaching,i can develop my skills as understanding my ability to learn new tech everyday."
      />
      <ResumeHeading
        heading="Music"
        description="I can be very much stressed sometimes.Music tends to keep me skill and work on my progress .That how my day and life goes."
      />
      <ResumeHeading
        heading="Book Reading"
        description="I like to read books from my school day .It somehjow kept on me as a habit for reading and it is fun "
      />
    </div>,
  ];

  const handleCarousal = (index) => {
    let offsetHeight = 360;

    let newCarousalOffset = {
      style: { transform: "translateY(" + index * offsetHeight * -1 + "px)" },
    };

    setCarousalOffsetStyle(newCarousalOffset);
    setSelectedBulletIndex(index);
  };

  const getBullets = () => {
    return resumeBullets.map((bullet, index) => (
      <div
        onClick={() => handleCarousal(index)}
        className={
          index === selectedBulletIndex ? "bullet selected-bullet" : "bullet"
        }
        key={index}
      >
        <img
          className="bullet-logo"
          src={require(`../../assets/Resume/${bullet.logoSrc}`)}
          alt="B"
        />
        <span className="bullet-label">{bullet.label}</span>
      </div>
    ));
  };

  const getResumeScreens = () => {
    return (
      <div
        style={carousalOffsetStyle.style}
        className="resume-details-carousal"
      >
        {resumeDetails.map((ResumeDetail) => ResumeDetail)}
      </div>
    );
  };

  useEffect(() => {
    return () => {
        /* UNSUBSCRIBE THE SUBSCRIPTIONS */
        fadeInSubscription.unsubscribe();
    }
  }, [fadeInSubscription]);

  return (
    <div
      className="resume-container screen-container fade-in"
      id={props.id || ""}
    >
      <div className="resume-content">
        <ScreenHeading title={"Resume"} subHeading={"My formal Bio Details"} />
        <div className="resume-card">
          <div className="resume-bullets">
            <div className="bullet-container">
              <div className="bullet-icons"></div>
              <div className="bullets">{getBullets()}</div>
            </div>
          </div>

          <div className="resume-bullet-details">{getResumeScreens()}</div>
        </div>
      </div>
    </div>
  );
};

export default Resume;
