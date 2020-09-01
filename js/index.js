const scrollAnimation = function() {
    var lastScrollTop = 0;

    document.addEventListener("scroll", function() {
        var st = window.pageYOffset || document.documentElement.scrollTop;

        if (st < lastScrollTop) {
            console.log("Scrolldown");

            if (document.querySelector(".c-header").classList.contains("c-hide-navbar") == true) {
                document.querySelector(".c-header").classList.remove("c-hide-navbar");
            }

            document.querySelector(".c-header").classList.add("c-show-navbar");

        } else {
            console.log("Scroll up");

            if (document.querySelector(".c-header").classList.contains("c-show-navbar") == true) {
                document.querySelector(".c-header").classList.remove("c-show-navbar");
            }
            document.querySelector(".c-header").classList.add("c-hide-navbar");
        }
        lastScrollTop = st <= 0 ? 0 : st;

        console.log("Updated nav")
    }, false);
};

const init = function() {
    console.log("Dom loaded");
    scrollAnimation();
};

document.addEventListener('DOMContentLoaded', init);