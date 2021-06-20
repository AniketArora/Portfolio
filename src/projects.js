import ml6 from "./images/Office_Of_The_Future.png";
import snek from "./images/Snek.png";
import krypto from "./images/Krypto.png";

import "./normalize.css";
import "./screen.css";

function Projects() {
  return (
    <div className="Projects">
      <div className="o-container c-container__content">
        <div className="c-content">
          <section className="c-content__projects">
            <div
              className="c-projects__title"
              data-aos="fade-up"
              data-aos-duration="1000"
              data-aos-easing="ease-in-sine"
              data-aos-once="true"
              data-aos-delay="0"
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
              data-aos="fade-up"
              data-aos-duration="1000"
              data-aos-easing="ease-in-sine"
              data-aos-once="true"
              data-aos-delay="0"
            >
              <div className="c-project__img">
                <img className="c-project__img--ml6" src={ml6} alt="" />
              </div>
              <div className="c-project__content">
                <div className="c-project__label">Featured</div>
                <h3 className="c-project__name">Office Of The Future - ML6</h3>
                <p className="c-project__details">
                  This project was made with the company ML6. My team and I had
                  to look at how we could make their office 'Future Proof'.
                </p>
                <p className="c-project__labels">
                  Chart.js - Google Cloud - OpenCV - Flask
                </p>
                <div className="c-project__links">
                  <a href="https://github.com/StijnVandendriessche1/MCT-S4-Project-III">
                    <svg
                      className="c-project__link"
                      xmlns="http://www.w3.org/2000/svg"
                      width="40"
                      height="40"
                      viewBox="0 0 24 24"
                    >
                      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                    </svg>
                  </a>
                </div>
              </div>
            </article>

            <article
              className="c-content__project__Left"
              data-aos="fade-up"
              data-aos-duration="1000"
              data-aos-easing="ease-in-sine"
              data-aos-once="true"
              data-aos-delay="0"
            >
              <div className="c-project__content">
                <div className="c-project__label">Featured</div>
                <h3 className="c-project__name">Snek - Exergame</h3>
                <p className="c-project__details">
                  The classic snake game made as an exergame. Children between 6
                  to 12 years need to move the snake around by pushing buttons
                  placed on the ground.
                </p>
                <p className="c-project__labels">Flask - SocketIO - Python</p>
                <div className="c-project__links">
                  <a href="https://github.com/AniketArora/Project-II">
                    <svg
                      className="c-project__link"
                      xmlns="http://www.w3.org/2000/svg"
                      width="40"
                      height="40"
                      viewBox="0 0 24 24"
                    >
                      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                    </svg>
                  </a>
                </div>
              </div>

              <div className="c-project__img">
                <img className="c-project__img--Snek" src={snek} alt="" />
              </div>
            </article>

            <article
              className="c-content__project__Right"
              data-aos="fade-up"
              data-aos-duration="1000"
              data-aos-easing="ease-in-sine"
              data-aos-once="true"
              data-aos-delay="0"
            >
              <div className="c-project__img">
                <img className="c-project__img--ml6" src={krypto} alt="" />
              </div>
              <div className="c-project__content">
                <div className="c-project__label">Featured</div>
                <h3 className="c-project__name">
                  Krypto - Cryptocurrency charts
                </h3>
                <p className="c-project__details">
                  A Webapp & App that visualizes the most popular
                  cryptocurrencies at the moment. The goal was to make both
                  projects look similar.
                </p>
                <p className="c-project__labels">
                  Xamarin - Chart.js - Coinbase Api - Micro Interactions
                </p>
                <div className="c-project__links">
                  <a href="https://github.com/AniketArora/Krypto-CreateIII">
                    <svg
                      className="c-project__link"
                      xmlns="http://www.w3.org/2000/svg"
                      width="40"
                      height="40"
                      viewBox="0 0 24 24"
                    >
                      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                    </svg>
                  </a>
                </div>
              </div>
            </article>
          </section>
        </div>
      </div>
    </div>
  );
}

export default Projects;
