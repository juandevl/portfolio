
const btnMenu = document.querySelector("#btn-menu");
const sidebar = document.querySelector("#sidebar");
const menu = document.querySelector("#menu");
const btnEN = document.querySelector("#btn-en");
const btnES = document.querySelector("#btn-es");
const lang = document.querySelector("#languaje");

window.addEventListener('resize', () => {
    const isMobile = window.innerWidth;
    resetMenu();
    if (isMobile > 768) {
        sidebar.style.display = "flex";
    }
    else {
        sidebar.style.display = "none";
    }
});


const rotarMenu = () =>
{
    const spans = document.querySelectorAll("#btn-menu span");
    spans[0].style.transform = "translateY(7px) rotate(-45deg)"
    spans[1].style.display = "none"
    spans[2].style.transform = "translateY(-7px) rotate(45deg)"

    // Setting new properties to menu(sidebar)
    lang.style.display = "block";
    menu.style.height = "100vh";
    menu.style.width = "50vw";
    menu.style.top = "0";
    menu.style.left = "65%";
    menu.style.flexDirection = "column";
    menu.style.justifyContent = "center";
    menu.style.alignItems = "start";

}

const resetMenu = () =>
{
    const spans = document.querySelectorAll("#btn-menu span");
    spans.forEach((span, index) => {
        span.style.transform = 'translateY(0) rotate(0deg)';
        span.style.display = 'block';
    })

// Reset style of the menu when it's closed
    menu.style = "";
    lang.style = "";
}

btnMenu.addEventListener("click", () =>
{
    if (sidebar.style.display == "flex") {
        resetMenu();
        sidebar.style.display = "none";
    }
    else {
        rotarMenu();
        sidebar.style.display = "flex";
    }
});

btnEN.addEventListener("click", () => {

    window.location.href = "index_en.html";
    // fetch('indexen.html')
    //     .then((response) => response.text())
    //     .then((data) => {
    //         document.documentElement.innerHTML = data;
    //     })
    //     .catch(error => console.error(error));
});

btnES.addEventListener("click", () => { 

    window.location.href = "index.html";
    // fetch('index.html')
    //     .then(response => response.text())
    //     .then((data) => {
    //         document.documentElement.innerHTML = data;
    //     })
    //     .catch(error => console.error(error));
});
