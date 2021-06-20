import blob from "./images/Face_Blob_50.png";

import "./normalize.css";
import "./screen.css";

function Header() {
  let homepage = "";
  let about = "#About";
  let projects = "#Projects";
  let contact = "#Contact";
  let resume = "/Resume.pdf";
  return (
    <div className="Header">
      <nav className="c-header">
        <div className="c-header__logo">
          <a href={homepage}>
            <svg
              className="c-logo"
              xmlns="http://www.w3.org/2000/svg"
              width="80"
              height="80"
              viewBox="0 0 80 80"
            >
              <text id="A." fontSize="80" fontWeight="500">
                <tspan x="0" y="62">
                  A.
                </tspan>
              </text>
            </svg>
          </a>
        </div>

        <div className="c-header__nav">
          <a className="c-nav__item" href={about}>
            About
          </a>
          <a className="c-nav__item" href={projects}>
            Projects
          </a>
          <a className="c-nav__item" href={contact}>
            Contact
          </a>
          <a className="c-nav__item c-nav__item--button" href={resume}>
            Resume
          </a>
          <div className="c-nav__line"></div>
        </div>

        <div className="c-left__content">
          <a
            className="c-left__item"
            href="https://www.linkedin.com/in/aniket-arora/"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="39.771"
              height="40"
              viewBox="0 0 39.771 40"
            >
              <g
                id="Group_3"
                data-name="Group 3"
                transform="translate(-807.349 -633.073)"
              >
                <path
                  id="Path_259"
                  data-name="Path 259"
                  d="M844.149,633.073a2.9,2.9,0,0,1,2.1.845,2.742,2.742,0,0,1,.869,2.034v34.286a2.664,2.664,0,0,1-.869,2.011,2.893,2.893,0,0,1-2.057.824h-33.92a2.884,2.884,0,0,1-2.057-.824,2.66,2.66,0,0,1-.869-2.011V635.952a2.738,2.738,0,0,1,.869-2.034,2.9,2.9,0,0,1,2.1-.845h33.828Zm-25.28,12.09a3.2,3.2,0,0,0,0-4.48,3.322,3.322,0,0,0-2.423-.89,3.405,3.405,0,0,0-2.446.89,2.963,2.963,0,0,0-.937,2.24,3,3,0,0,0,.914,2.24,3.257,3.257,0,0,0,2.377.891h.046A3.376,3.376,0,0,0,818.869,645.163Zm.549,3.361h-5.989v18.057h5.989Zm21.623,7.68a8.758,8.758,0,0,0-1.966-6.125,7.1,7.1,0,0,0-8.549-.961,7.079,7.079,0,0,0-1.783,1.967v-2.56h-5.989q.045,1.051,0,9.646v8.41h5.989v-10.1a4.491,4.491,0,0,1,.183-1.463,3.642,3.642,0,0,1,1.1-1.507,3.037,3.037,0,0,1,2.011-.687,2.635,2.635,0,0,1,2.331,1.143,5.33,5.33,0,0,1,.686,2.927v9.69h5.989Z"
                />
              </g>
            </svg>
          </a>

          <a className="c-left__item" href="https://github.com/AniketArora">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="40"
              height="40"
              viewBox="0 0 24 24"
            >
              <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
            </svg>
          </a>

          <div className="c-left__line"></div>
        </div>
      </nav>
      <header className="o-container">
        <div className="c-top">
          <div className="c-top__background-image">
            <div className="c-top__background"></div>
            <div className="c-top__overlay"></div>
          </div>
          <div
            className="c-top__content"
            data-aos="fade-up"
            data-aos-duration="1000"
            data-aos-easing="ease-in-sine"
            data-aos-once="true"
            data-aos-delay="0"
          >
            <div className="c-top__left">
              <img className="c-top__face" src={blob} alt="My face" />
            </div>
            <div className="c-top__right">
              <div className="c-top__text">Hi, my name is.</div>
              <h1 className="c-top__name">Aniket Arora.</h1>
              <div className="c-top__text">And I'm an AI Engineer.</div>
            </div>
          </div>
        </div>
      </header>
    </div>
  );
}

export default Header;
