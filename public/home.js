const scrollAnimation = function () {
  var lastScrollTop = 0;

  document.addEventListener(
    "scroll",
    function () {
      var st = window.pageYOffset || document.documentElement.scrollTop;

      if (st < lastScrollTop) {
        if (
          document
            .querySelector(".c-header__nav")
            .classList.contains("c-hide-navbar") == true
        ) {
          document
            .querySelector(".c-header__nav")
            .classList.remove("c-hide-navbar");
        }

        document.querySelector(".c-header__nav").classList.add("c-show-navbar");
      } else {
        if (
          document
            .querySelector(".c-header__nav")
            .classList.contains("c-show-navbar") == true
        ) {
          document
            .querySelector(".c-header__nav")
            .classList.remove("c-show-navbar");
        }
        document.querySelector(".c-header__nav").classList.add("c-hide-navbar");
      }
      lastScrollTop = st <= 0 ? 0 : st;
    },
    false
  );
};

const cookiebanner = function () {
  var storage = window.localStorage;
  if (storage.getItem("cookies") == null) {
    document.querySelector(".c-cookies").classList.remove("c-cookies__hidden");
  }

  var button = document.querySelector(".c-cookies-confirmed");
  button.addEventListener("click", function () {
    document.querySelector(".c-cookies").classList.add("c-cookies__hidden");
    storage.setItem("cookies", true);
  });
};

const init = function () {
  console.log("Dom loaded");
  cookiebanner();
  scrollAnimation();
};

document.addEventListener("DOMContentLoaded", init);
