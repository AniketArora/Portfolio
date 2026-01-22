"use client";

import { useEffect, useState } from "react";

export default function CookieBanner() {
  const [isHidden, setIsHidden] = useState(true);

  useEffect(() => {
    const storage = window.localStorage;
    if (storage.getItem("cookies") == null) {
      setIsHidden(false);
    }
  }, []);

  const handleConfirm = () => {
    window.localStorage.setItem("cookies", "true");
    setIsHidden(true);
  };

  return (
    <div
      className={`c-cookies ${isHidden ? "c-cookies__hidden" : ""}`}
      data-aos="fade-up"
      data-aos-duration="1000"
      data-aos-easing="ease-in-sine"
      data-aos-once="true"
      data-aos-delay="0"
    >
      <div className="c-cookies__content">
        <h1 className="c-cookies__title">This site uses cookies</h1>
        <p>
          By using my site, you agree to my use of cookies to deliver a better
          site experience.
        </p>
        <button
          type="button"
          className="c-cookies-confirmed o-button-reset"
          onClick={handleConfirm}
        >
          Got it
        </button>
      </div>
    </div>
  );
}
