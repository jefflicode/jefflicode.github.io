// Using Intersection Observer
const navigationBar = document.querySelector("#navigationBar");
const sectionOne = document.querySelector(".home-intro");

const sectionOneOptions = {
  rootMargin: "-200px 0px 0px 0px"  //top right bottom left
};

const sectionOneObserver = new IntersectionObserver(function(
  entries,
  sectionOneObserver
) {
  entries.forEach(entry => {
    if (!entry.isIntersecting) { // entry refers to the home page, .home-intro
        navigationBar.classList.add("nav-scrolled");
    } else {
        navigationBar.classList.remove("nav-scrolled");
    }
  });
},
sectionOneOptions);

sectionOneObserver.observe(sectionOne);