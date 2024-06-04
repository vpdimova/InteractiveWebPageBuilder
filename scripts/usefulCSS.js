//import { Styles } from './config.js';

const tabButtonsContainter = document.getElementById("v-pills-tab");
const tabContentContainter = document.getElementById("v-pills-tabContent");
let isFirst = true;
for (const style of Styles) {
    if (style.name == "styleBlock" || style.name.endsWith("-")) continue;
    $(tabButtonsContainter).append(`
    <div><button class="nav-link ${isFirst? "active" : ""}" id="v-pills-${style.name}-tab" data-bs-toggle="pill" data-bs-target="#v-pills-${style.name}"
                        type="button" role="tab" aria-controls="v-pills-${style.name}" aria-selected="true">${style.name}</button></div>
    `);
    $(tabContentContainter).append(`
    <div class="tab-pane fade show ${isFirst? "active" : ""}" id="v-pills-${style.name}" role="tabpanel" aria-labelledby="v-pills-${style.name}-tab">
    <h1>${style.name} стил</h1>
    ${style.content}
    </div>
    `)
    isFirst = false;
}
