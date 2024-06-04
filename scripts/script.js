//import { Styles, Tags, Attributes, ALLOWED_DROPS, CONFIG } from './config.js'

//THEMING

function updateTheme(){
    let theme = localStorage.getItem("theme");
    document.querySelector("html").setAttribute("data-bs-theme", theme);
    if(theme == 'dark'){
        $('#theme-dark').css("display", "none");
        $('#theme-light').css("display", "inline-block");
    }else{
        $('#theme-light').css("display", "none");
        $('#theme-dark').css("display", "inline-block");
    }
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

//SETUP
const buildPageBtn = document.querySelector('.build-page-btn');
const tabLinks = [...$(".tabs .tab")];
const output = $(".output");
const copyBtn = document.querySelector(".copy-btn");
let draggables = [...$('.draggable')];
let containers;
let selectedTab = "tags";
let selectedEl = null;
setAttrContainersTypes();
updateContainers();

window.addEventListener("keydown", deselectEl);
window.addEventListener("click", deselectEl);

buildPageBtn.addEventListener("click", buildPage);

copyBtn.addEventListener("click", copyPage)

draggables.forEach(draggable => {
    addEventsDraggable(draggable);
})


if (CONFIG.show_warning) {
    window.addEventListener("beforeunload", function () {
        return true;
    });
}


$(".nav-tabs .nav-link").on("click", function(ev) {
    ev.stopPropagation();
});

//END SETUP

function copyPage(){
    navigator.clipboard.writeText(output.text())
}

function deselectEl(e) {
    if (e.type == "click" || (e.code == "Escape" && e.type == "keydown")) {
        $(selectedEl).removeClass("selected")
        selectedEl = null;
    }
}

function addEventsDraggable(draggable) {
    draggable.addEventListener('dragstart', drag);
    draggable.addEventListener('dragend', stopdrag);
    draggable.addEventListener('click', (event) => toggleSelectedElement(event, draggable));
}

function toggleSelectedElement(event, el) {
    if (el == selectedEl) {
        selectedEl = null;
        $(el).removeClass("selected");
        event.stopPropagation();
        return;
    }
    $(selectedEl).removeClass("selected");
    $(el).addClass("selected");
    selectedEl = el;
    event.stopPropagation();
}

function updateContainers() {
    containers = [...$('.container')];
    containers.forEach(container => {
        container.addEventListener('dragover', (event) => dragover(event, container.dataset.type))
    })
}

function getDragAfterElement(container, y) {
    const draggableElements = [...$(container).find(" > .draggable:not(.dragging)")]
    return draggableElements.reduce((closest, child) => {
        const box = child.getBoundingClientRect()
        const offset = y - box.top - box.height / 2
        if (offset < 0 && offset > closest.offset) {
            return { offset: offset, element: child }
        } else {
            return closest
        }
    }, { offset: Number.NEGATIVE_INFINITY }).element
}

function drag(ev) {
    $(ev.currentTarget).addClass('dragging');
    ev.stopPropagation();
}

function stopdrag(ev) {
    $(ev.currentTarget).removeClass('dragging');
}

function dragover(ev, parentType) {
    ev.preventDefault();
    const container = ev.currentTarget;
    const dragging = document.querySelector('.dragging');
    if (dragging.contains(container)) return;
    const dropType = dragging.dataset.type;
    const afterElement = getDragAfterElement(container, ev.clientY);

    if (!isDroppingAllowed(parentType, dropType)) return;

    if (afterElement == null) {
        container.appendChild(dragging)
    } else {
        container.insertBefore(dragging, afterElement)
    }

    ev.stopPropagation();
}

function isDroppingAllowed(parentType, dropType) {
    const allowedParentDrops = ALLOWED_DROPS[parentType];
    if (
        (!allowedParentDrops.includes(dropType) &&
            !allowedParentDrops.includes("*")) ||
        allowedParentDrops.includes("/")
    ) {
        return false;
    }

    return true;
}

function deleteOnDrop(ev) {
    ev.preventDefault();
    const dragging = document.querySelector('.dragging');
    if(dragging.dataset.type == "h1"){
        $(".html-menu button[data-type=\"h1\"]").attr("disabled", false);
    }
    if (selectedEl == dragging) {
        selectedEl = null;
    }
    dragging.remove();
}

function buildPage(ev) {
    buildHTML();
    buildHead();
    output.text("<!DOCTYPE html><html>" + $('iframe').contents().find("html").html() + "</html>");
    ev.stopPropagation();
}
/*
function updateTabContent() {
    const htmlMenu = $(".html-menu");
    const cssMenu = $(".css-menu");
    const attrsMenu = $(".attrs-menu");

    htmlMenu.removeClass("opened");
    cssMenu.removeClass("opened");
    attrsMenu.removeClass("opened");

    if (selectedTab == 'tags') {
        htmlMenu.addClass("opened");
    } else if (selectedTab == 'styles') {
        cssMenu.addClass("opened");
    } else {
        attrsMenu.addClass("opened");
    }
}
*/
function toggleVisibility(el, ev) {
    const draggable = $(el.parentNode);
    const attrContainter = draggable.find(" > .container-attr");
    const childrenContainer = draggable.find(" > .container-children");
    const dots = draggable.find(" > .dots");
    const showBtn = draggable.find(" > .toggle-btn:not(.slash)");
    const hideBtn = draggable.find(" > .toggle-btn.slash");

    if (attrContainter.hasClass("d-none")) {
        attrContainter.removeClass("d-none");
        childrenContainer.removeClass("d-none");
        dots.addClass("d-none");
        showBtn.addClass("d-none");
        hideBtn.removeClass("d-none");
    } else {
        childrenContainer.addClass("d-none");
        attrContainter.addClass("d-none");
        dots.removeClass("d-none");
        hideBtn.addClass("d-none");
        showBtn.removeClass("d-none");
    }
    ev.stopPropagation();
}

function setAttrContainersTypes() {
    const containersAttr = $(".container-attr");

    containersAttr.each((i, el) => {
        el = $(el);
        el.attr("data-type", el.parent().attr("data-type") + "_attr")
    });
}