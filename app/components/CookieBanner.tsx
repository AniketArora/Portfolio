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
    <div className={`c-cookies ${isHidden ? "c-cookies__hidden" : ""}`}>
      <div className="c-cookies__content">
        <h2 className="c-cookies__title">This site uses cookies</h2>
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
