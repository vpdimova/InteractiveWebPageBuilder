//import { Styles }from './config.js'

const cssMenu = $('.css-menu');
buildCSSButtons();
function buildCSSButtons() {
    const scaffold = document.querySelector(".css-button-template");
    for (const template of Styles) {
        const clonedNode = $(scaffold.cloneNode(true));
        clonedNode.attr("data-type", template.name);
        clonedNode.find(".placeholder-name").text(template.displayName ?? template.name);
        clonedNode.addClass(template.color);
        cssMenu.append(clonedNode);
    }
}

let CSSbuttons = [...$('.css-menu button')];
CSSbuttons.forEach(btn => {
    btn.addEventListener("click", (event) => addHeadElement(event, buildCSSNode(btn.dataset.type) ,btn.dataset.type))
})

function addHeadElement(ev, node, type){
    ev.stopPropagation();
    const appendLocation = type == "styleBlock"? document.querySelector(".stylesheet") : document.querySelector(".style-container:not(.template-flag)");
    if(!appendLocation) return;
    $(node.querySelector(".container")).removeClass("template-flag");
    $(node).removeClass("css-template");
    addEventsDraggable(node);
    if(selectedEl){
        if(!isDroppingAllowed(selectedEl.dataset.type, type)) return;
        $(selectedEl).find(" > .container").append(node);
    }else{
        appendLocation.appendChild(node);
    }
    updateContainers();
}

function buildCSSNode(type){
    //Get template and scaffold
    const template = Styles.find((el) => el.name == type);
    const scaffold = [...document.querySelectorAll(".universal-css-template")][template.type];
    const clonedNode = $(scaffold.cloneNode(true));

    //Config node
    clonedNode.attr("data-type", template.name);
    clonedNode.find(".placeholder-name").text(template.name);
    clonedNode.addClass(template.color);
    clonedNode.removeClass("universal-css-template");

    //Config children
    clonedNode.find(".style-container").attr("data-type", template.name);
    (template.dirOptions ?? []).forEach(el => {
        clonedNode.find(".style-direction-select").append(`
        <option value=${el}>${el}</option>
        `);
    });
    (template.valOptions ?? []).forEach(el => {
        clonedNode.find(".style-value-select").append(`
        <option value=${el}>${el}</option>
        `);
    });

    //Return
    return clonedNode.get(0);
}


function buildHead(ev){
    const iframe = document.querySelector(".j-0sdw_dd32-w3d_-fff3-2f-_F_Ff_Dfas");
    const headTag = $(iframe).contents().find("head");
    /*let styleTag = headTag.find("style");
    if(styleTag.length != 0){
        styleTag.text('');
    }else{
        headTag.append("<style></style>");
        styleTag = headTag.find("style");
    }
    console.log(styleTag);*/
    let output = '';
    const headElements = $('.head-tag .text-wrapper, .head-tag .selector-input, .head-tag .text-input');
    headElements.each(function(index) {
        const el = $(this)
        if(el.hasClass('text-wrapper')){
            output += el.text();
        }else if(el.hasClass('selector-input')){
            output += el.val().replace(/<[^>]*>?/gm, '');
        }else{
            output += el.val().replace(/<[^>]*>?/gm, '');
        }
    })
    headTag.html(output);
    /*
    const allElements = $(".j-0sdw_dd32-w3d_-fff3-2f-_F_Ff_Dfas *");
    allElements.each(function(index){
        const el = $(this)
        el.attr("style", "")
    })
    const styleBlocks = $(".style-holder:not(.css-template)");
    styleBlocks.each(function(i, styleBlock){
        styleBlock = $(styleBlock);

        const selector = styleBlock.find(".selector-input").val()
        const styles = styleBlock.find(".style");
        const selectedElements = $(document.querySelectorAll(".j-0sdw_dd32-w3d_-fff3-2f-_F_Ff_Dfas " + selector));

        if(!selector) return;

        selectedElements.each((j, selectedEl) =>{
            selectedEl = $(selectedEl);

            for(const style of styles){
                const styleText = selectedEl.attr("style") + $(style).find('.text-wrapper').text() + $(style).find('.text-input').val() + ";";
                selectedEl.attr("style", styleText);
            }
        })
    })
    */
}