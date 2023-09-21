// import useProjects from "../hooks/use-projects";
// import ProjectCard from "../components/ProjectCard";
// import "./HomePage.css"
// import ProjectPage from "./ProjectPage";
// import NavBar from "../components/NavBar";

// // function HomePage() {
// //     const { projects } = useProjects();
// //     return (
// //         <div>
// //             {projects.map((item, id) => {
// //                 return <ProjectCard key={id} projectData={ item } />
// //                 })
// //             }
// //         </div>
// //     )
// // }

// // export default HomePage;

// function HomePage() {

//     return <NavBar />
  
        
// };

// export default HomePage;




import React, { useState } from "react";
import "./HomePage.css";
// import { BiLogoLinkedin, BiLogoGithub, BiLogoFacebook, BiLogoTwitter, BiSolidChevronRight, BiSolidChevronLeft} from "react-icons/bi";
import NavBar from "../components/NavBar";



function Homepage() {
  const slides = [
    {
      image:
        "https://images.unsplash.com/photo-1509316785289-025f5b846b35?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1776&q=80",
      content: "Seed Dreams",
    },
    {
      image:
        "https://images.unsplash.com/photo-1621920556975-d96272266f1c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1983&q=80",
      content: "Grow Change",
    },
    {
      image:
        "https://images.unsplash.com/photo-1473580044384-7ba9967e16a0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      content: "Seed Dreams",
    },
    {
      image:
        "https://images.unsplash.com/photo-1534531409543-069f6204c5b4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1776&q=80",
      content: "Grow Change",
    },
    {
      image:
        "https://images.unsplash.com/photo-1578186227277-71c5e443adf0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1936&q=80",
      content: "Seed Dreams",
    },
    {
      image:
        "https://images.unsplash.com/photo-1440342359743-84fcb8c21f21?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      content: "Grow Change",
    },
  ];

  const [slideNumber, setSlideNumber] = useState(0);

  const nextSlide = () => {
    setSlideNumber((prevSlideNumber) =>
      prevSlideNumber === slides.length - 1 ? 0 : prevSlideNumber + 1
    );
  };

  const prevSlide = () => {
    setSlideNumber((prevSlideNumber) =>
      prevSlideNumber === 0 ? slides.length - 1 : prevSlideNumber - 1
    );
  };

  return (
    <div>
      {/* <header className="header">
        <a href="#" className="logo">
          GiftASeed.
        </a>
        <div className="social-media">
          <a href="#">
            <BiLogoGithub />
          </a>
          <a href="#">
            <BiLogoFacebook />
          </a>
          <a href="#">
            <BiLogoTwitter />
          </a>
          <a href="#">
            <BiLogoLinkedin />
          </a>
        </div>
        <nav className="nav-bar">
          <a href="#">Home</a>
          <a href="#">About</a>
          <a href="#">Projects</a>
          <a href="#">Login</a>
        </nav>
      </header> */}
      <NavBar />
      <section className="banner">
        <div className="slider">
          {slides.map((slide, index) => (
            <div
              key={index}
              className={`slide ${index === slideNumber ? "active" : ""}`}
            >
              <img src={slide.image} alt={`Slide ${index + 1}`} />
              <div className="slide-content">
                <h1>{slide.content}</h1>
              </div>
            </div>
          ))}
          <div className="slide-arrow">
            <span className="prev-btn" onClick={prevSlide}>
              <BiSolidChevronLeft />
            </span>
            <span className="next-btn" onClick={nextSlide}>
              <BiSolidChevronRight />
            </span>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Homepage;








    