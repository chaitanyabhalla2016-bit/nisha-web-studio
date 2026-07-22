// const sections = document.querySelectorAll("header, section");
// const navLinks = document.querySelectorAll(".nav-link");

// window.addEventListener("scroll", () => {
//     let current = "";

//     sections.forEach(section => {
//         const top = section.offsetTop - 120;
//         if (scrollY >= top) {
//             current = section.id;
//         }
//     });

//     navLinks.forEach(link => {
//         link.classList.remove("active");
//         if (link.getAttribute("href") === `#${current}`) {
//             link.classList.add("active");
//         }
//     });

//     if(current==="header"){
//         document.querySelector('.nav-link[href="#"]').classList.add("active");
//     }
// });