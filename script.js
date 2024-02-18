// SCROLL TO SECTIONS
const navigationLi = document.querySelectorAll(".navigation li");
const servicePriceSection = document.querySelector(
  "#services_pricelist_section"
).offsetTop;
const alissaBeauteSection = document.querySelector(
  "#Cosmetics_AlissaBeauté_section"
).offsetTop;
const gallerySection = document.querySelector("#gallery_section").offsetTop;
const contactsSection = document.querySelector(
  "#contacts__footer_section"
).offsetTop;
// FUNCTION
const scrollToSection = (navLi, sectionGoal) => {
  navLi.addEventListener("click", () => {
    window.scrollTo({
      top: sectionGoal,
      behavior: "smooth",
    });
  });
};

scrollToSection(navigationLi[0], servicePriceSection);
scrollToSection(navigationLi[1], alissaBeauteSection);
scrollToSection(navigationLi[2], gallerySection);
scrollToSection(navigationLi[3], contactsSection);

// SCROLL - HEADINGS
heading = document.querySelector(".pricelist_h2");
heading2 = document.querySelector(".Alissa_Beauté_h2");
heading3 = document.querySelector(".review_h2");

headingScrollGoal = document.querySelector(".pricelist_h2").offsetTop;
headingScrollGoal2 = document.querySelector(".Alissa_Beauté_h2").offsetTop;
headingScrollGoal3 = document.querySelector(".review_h2").offsetTop;

// FUNCTION
const scrollHeading = (toScroll, element) => {
  window.addEventListener("scroll", () => {
    if (window.scrollY >= toScroll - 200) {
      element.style.fontSize = "32px";
    } else if (window.scrollY < toScroll - 200) {
      element.style.fontSize = "28px";
    }
  });
};

scrollHeading(headingScrollGoal, heading);
scrollHeading(headingScrollGoal2, heading2);
scrollHeading(headingScrollGoal3, heading3);

// BUTTON - BACK TO UP
const btnBackup = document.querySelector(".btn_backup");
const btnScrollGoal = document.querySelector(".header");

window.addEventListener("scroll", () => {
  if (window.scrollY < 550) {
    btnBackup.style.display = "none";
  } else if (window.scrollY >= 550) {
    btnBackup.style.display = "inline-block";
  }
});

btnBackup.addEventListener("click", () => {
  window.scrollTo({
    top: btnScrollGoal,
    behavior: "smooth",
  });
});

// NAVIGATION - HAMBURGER
const menuIcon = document.querySelector(".menu_icons");
const menuList = document.querySelector(".navigation");
const hamburgerIcon = document.querySelector(".fa-solid");

// // RESPONSIVE MENU - NAVIGATION
menuIcon.addEventListener("click", () => {
  if (hamburgerIcon.classList[1] === "fa-bars") {
    hamburgerIcon.classList.add("fa-xmark");
    hamburgerIcon.classList.remove("fa-bars");
    menuList.style.display = "block";
    menuList.style.backgroundColor = "white";
  } else {
    hamburgerIcon.classList.add("fa-bars");
    hamburgerIcon.classList.remove("fa-xmark");
    menuList.style.display = "none";
  }
});
