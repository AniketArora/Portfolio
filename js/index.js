const scrollAnimation = function () {
    document.addEventListener("scroll", function () {
        var st = window.pageYOffset || document.documentElement.scrollTop;

        if (st > lastScrollTop) {
            if (
                document
                .querySelector(".c-header")
                .classList.contains(".c-hide-navbar")
            ) {
                document
                    .querySelector(".c-header")
                    .classList.remove(".c-hide-navbar");
            }

            document.querySelector(".c-header").classList.add(".c-show-navbar");
        } else {
            if (
                document
                .querySelector(".c-header")
                .classList.contains(".c-show-navbar")
            ) {
                document
                    .querySelector(".c-header")
                    .classList.remove(".c-show-navbar");
            }

            document.querySelector(".c-header").classList.add(".c-hide-navbar");
        }
    });
};

const init = function () {
    console.log("Dom loaded");
    scrollAnimation();
};

document.addEventListener("DomContentLoaded", init);