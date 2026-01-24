import CookieBanner from "./components/CookieBanner";
import ScrollNavbar from "./components/ScrollNavbar";

export default function HomePage() {
  return (
    <>
      <ScrollNavbar />
      <nav className="c-header" id="top">
        <div className="c-header__logo">
          <a href="#top">
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
          <a className="c-nav__item" href="#About">
            About
          </a>
          <a className="c-nav__item" href="#Projects">
            Projects
          </a>
          <a className="c-nav__item" href="#Contact">
            Contact
          </a>
          <a className="c-nav__item c-nav__item--button" href="/Resume.pdf">
            Resume
          </a>
          <div className="c-nav__line"></div>
        </div>

        <div className="c-left__content">
          <a
            className="c-left__item"
            href="https://www.linkedin.com/in/aniket-arora/"
            aria-label="Visit LinkedIn profile"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="39.771"
              height="40"
              viewBox="0 0 39.771 40"
            >
              <g id="Group_3" data-name="Group 3" transform="translate(-807.349 -633.073)">
                <path
                  id="Path_259"
                  data-name="Path 259"
                  d="M844.149,633.073a2.9,2.9,0,0,1,2.1.845,2.742,2.742,0,0,1,.869,2.034v34.286a2.664,2.664,0,0,1-.869,2.011,2.893,2.893,0,0,1-2.057.824h-33.92a2.884,2.884,0,0,1-2.057-.824,2.66,2.66,0,0,1-.869-2.011V635.952a2.738,2.738,0,0,1,.869-2.034,2.9,2.9,0,0,1,2.1-.845h33.828Zm-25.28,12.09a3.2,3.2,0,0,0,0-4.48,3.322,3.322,0,0,0-2.423-.89,3.405,3.405,0,0,0-2.446.89,2.963,2.963,0,0,0-.937,2.24,3,3,0,0,0,.914,2.24,3.257,3.257,0,0,0,2.377.891h.046A3.376,3.376,0,0,0,818.869,645.163Zm.549,3.361h-5.989v18.057h5.989Zm21.623,7.68a8.758,8.758,0,0,0-1.966-6.125,7.1,7.1,0,0,0-8.549-.961,7.079,7.079,0,0,0-1.783,1.967v-2.56h-5.989q.045,1.051,0,9.646v8.41h5.989v-10.1a4.491,4.491,0,0,1,.183-1.463,3.642,3.642,0,0,1,1.1-1.507,3.037,3.037,0,0,1,2.011-.687,2.635,2.635,0,0,1,2.331,1.143,5.33,5.33,0,0,1,.686,2.927v9.69h5.989Z"
                />
              </g>
            </svg>
          </a>

          <a className="c-left__item" href="https://github.com/AniketArora" aria-label="Visit GitHub profile">
            <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24">
              <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
            </svg>
          </a>

          <a className="c-left__item" href="https://x.com/AniketArora_1" aria-label="Visit X profile">
            <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24">
              <path d="M18.244 2.25h3.308l-7.227 8.26 8.504 11.24h-6.657l-5.213-6.817-5.96 6.817H1.69l7.73-8.84L1.216 2.25h6.822l4.713 6.231L18.244 2.25zm-1.16 17.52h1.833L6.362 4.128H4.397l12.687 15.642z" />
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
          >
            <div className="c-top__left">
              <picture>
                <source type="image/webp" srcSet="/assets/images/Face_Blob_50.webp" />
                <img
                  className="c-top__face"
                  src="/assets/images/Face_Blob_50.png"
                  alt="My face"
                  width="1179"
                  height="1378"
                />
              </picture>
            </div>
            <div className="c-top__right">
              <div className="c-top__text">Hi, my name is.</div>
              <h1 className="c-top__name">Aniket Arora.</h1>
              <div className="c-top__text">And I'm a Senior Data Scientist.</div>
            </div>
          </div>
        </div>
      </header>

      <div className="o-container c-container__content">
        <div className="c-content">
          <section
            className="c-content__about"
          >
            <div className="c-content__left">
              <div className="c-content__title">
                <h2 className="c-content__name" id="About">
                  About.
                </h2>
                <div className="c-content__line"></div>
              </div>
              <p className="c-about">
                Hello, my name is <span>Aniket Arora</span>. I'm a <span>Senior Data Scientist</span> at{" "}
                <span>IBM Consulting</span> in <span>Belgium</span>. As a data scientist with a focus on{" "}
                <span>Generative AI</span>, I transform complex data into actionable insights that drive innovation
                and business growth. My expertise in <span>machine learning</span>, <span>deep learning</span>, and{" "}
                <span>statistical analysis</span> helps me build intelligent, data-driven solutions across industries.
                I'm committed to continuous learning and exploring new methods and applications in Generative AI to
                unlock transformative potential.
              </p>
              <article className="c-about__list">
                <ul className="c-list c-list--grid">
                  <li>
                    <h4>Consulting</h4>
                  </li>
                  <li>
                    <h4>Generative AI</h4>
                  </li>
                  <li>
                    <h4>Large Language Models (LLM)</h4>
                  </li>
                  <li>
                    <h4>Machine Learning &amp; Deep Learning</h4>
                  </li>
                </ul>
              </article>
            </div>
            <div
              className="c-content__right"
            >
              <img
                src="/assets/images/undraw_programming_2svr.svg"
                alt="Programming illustration"
                width="544"
                height="289.503"
              />
            </div>
          </section>
          <section
            className="c-content__projects c-content__experience"
          >
            <div className="c-projects__title">
              <div className="c-content__left">
                <div className="c-content__empty"></div>
              </div>
              <div className="c-content__right">
                <div className="c-content__title">
                  <div className="c-content__line"></div>
                  <h2 className="c-content__name" id="Experience">
                    Experience.
                  </h2>
                </div>
              </div>
            </div>
            <div className="c-experience__layout">
              <div className="c-experience__text">
                <h3>IBM Consulting</h3>
                <ul className="c-list">
                  <li>
                    <h4>Senior Data Scientist - Jan 2025 - Present · Brussels, Belgium</h4>
                  </li>
                  <li>
                    <h4>Data Scientist - Apr 2022 - Present · Brussels, Belgium</h4>
                  </li>
                  <li>
                    <h4>Junior DevOps Engineer - Sep 2021 - Apr 2022 · Brussels, Belgium</h4>
                  </li>
                  <li>
                    <h4>Automation Intern - Feb 2021 - Sep 2021 · Brussels, Belgium</h4>
                  </li>
                </ul>
                <h3>JD Systems BVBA</h3>
                <ul className="c-list">
                  <li>
                    <h4>Intern - Mar 2018 · Menen, Belgium</h4>
                  </li>
                </ul>
              </div>
              <div className="c-experience__art">
                <img
                  className="c-experience__svg"
                  src="/assets/images/undraw_my-resume_etai.svg"
                  alt="Resume illustration"
                />
              </div>
            </div>
          </section>

          <section
            className="c-content__projects c-content__education"
          >
            <div className="c-education__layout">
              <div className="c-education__text">
                <div className="c-content__title">
                  <h2 className="c-content__name" id="Education">
                    Education.
                  </h2>
                  <div className="c-content__line"></div>
                </div>
                <ul className="c-list">
                  <li>
                    <h4>
                      Howest - Bachelor's degree, New Media &amp; Communication Technology (NMCT) · 2018 - 2021
                    </h4>
                  </li>
                  <li>
                    <h4>Guldensporencollege Kaai - Informaticabeheer · 2016 - 2018</h4>
                  </li>
                  <li>
                    <h4>Spes Nostra Heule - Handel · 2012 - 2016</h4>
                  </li>
                </ul>
              </div>
              <div className="c-education__art">
                <img
                  className="c-education__svg"
                  src="/assets/images/undraw_education_3vwh.svg"
                  alt="Education illustration"
                />
              </div>
            </div>
          </section>

          <section className="c-content__projects">
            <div
              className="c-projects__title"
            >
              <div className="c-content__left">
                <div className="c-content__empty"></div>
              </div>
              <div className="c-content__right">
                <div className="c-content__title">
                  <div className="c-content__line"></div>
                  <h2 className="c-content__name" id="Projects">
                    Projects.
                  </h2>
                </div>
              </div>
            </div>
              <article
                className="c-content__project__Right"
            >
              <div className="c-project__img">
                <img
                  className="c-project__img--ml6"
                  src="/assets/images/Office_Of_The_Future.png"
                  alt="Office of the Future project interface preview"
                />
              </div>
              <div className="c-project__content">
                <div className="c-project__label">Featured</div>
                <h3 className="c-project__name">Office Of The Future - ML6</h3>
                <p className="c-project__details">
                  This project was made with the company ML6. My team and I had to look at how we could make their
                  office 'Future Proof'.
                </p>
                <p className="c-project__labels">Chart.js - Google Cloud - OpenCV - Flask</p>
                <div className="c-project__links">
                  <a
                    href="https://github.com/StijnVandendriessche1/MCT-S4-Project-III"
                    aria-label="View Office Of The Future project on GitHub"
                  >
                    <svg className="c-project__link" xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24">
                      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                    </svg>
                  </a>
                </div>
              </div>
            </article>

            <article
              className="c-content__project__Left"
            >
              <div className="c-project__content">
                <div className="c-project__label">Featured</div>
                <h3 className="c-project__name">Snek - Exergame</h3>
                <p className="c-project__details">
                  The classic snake game made as an exergame. Children between 6 to 12 years need to move the snake
                  around by pushing buttons placed on the ground.
                </p>
                <p className="c-project__labels">Flask - SocketIO - Python</p>
                <div className="c-project__links">
                  <a href="https://github.com/AniketArora/Project-II" aria-label="View Snek Exergame on GitHub">
                    <svg className="c-project__link" xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24">
                      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                    </svg>
                  </a>
                </div>
              </div>

              <div className="c-project__img">
                <img
                  className="c-project__img--Snek"
                  src="/assets/images/Snek.png"
                  alt="Snek exergame interface preview"
                />
              </div>
            </article>

            <article
              className="c-content__project__Right"
            >
              <div className="c-project__img">
                <img
                  className="c-project__img--ml6"
                  src="/assets/images/Krypto.png"
                  alt="Krypto cryptocurrency charting interface preview"
                />
              </div>
              <div className="c-project__content">
                <div className="c-project__label">Featured</div>
                <h3 className="c-project__name">Krypto - Cryptocurrency charts</h3>
                <p className="c-project__details">
                  A Webapp &amp; App that visualizes the most popular cryptocurrencies at the moment. The goal was to make
                  both projects look similar.
                </p>
                <p className="c-project__labels">Xamarin - Chart.js - Coinbase Api - Micro Interactions</p>
                <div className="c-project__links">
                  <a href="https://github.com/AniketArora/Krypto-CreateIII" aria-label="View Krypto project on GitHub">
                    <svg className="c-project__link" xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24">
                      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                    </svg>
                  </a>
                </div>
              </div>
            </article>
          </section>
          <section className="c-content__other">
            <div
              className="c-content__left"
            >
              <div className="c-content__title">
                <h2 className="c-content__name" id="OtherProjects">
                  Other Projects.
                </h2>
                <div className="c-content__line"></div>
              </div>
            </div>

            <div className="c-content__grid">
              <article
                className="c-content__cube u-x-span-1-bp3"
              >
                <div className="c-cube__icons">
                  <div className="c-cube__folder">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      xmlnsXlink="http://www.w3.org/1999/xlink"
                      width="40"
                      height="40"
                      viewBox="0 0 40 40"
                    >
                      <g
                        id="Mask_Group_2"
                        data-name="Mask Group 2"
                        transform="translate(-448 -3528)"
                        clipPath="url(#clip-path)"
                      >
                        <path
                          id="folder"
                          d="M36.667,6.667H19.517l-3.1-3.083a.833.833,0,0,0-.583-.25H3.333A3.333,3.333,0,0,0,0,6.667V33.333a3.333,3.333,0,0,0,3.333,3.333H36.667A3.333,3.333,0,0,0,40,33.333V10A3.333,3.333,0,0,0,36.667,6.667Z"
                          transform="translate(448 3528)"
                          fill="#1d3f4e"
                        />
                      </g>
                    </svg>
                  </div>
                  <div className="c-cube__github">
                    <a href="https://github.com/AniketArora/Point" aria-label="View Point project on GitHub">
                      <svg className="c-project__link" xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24">
                        <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                      </svg>
                    </a>
                  </div>
                </div>
                <h3 className="c-cube__title">Point</h3>
                <p className="c-cube__text">A POS system where you can manage stock, make payments, and order.</p>
                <p className="c-cube__labels">Flutter - Work In Progress</p>
              </article>
              <article
                className="c-content__cube u-x-span-1-bp3"
              >
                <div className="c-cube__icons">
                  <div className="c-cube__folder">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      xmlnsXlink="http://www.w3.org/1999/xlink"
                      width="40"
                      height="40"
                      viewBox="0 0 40 40"
                    >
                      <g
                        id="Mask_Group_2"
                        data-name="Mask Group 2"
                        transform="translate(-448 -3528)"
                        clipPath="url(#clip-path)"
                      >
                        <path
                          id="folder"
                          d="M36.667,6.667H19.517l-3.1-3.083a.833.833,0,0,0-.583-.25H3.333A3.333,3.333,0,0,0,0,6.667V33.333a3.333,3.333,0,0,0,3.333,3.333H36.667A3.333,3.333,0,0,0,40,33.333V10A3.333,3.333,0,0,0,36.667,6.667Z"
                          transform="translate(448 3528)"
                          fill="#1d3f4e"
                        />
                      </g>
                    </svg>
                  </div>
                  <div className="c-cube__github">
                    <a
                      href="https://github.com/AniketArora/Project-Quiz-Backend"
                      aria-label="View Quiz project on GitHub"
                    >
                      <svg className="c-project__link" xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24">
                        <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                      </svg>
                    </a>
                  </div>
                </div>
                <h3 className="c-cube__title">Quiz</h3>
                <p className="c-cube__text">
                  A .NET site where you can play a quiz with friends. Includes a full auto-generated controller &amp; repo.
                </p>
                <p className="c-cube__labels">C# - .Net Core - Work In Progress</p>
              </article>

              <article
                className="c-content__cube u-x-span-1-bp3"
              >
                <div className="c-cube__icons">
                  <div className="c-cube__folder">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      xmlnsXlink="http://www.w3.org/1999/xlink"
                      width="40"
                      height="40"
                      viewBox="0 0 40 40"
                    >
                      <g
                        id="Mask_Group_2"
                        data-name="Mask Group 2"
                        transform="translate(-448 -3528)"
                        clipPath="url(#clip-path)"
                      >
                        <path
                          id="folder"
                          d="M36.667,6.667H19.517l-3.1-3.083a.833.833,0,0,0-.583-.25H3.333A3.333,3.333,0,0,0,0,6.667V33.333a3.333,3.333,0,0,0,3.333,3.333H36.667A3.333,3.333,0,0,0,40,33.333V10A3.333,3.333,0,0,0,36.667,6.667Z"
                          transform="translate(448 3528)"
                          fill="#1d3f4e"
                        />
                      </g>
                    </svg>
                  </div>
                  <div className="c-cube__github">
                    <a
                      href="https://github.com/StijnVandendriessche1/project-2020-Aniket_Arora-Stijn_Vandendriessche"
                      aria-label="View Fake news database project on GitHub"
                    >
                      <svg className="c-project__link" xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24">
                        <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                      </svg>
                    </a>
                  </div>
                </div>
                <h3 className="c-cube__title">Fake news Database</h3>
                <p className="c-cube__text">A python server where you can connect clients to and see data.</p>
                <p className="c-cube__labels">Python - Threading - Numpy</p>
              </article>

              <article
                className="c-content__cube u-x-span-1-bp3"
              >
                <div className="c-cube__icons">
                  <div className="c-cube__folder">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      xmlnsXlink="http://www.w3.org/1999/xlink"
                      width="40"
                      height="40"
                      viewBox="0 0 40 40"
                    >
                      <g
                        id="Mask_Group_2"
                        data-name="Mask Group 2"
                        transform="translate(-448 -3528)"
                        clipPath="url(#clip-path)"
                      >
                        <path
                          id="folder"
                          d="M36.667,6.667H19.517l-3.1-3.083a.833.833,0,0,0-.583-.25H3.333A3.333,3.333,0,0,0,0,6.667V33.333a3.333,3.333,0,0,0,3.333,3.333H36.667A3.333,3.333,0,0,0,40,33.333V10A3.333,3.333,0,0,0,36.667,6.667Z"
                          transform="translate(448 3528)"
                          fill="#1d3f4e"
                        />
                      </g>
                    </svg>
                  </div>
                  <div className="c-cube__github">
                    <a href="https://github.com/Jonas-D-M/Stadsbouwers" aria-label="View Stadsbouwers project on GitHub">
                      <svg className="c-project__link" xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24">
                        <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                      </svg>
                    </a>
                  </div>
                </div>
                <h3 className="c-cube__title">Stadsbouwers</h3>
                <p className="c-cube__text">A website that I designed for a local builder.</p>
                <p className="c-cube__labels">Adobe XD</p>
              </article>

              <article
                className="c-content__cube u-x-span-1-bp3"
              >
                <div className="c-cube__icons">
                  <div className="c-cube__folder">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      xmlnsXlink="http://www.w3.org/1999/xlink"
                      width="40"
                      height="40"
                      viewBox="0 0 40 40"
                    >
                      <g
                        id="Mask_Group_2"
                        data-name="Mask Group 2"
                        transform="translate(-448 -3528)"
                        clipPath="url(#clip-path)"
                      >
                        <path
                          id="folder"
                          d="M36.667,6.667H19.517l-3.1-3.083a.833.833,0,0,0-.583-.25H3.333A3.333,3.333,0,0,0,0,6.667V33.333a3.333,3.333,0,0,0,3.333,3.333H36.667A3.333,3.333,0,0,0,40,33.333V10A3.333,3.333,0,0,0,36.667,6.667Z"
                          transform="translate(448 3528)"
                          fill="#1d3f4e"
                        />
                      </g>
                    </svg>
                  </div>
                  <div className="c-cube__github">
                    <a href="https://github.com/AniketArora/Portfolio" aria-label="View Portfolio project on GitHub">
                      <svg className="c-project__link" xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24">
                        <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                      </svg>
                    </a>
                  </div>
                </div>
                <h3 className="c-cube__title">Portfolio</h3>
                <p className="c-cube__text">My portfolio website that you are currently on.</p>
                <p className="c-cube__labels">Adobe XD - Web - Work In Progress</p>
              </article>

              <article
                className="c-content__cube u-x-span-1-bp3"
              >
                <div className="c-cube__icons">
                  <div className="c-cube__folder">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      xmlnsXlink="http://www.w3.org/1999/xlink"
                      width="40"
                      height="40"
                      viewBox="0 0 40 40"
                    >
                      <g
                        id="Mask_Group_2"
                        data-name="Mask Group 2"
                        transform="translate(-448 -3528)"
                        clipPath="url(#clip-path)"
                      >
                        <path
                          id="folder"
                          d="M36.667,6.667H19.517l-3.1-3.083a.833.833,0,0,0-.583-.25H3.333A3.333,3.333,0,0,0,0,6.667V33.333a3.333,3.333,0,0,0,3.333,3.333H36.667A3.333,3.333,0,0,0,40,33.333V10A3.333,3.333,0,0,0,36.667,6.667Z"
                          transform="translate(448 3528)"
                          fill="#1d3f4e"
                        />
                      </g>
                    </svg>
                  </div>
                  <div className="c-cube__github">
                    <a
                      href="https://github.com/nmct-create3/daylight-app-AniketArora"
                      aria-label="View Daylight app project on GitHub"
                    >
                      <svg className="c-project__link" xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24">
                        <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                      </svg>
                    </a>
                  </div>
                </div>
                <h3 className="c-cube__title">Daylight app</h3>
                <p className="c-cube__text">An assignment that I got for my course on User Interaction.</p>
                <p className="c-cube__labels">Web - Micro Interactions</p>
              </article>
            </div>
          </section>

          <div
            className="c-content__button"
          >
            <a className="c-content__timeline" href="#Experience">
              Timeline
            </a>
          </div>

          <footer className="c-content__contact">
            <div
              className="c-contact__title"
              id="Contact"
            >
              <div className="c-content__line c-title__left"></div>
              <div className="c-title__text">Satisfied?</div>
              <div className="c-content__line c-title__right"></div>
            </div>

            <h2
              className="c-content__head"
            >
              Get In Touch.
            </h2>

            <p
              className="c-content__text"
            >
              I'm always open to connecting about data science, Generative AI, and consulting opportunities. If you have
              a project or collaboration in mind, feel free to mail me and I will get back as soon as possible!
            </p>

            <div
              className="c-content__button"
            >
              <a className="c-content__contact" href="mailto:arora.aniket@hotmail.com">
                Contact
              </a>
            </div>
          </footer>
        </div>
      </div>
      <CookieBanner />
    </>
  );
}
