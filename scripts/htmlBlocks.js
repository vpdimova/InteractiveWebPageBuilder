//import { Tags } from './config.js';

const htmlMenu = $('.html-menu');
buildHTMLButtons();
function buildHTMLButtons() {
    const scaffold = document.querySelector(".html-button-template");
    for (const template of Tags) {
        const clonedNode = $(scaffold.cloneNode(true));
        clonedNode.attr("data-type", template.name);
        clonedNode.find(".placeholder-name").text(template.displayName ?? "<" + template.name + ">");
        clonedNode.addClass(template.color);
        htmlMenu.append(clonedNode);
    }
}
let HTMLbuttons = [...$('.html-menu button.add-el-btn')];
HTMLbuttons.forEach(btn => {
    btn.addEventListener("click", (event) => addHTMLNode(event, buildHTMLNode(btn.dataset.type), btn.dataset.type))
})

function buildHTMLNode(type){
    //Get template and scaffold
    const template = Tags.find((el) => el.name == type);
    const scaffold = [...document.querySelectorAll(".universal-html-template")][template.type];
    const clonedNode = $(scaffold.cloneNode(true));

    //Config node
    clonedNode.attr("data-type", template.name);
    clonedNode.find(".placeholder-name").text(template.name);
    clonedNode.addClass(template.color);
    clonedNode.removeClass("universal-html-template");

    //Config children
    clonedNode.find(".container-children").attr("data-type", template.name);
    clonedNode.find(".container-attr").attr("data-type", template.name + "_attr");
    (template.defaultAttrs ?? []).forEach(el =>{
        const attr = buildAttr(el);
        addEventsDraggable(attr);
        clonedNode.find(".container-attr").append(attr);
    })
    

    //Return
    return clonedNode.get(0);
}

function addHTMLNode(ev, node, type){
    ev.stopPropagation();
    addEventsDraggable(node);
    if(type == 'h1'){
        $(".html-menu button[data-type=\"h1\"]").attr("disabled", true);
    }
    if(selectedEl){
        if(!isDroppingAllowed(selectedEl.dataset.type, type)) return;
        $(selectedEl).find(" > .container:not(.container-attr)").append(node);
    }else{
        containers[3].appendChild(node);
    }
    updateContainers();
}

function buildHTML(ev){
    let output = "";
    $('.body-holder .text-wrapper, .body-holder .text-input').each(function(index) {
        const el = $(this)
        if(el.hasClass('text-wrapper')){
            output += el.text()
        }else{
            output += el.val().replace(/<[^>]*>?/gm, '');
        }
    });
    const resultContainer = document.querySelector(".j-0sdw_dd32-w3d_-fff3-2f-_F_Ff_Dfas");
    $(resultContainer).contents().find("body").html(output);
}