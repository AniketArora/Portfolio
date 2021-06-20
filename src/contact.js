import "./normalize.css";
import "./screen.css";

function Contact() {
  return (
    <div className="contact">
      <div className="o-container c-container__content">
        <div className="c-content">
          <footer class="c-content__contact">
            <div
              class="c-contact__title"
              id="Contact"
              data-aos="fade-up"
              data-aos-duration="1000"
              data-aos-easing="ease-in-sine"
              data-aos-once="true"
              data-aos-delay="0"
            >
              <div class="c-content__line c-title__left "></div>
              <div class="c-title__text">Satisfied?</div>
              <div class="c-content__line c-title__right"></div>
            </div>

            <h2
              class="c-content__head"
              data-aos="fade-up"
              data-aos-duration="1000"
              data-aos-easing="ease-in-sine"
              data-aos-once="true"
              data-aos-delay="0"
            >
              Get In Touch.
            </h2>

            <p
              class="c-content__text"
              data-aos="fade-up"
              data-aos-duration="1000"
              data-aos-easing="ease-in-sine"
              data-aos-once="true"
              data-aos-delay="0"
            >
              I'm always looking for new opportunities, whether it's an
              internship or a job. So if you have any questions, feel free to
              mail me and I will get back as soon as possible!
            </p>

            <div
              class="c-content__button"
              data-aos="fade-up"
              data-aos-duration="1000"
              data-aos-easing="ease-in-sine"
              data-aos-once="true"
              data-aos-delay="0"
            >
              <a
                class="c-content__contact--button"
                href="mailto:arora.aniket@hotmail.com"
              >
                Contact
              </a>
            </div>
          </footer>
        </div>
      </div>
    </div>
  );
}

export default Contact;
