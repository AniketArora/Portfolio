import "./normalize.css";
import "./screen.css";

function Cookie() {
  return (
    <div
      class="c-cookies c-cookies__hidden"
      data-aos="fade-up"
      data-aos-duration="1000"
      data-aos-easing="ease-in-sine"
      data-aos-once="true"
      data-aos-delay="0"
    >
      <div class="c-cookies__content">
        <h1 class="c-cookies__title">This site uses cookies</h1>
        <p>
          By using my site, you agree to my use of cookies to deliver a better
          site experience.
        </p>

        <button class="c-cookies-confirmed">Got it</button>
      </div>
    </div>
  );
}

export default Cookie;
