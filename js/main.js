const projects = [
    {
        id: 1,
        title: "color flipper",
        link: "https://shakexsempe.github.io/color-flipper/",
        img: "./img/color-flip.png",
    },
    {
        id: 2,
        title: "sidebar",
        link: "https://shakexsempe.github.io/sidebar-munch-up/",
        img: "./img/sidebar-desk.png",
    },
    {
        id: 3,
        title: "shopping list",
        link: "https://shakexsempe.github.io/JS-shopping-list/",
        img: "./img/shopping.png",
    },
    {
        id: 4,
        title: "countdown timer",
        link: "https://shakexsempe.github.io/countdown-timer/",
        img: "./img/countdown.png",
    },
    {
        id: 5,
        title: "video landing page",
        link: "https://shakexsempe.github.io/video-landing-page/",
        img: "./img/video.png",
    },
    {
        id: 6,
        title: "menu",
        link: "https://shakexsempe.github.io/menu-js/",
        img: "./img/menu.png",
    },
    {
        id: 7,
        title: "reviews",
        link: "https://shakexsempe.github.io/reviews-js/",
        img: "./img/reviews.png",
    },
    {
        id: 8,
        title: "grocery app",
        link: "https://shakexsempe.github.io/JS-shopping-list/",
        img: "./img/shopping.png",
    }
];

const main = document.getElementById('container');

window.addEventListener('DOMContentLoaded', () => {
    displayProjects(projects);
})

displayProjects = (projectsItems) => {
    let displayProject = projectsItems.map( project => {
        return `<article class="project-container">
                    <div class="project-item">
                    <h2>${project.title}</h2>
                    <a href=${project.link} target="_blank">view project<i class="fas fa-angles-right"></i></a>
                    <figure>
                        <img src=${project.img} alt="img" loading="lazy"></img>
                    </figure>
                    </div>
                </article>`
    });
    displayProject = displayProject.join("");
    // console.log(displayProject);
    main.innerHTML = displayProject;
}

const date = document.getElementById('date');
date.innerHTML = new Date().getFullYear();