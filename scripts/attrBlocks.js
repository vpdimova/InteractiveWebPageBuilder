//import { Attributes } from './config.js';

const attrMenu = $('.attrs-menu');
buildAttrButtons();
function buildAttrButtons() {
    const scaffold = document.querySelector(".attr-button-template");
    for (const template of Attributes) {
        const clonedNode = scaffold.cloneNode(true);
        $(clonedNode).attr("data-type", template.name);
        $(clonedNode).find(".placeholder-name").text(template.name);
        $(clonedNode).addClass(template.color);
        $(attrMenu).append(clonedNode);
    }
}

let attrButtons = [...$('.attrs-menu button')];
attrButtons.forEach(btn => {
    btn.addEventListener("click", (event) => appendAttr(event, buildAttr(btn.dataset.type), btn.dataset.type))
})
function appendAttr(ev, attr, type) {
    const template = Attributes.find((el) => el.name == type);
    ev.stopPropagation();
    if (!selectedEl || selectedEl.dataset.type == 'styleBlock' || $(selectedEl).hasClass('style')) return;
    if (!isDroppingAllowed(selectedEl.dataset.type + "_attr", type)) return;
    if (template.type != 1) addEventsDraggable(attr);
    $(selectedEl).find(' > .container-attr').append(attr);
}

function buildAttr(type) {
    const template = Attributes.find((el) => el.name == type);
    const scaffold = document.querySelectorAll(".universal-attr-template")[template.type];
    const clonedNode = scaffold.cloneNode(true);
    $(clonedNode).attr("data-type", template.name);
    $(clonedNode).find(".placeholder-name").text(template.name);
    $(clonedNode).find(".placeholder-value").val(template.value);
    $(clonedNode).addClass(template.color);
    $(clonedNode).removeClass("universal-attr-template");
    return clonedNode;
}

window.buildAttr = buildAttr;
