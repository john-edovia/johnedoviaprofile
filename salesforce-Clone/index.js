// Dark Mode

function changeMode() {
    let docElement = document.getElementById("dark-body");
    let darkHeader = document.getElementById("dark-header");
    // let navBarA = document.getElementsByClassName("nav-link");
    let navBarA = document.querySelectorAll("#navbarSupportedContent ul li a,#dark-header ul li a,#dark-header button.btn.btn-outline-primary.btn-lg")
    let footerDiv = document.querySelectorAll(".list-group-item");
    let ukraineTxt = document.getElementById("ukraine-text")
    // navBarA.style.removeProperty('color');
    docElement.classList.toggle("mode-black");


    darkHeader.style.backgroundColor = "black";
    if (docElement.classList.contains("mode-black")) {
        document.getElementById("btn_dark").innerHTML = "Dark Mode On";
        ukraineTxt.style.color = "black";
        for (let i = 0; i < navBarA.length; i++) {
            navBarA[i].setAttribute("style", "color: white !important;");
            // navBarA[i].setAttribute("style", "background-color: black !important;");
        }
        for (let i = 0; i < footerDiv.length; i++) {
            // footerDiv[i].setAttribute("style", "background-color:black !important")
            footerDiv[i].classList.add("footer-black");

        }

    } else {
        document.getElementById("btn_dark").innerHTML = "Dark Mode Off";
        darkHeader.style.backgroundColor = "white";
        for (let i = 0; i < navBarA.length; i++) {
            navBarA[i].setAttribute("style", "color: #0a58ca !important;")
        }
        for (let i = 0; i < footerDiv.length; i++) {
            // footerDiv[i].setAttribute("style", "background-color:black !important")
            footerDiv[i].classList.remove("footer-black");

        }
    }
}