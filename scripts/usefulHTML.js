//import { Tags } from './config.js';

const tabButtonsContainter = document.getElementById("v-pills-tab");
const tabContentContainter = document.getElementById("v-pills-tabContent");
let isFirst = true;
for (const tag of Tags) {
    if (tag.name == "text") continue;
    $(tabButtonsContainter).append(`
    <div><button class="nav-link ${isFirst? "active" : ""}" id="v-pills-${tag.name}-tab" data-bs-toggle="pill" data-bs-target="#v-pills-${tag.name}"
                        type="button" role="tab" aria-controls="v-pills-${tag.name}" aria-selected="true">&lt;${tag.name}&gt;</button></div>
    `);
    $(tabContentContainter).append(`
    <div class="tab-pane fade show ${isFirst? "active" : ""}" id="v-pills-${tag.name}" role="tabpanel" aria-labelledby="v-pills-${tag.name}-tab">
    <h1>&lt;${tag.name}&gt; таг</h1>
                        ${tag.content}
                    </div>
    `);
    isFirst = false;

}

