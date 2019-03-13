// Mobile menu component

class MobileMenu {
  constructor(element) {
    this.element = element;

    this.button = document.querySelector(".navigation-hamburger-button-img");

    this.links = document.querySelectorAll(".navigation-link-mobile");

    this.button.addEventListener("click", () => {
      this.toggleMenu();
    });

    this.links.forEach(link =>
      link.addEventListener("click", () => this.toggleMenu())
    );
  }

  toggleMenu() {
    if (!this.element.classList.contains("hidden-mobile-menu")) {
      TweenLite.set(this.element, { opacity: 0 });
      TweenLite.to(this.element, 0.5, {
        className: "+= hidden-mobile-menu",
        opacity: 1,
        // Need this to keep from hiding in mobile view
        zIndex: 1
      });
      this.button.src = "./assets/hamburger-menu-icon-close.svg";
    } else {
      this.element.classList.remove("hidden-mobile-menu");
      this.button.src = "./assets/hamburger-menu-icon-open.svg";
    }
  }
}

// Mobile menu component instantiation

const mobileMenu = new MobileMenu(
  document.querySelector(".navigation-links-mobile")
);

// Header animations
const headerText = document.getElementsByClassName("header-description")[0];
const headerImg = document.getElementsByClassName("header-image")[0];

TweenLite.fromTo(headerText, 1.5, { x: -500 }, { ease: Expo.easeOut, x: 0 });

TweenLite.fromTo(headerImg, 1.5, { x: 500 }, { ease: Expo.easeOut, x: 0 });

// Header animations with individual elements; button does not work
// const headerText = document.querySelector(".header-description h1");
// const headerPara = document.querySelector(".header-description p");
// const headerBtn = document.querySelector(".header-description button");

// const headerImg = document.getElementsByClassName("header-image")[0];

// TweenLite.fromTo(headerText, 2, { x: -500 }, { ease: Expo.easeOut, x: 0 });
// TweenLite.fromTo(
//   headerPara,
//   1.5,
//   { x: -500 },
//   { ease: Expo.easeOut, x: 0 }
// ).delay(0.5);
// TweenLite.fromTo(headerBtn, 2, { x: -500 }, { ease: Expo.easeOut, x: 0 });

// TweenLite.fromTo(headerImg, 2, { x: 500 }, { ease: Expo.easeOut, x: 0 });

// Working on fixed logo
const logo = document.getElementsByClassName("navigation-logo")[0];
const logoFixed = document.getElementsByClassName("navigation-logo-fixed")[0];
console.log(logo, logoFixed);
if (window.innerWidth > 768) {
  window.addEventListener("scroll", function() {
    logoFixed.style.display = "block";
    logo.style.visibility = "hidden";
  });
}

console.log(window.innerWidth);
