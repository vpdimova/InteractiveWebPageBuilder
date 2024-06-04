if(!localStorage.getItem("theme")){
    localStorage.setItem("theme", "light");
}

function updateTheme(){
    document.querySelector("html").setAttribute("data-bs-theme", localStorage.getItem("theme"));
}

function darkTheme() {
    localStorage.setItem("theme", "dark");
    updateTheme();
}

function lightTheme() {
    localStorage.setItem("theme", "light");
    updateTheme();
}

updateTheme();
