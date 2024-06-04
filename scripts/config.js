const CONFIG = {
    "show_warning": true,
    "attributes": [
        {
            "type": 0,
            "name": "class",
            "color": "heading"
        },
        {
            "type": 0,
            "name": "id",
            "color": "heading"
        },
        {
            "type": 0,
            "name": "value",
            "color": "block"
        },
        {
            "type": 1,
            "name": "method",
            "color": "block",
            "value": "POST"
        },
        {
            "type": 1,
            "name": "action",
            "color": "block",
            "value": "sample.php"
        },
        {
            "type": 2,
            "name": "disabled",
            "color": "block"
        },
        {
            "type": 2,
            "name": "selected",
            "color": "block"
        },
        {
            "type": 0,
            "name": "type",
            "color": "block"
        },
        {
            "type": 0,
            "name": "name",
            "color": "block"
        },
        {
            "type": 0,
            "name": "src",
            "color": "inline"
        },
        {
            "type": 0,
            "name": "alt",
            "color": "inline"
        },
        {
            "type": 0,
            "name": "href",
            "color": "inline"
        },
        {
            "type": 0,
            "name": "style",
            "color": "lists"
        },
        {
            "type": 0,
            "name": "width",
            "color": "text"
        },
        {
            "type": 0,
            "name": "height",
            "color": "text"
        },

    ],
    "styles": [
        {
            "type": 0,
            "name": "styleBlock",
            "color": "style-block-add-btn",
            "displayName": "Добави правило",
            "content": ``,
        },
        {
            "type": 1,
            "name": "background-color",
            "color": "block",
            "content": `<p><code class="text-primary" class="text-primary">background-color</code> е CSS свойство, което се използва за задаване на цвета на фона на елемент в уеб страницата. Това свойство позволява на уеб дизайнера да контролира визуалния стил и изглед на уеб елементите. За да се зададе цветът на фона, може да се използва името на цвета, RGB, RGBA, HEX или HSL стойности. Например:</p>
<pre>.bg-red {
    background-color: red;
}

.bg-blue {
    background-color: #3498db;
}

.bg-green {
    background-color: rgb(0, 255, 0);
}
</pre>
<p>В този пример са показани различни начини за задаване на цветове на фона на елементи чрез CSS.</p>`,
        },
        {
            "type": 1,
            "name": "color",
            "color": "block",
            "content": `<p><code class="text-primary">color</code> е CSS свойство, което се използва за задаване на цвета на текста в уеб страницата. Това свойство позволява на уеб дизайнера да контролира цвета на текста за подобряване на четимостта и визуалния стил на уебсайта. За да се зададе цветът на текста, може да се използва името на цвета, RGB, RGBA, HEX или HSL стойности. Например:</p>
<pre>.text-red {
    color: red;
}

.text-blue {
    color: #3498db;
}

.text-green {
    color: rgb(0, 255, 0);
}
</pre>
<p>В този пример са показани различни начини за задаване на цветове на текста чрез CSS.</p>
            `,
        },
        {
            "type": 1,
            "name": "opacity",
            "color": "block",
            "content": `<p><code class="text-primary">opacity</code> е CSS свойство, което се използва за задаване на прозрачността на елемент в уеб страницата. Това свойство позволява на уеб дизайнера да контролира степента на прозрачност на елементите, което може да бъде полезно за създаване на ефекти или подобряване на визуалния дизайн. Стойностите на <code class="text-primary">opacity</code> могат да бъдат между 0 (пълна прозрачност) и 1 (непрозрачност). Например:</p>
<pre>.transparent {
    opacity: 0.7; /* 30% прозрачност */
}
</pre>
<p>Този пример показва как може да се зададе прозрачност на елемент със стойност на <code class="text-primary">opacity</code> от 0.5 (50% прозрачност).</p>`,
        },
        {
            "type": 1,
            "name": "border",
            "color": "block",
            "content": `<p><code class="text-primary">border</code> е CSS свойство, което се използва за задаване на рамката около елемент в уеб страницата. Това свойство позволява на уеб дизайнера да контролира визуалния стил и изглед на рамката на елементите. За да се дефинира рамката, обикновено се използват параметри като широчина, стил и цвят. Например:</p><pre>.border {
    border: 2px solid #000000; /* 2 пиксела широчина, solid стил и черен цвят */
}
</pre>
<p>Този пример показва как може да се зададе рамка с широчина от 2 пиксела, solid стил и черен цвят на елемента.</p>
`,
        },
        {
            "type": 2,
            "name": "border-",
            "color": "block",
            "displayName": "border-*",
            "dirOptions": [
                "color",
                "style",
                "width",
                "radius"
            ],
            "content": ``,
        },
        {
            "type": 1,
            "name": "font-size",
            "color": "heading",
            "content": `<p><code class="text-primary">font-size</code> е CSS свойство, което се използва за задаване на размера на шрифта на текста в уеб страницата. Това свойство позволява на уеб дизайнера да контролира големината на шрифта за подобряване на четимостта и визуалния стил на уебсайта. Размерът на шрифта може да бъде зададен в пиксели, емове, проценти или други мерни единици. Например:</p>
<pre>.text-large {
    font-size: 24px; /* Големина на шрифта 24 пиксела */
}

.text-medium {
    font-size: 1.5em; /* Големина на шрифта 1.5 ема */
}

.text-small {
    font-size: 80%; /* Големина на шрифта 80% от размера на родителския елемент */
}
</pre>
<p>В този пример са показани различни начини за задаване на размера на шрифта на текста чрез CSS.</p>
`,
        },
        {
            "type": 1,
            "name": "font-family",
            "color": "heading",
            "content": `<p><code class="text-primary">font-family</code> е CSS свойство, което се използва за задаване на шрифтовете, които трябва да бъдат използвани за показване на текст в уеб страницата. Това свойство позволява на уеб дизайнера да избере конкретен шрифт или списък от шрифтове, които да бъдат използвани като алтернатива, ако желаният шрифт не е наличен на компютъра на потребителя. Например:</p>
<pre>.text-serif {
    font-family: "Times New Roman", Times, serif; /* Първо използвай "Times New Roman", след това Times и накрая серифен шрифт */
}

.text-sans-serif {
    font-family: Arial, Helvetica, sans-serif; /* Първо използвай Arial, след това Helvetica и накрая безсерифен шрифт */
}
</pre>
<p>В този пример са показани различни начини за задаване на шрифтове на текста чрез CSS, като се осигурява алтернатива за визуализация, ако първият избран шрифт не е наличен на устройството на потребителя.</p>
`,
        },
        {
            "type": 3,
            "name": "font-style",
            "color": "heading",
            "valOptions": [
                "normal",
                "italic",
                "oblique"
            ],
            "content": `<p><code class="text-primary">font-style</code> е CSS свойство, което се използва за задаване на стила на шрифта на текста в уеб страницата. Това свойство позволява на уеб дизайнера да контролира визуалния стил на шрифта, като например да го направи курсивно или наклонено. Стойностите, които може да приеме <code class="text-primary">font-style</code>, са <code class="text-primary">normal</code>, <code class="text-primary">italic</code> и <code class="text-primary">oblique</code>. Например:</p>
            <pre>.text-italic {
    font-style: italic; /* Курсивен стил на шрифта */
}

.text-oblique {
    font-style: oblique; /* Наклонен стил на шрифта */
}
</pre>
<p>В този пример са показани различни начини за задаване на стил на шрифта на текста чрез CSS.</p>
`,
        },
        {
            "type": 1,
            "name": "font-weight",
            "color": "heading",
            "content": `<p><code class="text-primary">font-weight</code> е CSS свойство, което се използва за задаване на дебелината на шрифта на текста в уеб страницата. Това свойство позволява на уеб дизайнера да контролира дебелината на шрифта, като например да го направи по-тежък или по-лек. Стойностите, които може да приеме <code class="text-primary">font-weight</code>, са числени стойности, ключови думи или комбинации от тях, като например <code class="text-primary">normal</code>, <code class="text-primary">bold</code>, <code class="text-primary">lighter</code> и <code class="text-primary">bolder</code>, както и числени стойности между 100 и 900. Например:</p>
<pre>.text-bold {
    font-weight: bold; /* По-тежък стил на шрифта */
}

.text-light {
    font-weight: lighter; /* По-лек стил на шрифта */
}

.text-numeric {
    font-weight: 700; /* Числена стойност за по-тежък стил на шрифта */
}
</pre>
<p>В този пример са показани различни начини за задаване на дебелината на шрифта на текста чрез CSS.</p>
`,
        },
        {
            "type": 1,
            "name": "text-decoration",
            "color": "heading",
            "content": `<p><code class="text-primary">text-decoration</code> е CSS свойство, което се използва за задаване на декорация на текста в уеб страницата. Това свойство позволява на уеб дизайнера да контролира визуалния стил на текста, като например да добави подчертаване, линии за прекъсване или да премахне декорациите. Стойностите, които може да приеме <code class="text-primary">text-decoration</code>, са <code class="text-primary">none</code>, <code class="text-primary">underline</code>, <code class="text-primary">overline</code>, <code class="text-primary">line-through</code> и <code class="text-primary">underline overline</code>. Например:</p>
<pre>.text-underline {
    text-decoration: underline; /* Подчертаване на текста */
}

.text-line-through {
    text-decoration: line-through; /* Линия за прекъсване на текста */
}

.text-none {
    text-decoration: none; /* Премахване на декорацията на текста */
}
</pre>
<p>В този пример са показани различни начини за задаване на декорация на текста чрез CSS.</p>
`,
        },
        {
            "type": 2,
            "name": "text-decoration-",
            "color": "heading",
            "displayName": "text-decoration-*",
            "dirOptions": [
                "color",
                "line",
                "style",
                "thickness"
            ],
            "content": ``,
        },
        {
            "type": 1,
            "name": "margin",
            "color": "text",
            "content": `<p><code class="text-primary">margin</code> е CSS свойство, което се използва за задаване на външния отстъп (разстоянието) около елемент в уеб страницата. Това свойство позволява на уеб дизайнера да контролира пространството между елемента и неговите съседи. Значенията на <code class="text-primary">margin</code> могат да бъдат положителни числа (в пиксели, емове и т.н.), отрицателни числа или ключови думи като <code class="text-primary">auto</code>. Например:</p>
<pre>.margin-top {
    margin-top: 20px; /* Отстъп отгоре с 20 пиксела */
}

.margin-horizontal {
    margin-left: 10px; /* Отстъп отляво с 10 пиксела */
    margin-right: 10px; /* Отстъп отдясно с 10 пиксела */
}

.margin-auto {
    margin: auto; /* Автоматично центриране на елемента */
}
</pre>
<p>В този пример са показани различни начини за задаване на външен отстъп на елементите чрез CSS.</p>
`,
        },
        {
            "type": 2,
            "name": "margin-",
            "color": "text",
            "displayName": "margin-*",
            "dirOptions": [
                "top",
                "bottom",
                "left",
                "right"
            ],
            "content": ``,
        },
        {
            "type": 1,
            "name": "padding",
            "color": "text",
            "content": `<p><code class="text-primary">padding</code> е CSS свойство, което се използва за задаване на вътрешния отстъп (разстоянието) в рамките на елемент в уеб страницата. Това свойство позволява на уеб дизайнера да контролира пространството между съдържанието на елемента и неговата външна граница. Значенията на <code class="text-primary">padding</code> могат да бъдат положителни числа (в пиксели, емове и т.н.). Например:</p>
            <pre>.padding-top {
    padding-top: 20px; /* Вътрешен отстъп отгоре с 20 пиксела */
}

.padding-horizontal {
    padding-left: 10px; /* Вътрешен отстъп отляво с 10 пиксела */
    padding-right: 10px; /* Вътрешен отстъп отдясно с 10 пиксела */
}

.padding-all {
    padding: 10px; /* Вътрешен отстъп от всички страни с 10 пиксела */
}
</pre>
<p>В този пример са показани различни начини за задаване на вътрешен отстъп на елементите чрез CSS.</p>
`,
        },
        {
            "type": 2,
            "name": "padding-",
            "color": "text",
            "displayName": "padding-*",
            "dirOptions": [
                "top",
                "bottom",
                "left",
                "right"
            ],
            "content": ``,
        },
        {
            "type": 1,
            "name": "width",
            "color": "text",
            "content": `<p><code class="text-primary">width</code> е CSS свойство, което се използва за задаване на широчината на елемент в уеб страницата. Това свойство позволява на уеб дизайнера да контролира големината на елемента в хоризонтална посока. Значенията на <code class="text-primary">width</code> могат да бъдат зададени в пиксели, проценти, емове, rem и други мерни единици. Например:</p>
<pre>.element {
    width: 300px; /* Ширина на елемента от 300 пиксела */
}

.container {
    width: 80%; /* Ширина на контейнера 80% от ширината на родителския елемент */
}

.full-width {
    width: 100%; /* Ширина на елемента, който заема цялата налична широчина на родителския елемент */
}
</pre>
<p>В този пример са показани различни начини за задаване на широчина на елементите чрез CSS.</p>
`,
        },
        {
            "type": 1,
            "name": "height",
            "color": "text",
            "content": `<p><code class="text-primary">height</code> е CSS свойство, което се използва за задаване на височината на елемент в уеб страницата. Това свойство позволява на уеб дизайнера да контролира големината на елемента във вертикална посока. Значенията на <code class="text-primary">height</code> могат да бъдат зададени в пиксели, проценти, емове, rem и други мерни единици. Например:</p>
<pre>.element {
    height: 200px; /* Височина на елемента от 200 пиксела */
}

.container {
    height: 50%; /* Височина на контейнера 50% от височината на родителския елемент */
}

.full-height {
    height: 100vh; /* Височина на елемента, който заема цялата височина на прозореца на браузъра */
}
</pre>
<p>В този пример са показани различни начини за задаване на височина на елементите чрез CSS.</p>
`,
        },
        {
            "type": 3,
            "name": "display",
            "color": "text",
            "valOptions": [
                "block",
                "inline",
                "inline-block",
                "none"
            ],
            "content": `<p><code class="text-primary">display</code> е CSS свойство, което се използва за контролиране на начина, по който елементът се показва в уеб страницата. Това свойство позволява на уеб дизайнера да промени основния тип на елемента, като например да го блоков елемент (block) или елемент в реда (inline). Някои от често използваните стойности за <code class="text-primary">display</code> са <code class="text-primary">block</code>, <code class="text-primary">inline</code>, <code class="text-primary">inline-block</code> и <code class="text-primary">none</code>. Например:</p>
<pre>.block-element {
    display: block; /* Елементът се показва като блоков елемент */
}

.inline-element {
    display: inline; /* Елементът се показва като елемент в реда */
}

.inline-block-element {
    display: inline-block; /* Елементът се показва като блоков елемент в реда */
}

.hidden-element {
    display: none; /* Елементът не се показва на страницата */
}
</pre>
<p>В този пример са показани различни начини за контролиране на начина на показване на елементите чрез CSS.</p>
`,
        }
    ],
    "tags": [
        {
            "type": 2,
            "name": "text",
            "color": "text",
            "displayName": "Добави текст",
            "content": ``,
        },
        {
            "type": 0,
            "name": "h1",
            "color": "heading",
            "content": `<p><code class="text-primary">&lt;h1&gt;</code> тагът се използва за определяне на най-важното заглавие на уеб страницата. Това е обикновено заглавието на страницата или на основната секция. Всяка уеб страница може да има само едно <code class="text-primary">&lt;h1&gt;</code> заглавие, което представлява най-важната информация относно съдържанието на страницата.</p>
            <pre>&lt;h1&gt;Добре дошли в моя уебсайт!&lt;/h1&gt;</pre>`,

        },
        {
            "type": 0,
            "name": "h2",
            "color": "heading",
            "content": `<p><code class="text-primary">&lt;h2&gt;</code> тагът се използва за дефиниране на второстепенни заглавия на уеб страницата или на отделни секции от съдържанието. Този таг обикновено се използва след <code class="text-primary">&lt;h1&gt;</code> тага и представлява по-малко важно заглавие от първостепенното. Второстепенните заглавия са полезни за организацията на информацията и улесняване на навигацията на потребителите на уеб страницата.</p>
            <pre>&lt;h2&gt;Тема 1&lt;/h2&gt;
&lt;p&gt;Тук можете да намерите информация относно тема 1.&lt;/p&gt;</pre>`,
        },
        {
            "type": 0,
            "name": "h3",
            "color": "heading",
            "content": `<p><code class="text-primary">&lt;h3&gt</code>; тагът се използва за дефиниране на третостепенни заглавия на уеб страницата или на отделни секции от съдържанието. Този таг обикновено се използва след <code class="text-primary">&lt;h2&gt</code>; тага и представлява по-малко важно заглавие от второстепенното. <code class="text-primary">&lt;h3&gt</code>; заглавията се използват за по-подробно подчертаване на различни секции или подразделения на страницата.</p>
            <pre>&lt;h3&gt;Подтема 1.1&lt;/h3&gt;
&lt;p&gt;Тук можете да намерите информация относно подтема 1.1.&lt;/p&gt;</pre>`,
        },
        {
            "type": 0,
            "name": "h4",
            "color": "heading",
            "content": `<p><code class="text-primary">&lt;h4&gt;</code> тагът се използва за дефиниране на четвъртостепенни заглавия на уеб страницата или на отделни секции от съдържанието. Този таг обикновено се използва след <code class="text-primary">&lt;h3&gt;</code> тага и представлява по-малко важно заглавие от третостепенното. <code class="text-primary">&lt;h4&gt;</code> заглавията могат да се използват за още по-детайлно подчертаване на различни секции или подразделения на страницата.</p>
            <pre>&lt;h4&gt;Подтема 1.1.1&lt;/h4&gt;
&lt;p&gt;Тук можете да намерите информация относно подтема 1.1.1.&lt;/p&gt;</pre>`,
        },
        {
            "type": 0,
            "name": "h5",
            "color": "heading",
            "content": `<p><code class="text-primary">&lt;h5&gt;</code> тагът се използва за дефиниране на петостепенни заглавия на уеб страницата или на отделни секции от съдържанието. Този таг обикновено се използва след <code class="text-primary">&lt;h4&gt;</code> тага и представлява по-малко важно заглавие от четвъртостепенното. <code class="text-primary">&lt;h5&gt;</code> заглавията могат да бъдат полезни за още по-детайлно подчертаване на различни секции или подразделения на страницата.</p>
            <pre>&lt;h5&gt;Подтема 1.1.1.1&lt;/h5&gt;
&lt;p&gt;Тук можете да намерите информация относно подтема 1.1.1.1.&lt;/p&gt;</pre>`,
        },
        {
            "type": 0,
            "name": "h6",
            "color": "heading",
            "content": `<p><code class="text-primary">&lt;h6&gt;</code> тагът се използва за дефиниране на шестостепенни заглавия на уеб страницата или на отделни секции от съдържанието. Този таг обикновено се използва след <code class="text-primary">&lt;h5&gt;</code> тага и представлява по-малко важно заглавие от петостепенното. <code class="text-primary">&lt;h6&gt;</code> заглавията могат да бъдат използвани за допълнително подчертаване на детайлите в различни секции или подразделения на страницата.</p>
            <pre>&lt;h6&gt;Подтема 1.1.1.1.1&lt;/h6&gt;
&lt;p&gt;Тук можете да намерите информация относно подтема 1.1.1.1.1.&lt;/p&gt;</pre>`,
        },
        {
            "type": 0,
            "name": "p",
            "color": "heading",
            "content": `<p><code class="text-primary">&lt;p&gt;</code> тагът се използва за дефиниране на параграф в HTML. Той е един от основните елементи за структуриране на текста на уеб страницата. Параграфите се използват за представяне на текстово съдържание, което се съдържа в отделна логическа единица. Обикновено параграфите са разделени с нов ред или отстъп, който се постига автоматично. Тагът &tl;p&gt; може да бъде използван в комбинация с други HTML елементи, за да се структурира и форматира текста по желание.</p>
            </p>
            <pre>&lt;p&gt;Текст в парагарф&lt;/p&gt;</pre>`,
        },
        {
            "type": 0,
            "name": "form",
            "color": "heading",
            "defaultAttrs": ["method", "action"],
            "content": `<p><code class="text-primary">&lt;form&gt;</code> е HTML елемент, който се използва за създаване на формуляри в уеб страницата. Формулярите позволяват на потребителите да въвеждат данни и да ги изпращат към сървъра за обработка. <code class="text-primary">&lt;form&gt;</code> обикновено съдържа различни видове входни полета, като текстови полета, полета за избор, бутони за изпращане и други. Важно е да се отбележи, че формата трябва да има атрибут <code class="text-primary">action</code>, който указва къде да се изпратят данните след натискането на бутона за изпращане, и атрибут <code class="text-primary">method</code>, който указва HTTP метода, който да се използва при изпращането на данните (най-често <code class="text-primary">GET</code> или <code class="text-primary">POST</code>). Например:</p>
<pre>&lt;form action="/submit_form" method="post"&gt;
    &lt;label for="username"&gt;Потребителско име:&lt;/label&gt;
    &lt;input type="text" id="username" name="username"&gt;&lt;br&gt;

    &lt;label for="password"&gt;Парола:&lt;/label&gt;
    &lt;input type="password" id="password" name="password"&gt;&lt;br&gt;

    &lt;input type="submit" value="Изпрати"&gt;
&lt;/form&gt;</pre>
            <p>В този пример се показва как се създава форма с две текстови полета за въвеждане на потребителско име и парола, както и бутон за изпращане на формата. Формата има атрибут <code class="text-primary">action</code>, който указва, че данните ще се изпратят към адреса "/submit_form", и атрибут <code class="text-primary">method</code>, който указва, че ще се използва HTTP методът "POST" за изпращане на данните.</p>`,
        },
        {
            "type": 1,
            "name": "input",
            "color": "heading",
            "defaultAttrs": ["type", "name"],
            "content": `<p><code class="text-primary">&lt;input&gt;</code> е HTML елемент, който се използва за създаване на различни видове входни полета в уеб формулярите. Този елемент може да бъде използван за създаване на текстови полета, полета за парола, полета за избор, радио бутони, флажета за отметка и други. Атрибутът <code class="text-primary">type</code> определя какъв вид входно поле да бъде създадено. Някои от най-често използваните стойности за <code class="text-primary">type</code> са <code class="text-primary">text</code>, <code class="text-primary">password</code>, <code class="text-primary">checkbox</code>, <code class="text-primary">radio</code>, <code class="text-primary">submit</code> и <code class="text-primary">button</code>. Например:</p>
            <pre>&lt;label for="username"&gt;Потребителско име:&lt;/label&gt;
&lt;input type="text" id="username" name="username"&gt;&lt;br&gt;

&lt;label for="password"&gt;Парола:&lt;/label&gt;
&lt;input type="password" id="password" name="password"&gt;&lt;br&gt;

&lt;input type="checkbox" id="subscribe" name="subscribe"&gt;
&lt;label for="subscribe"&gt;Абониране за бюлетин&lt;/label&gt;&lt;br&gt;

&lt;input type="radio" id="male" name="gender" value="male"&gt;
&lt;label for="male"&gt;Мъж&lt;/label&gt;
&lt;input type="radio" id="female" name="gender" value="female"&gt;
&lt;label for="female"&gt;Жена&lt;/label&gt;&lt;br&gt;

&lt;input type="submit" value="Изпрати"&gt;</pre>
            <p>В този пример се показват различни видове входни полета, създадени с <code class="text-primary">&lt;input&gt;</code> елемента. За всяко поле се използва атрибутът <code class="text-primary">type</code>, който определя какъв вид поле да бъде създадено.</p>
            `,
        },
        {
            "type": 0,
            "name": "button",
            "color": "heading",
            "content": `<p><code class="text-primary">&lt;button&gt;</code> е HTML елемент, който се използва за създаване на бутони в уеб страницата. Този елемент позволява на потребителите да извършват действия като натискане на бутон за изпращане на формуляра, стартиране на скриптове или пренасочване към други страници. Съдържанието на <code class="text-primary">&lt;button&gt;</code> елемента се задава между отварящия и затварящия таг и се изобразява като текст или съдържание на бутона в уеб страницата. Например:</p>
<pre>&lt;button type="button"&gt;Натисни ме&lt;/button&gt;</pre><p>В този пример се създава прост бутон със съдържание "Натисни ме". Атрибутът <code class="text-primary">type</code> е опционален и по подразбиране е <code class="text-primary">type="submit"</code>, което означава, че бутона ще изпрати формуляра, ако е част от него. За да се създаде обикновен бутон без такива функционалности, може да се използва <code class="text-primary">type="button"</code>.</p>
            `,
        },
        {
            "type": 0,
            "name": "select",
            "color": "heading",
            "content": `<p><code class="text-primary">&lt;select&gt;</code> е HTML елемент, който се използва за създаване на падащ списък в уеб формулярите. Този елемент позволява на потребителите да избират от опции, които се предлагат в списъка. Всяка опция се задава чрез елемента <code class="text-primary">&lt;option&gt;</code>, който може да бъде вложен вътре в <code class="text-primary">&lt;select&gt;</code>. Например:</p>
<pre>&lt;label for="cars"&gt;Избери автомобил:&lt;/label&gt;
&lt;select id="cars" name="cars"&gt;
    &lt;option value="volvo"&gt;Volvo&lt;/option&gt;
    &lt;option value="saab"&gt;Saab&lt;/option&gt;
    &lt;option value="fiat"&gt;Fiat&lt;/option&gt;
    &lt;option value="audi"&gt;Audi&lt;/option&gt;
&lt;/select&gt;</pre><p>В този пример се създава падащ списък за избор на автомобил с няколко опции. Всеки елемент <code class="text-primary">&lt;option&gt;</code> определя една опция в списъка със зададено стойност чрез атрибута <code class="text-primary">value</code> и съдържание, което се показва на потребителя.</p>
            `,
        },
        {
            "type": 0,
            "name": "option",
            "color": "heading",
            "content": `<p><code class="text-primary">&lt;option&gt;</code> е HTML елемент, който се използва за дефиниране на опции в падащ списък (<code class="text-primary">&lt;select&gt;</code>) в уеб формулярите. Този елемент се използва в комбинация с <code class="text-primary">&lt;select&gt;</code> за предоставяне на потребителите с възможност за избор от предварително зададени възможности. Например:</p>
<pre>&lt;select id="cars" name="cars"&gt;
    &lt;option value="volvo"&gt;Volvo&lt;/option&gt;
    &lt;option value="saab"&gt;Saab&lt;/option&gt;
    &lt;option value="fiat"&gt;Fiat&lt;/option&gt;
    &lt;option value="audi"&gt;Audi&lt;/option&gt;
&lt;/select&gt;</pre><p>В този пример се създава падащ списък за избор на автомобил с четири опции: Volvo, Saab, Fiat и Audi. Всеки елемент <code class="text-primary">&lt;option&gt;</code> определя една опция в списъка със зададено стойност чрез атрибута <code class="text-primary">value</code> и съдържание, което се показва на потребителя.</p>
            `,
        },
        {
            "type": 0,
            "name": "div",
            "color": "block",
            "content": `
            <p><code class="text-primary">&lt;div&gt;</code> тагът се използва за създаване на контейнер, който позволява групиране на различни елементи на уеб страницата. Той е един от най-често използваните HTML тагове за структуриране и оформление на уебсайтове. <code class="text-primary">&lt;div&gt;</code> тагът няма семантично значение, т.е. не носи информация за съдържанието си, но се използва за стилизиране и организиране на елементите на страницата. Обикновено се използва за групиране на други елементи, като текстови блокове, изображения, форми и други HTML елементи. Може да се приложат CSS стилове към <code class="text-primary">&lt;div&gt;</code> елементите чрез идентификация по клас или <code class="text-primary">id</code>.</p>
            <pre>&lt;div class="container"&gt;
    &lt;p&gt;Това е примерен текст.&lt;/p&gt;
    &lt;img src="example.jpg" alt="Примерна снимка"&gt;
&lt;/div&gt;</pre>`,
        },
        {
            "type": 0,
            "name": "table",
            "color": "block",
            "content": `<p><code class="text-primary">&lt;table&gt;</code> тагът се използва за създаване на таблица на уеб страницата. Този таг дефинира началото на таблицата, като определя контейнера за всички редове и колони на таблицата. За да добавите редове към таблицата, използвайте <code class="text-primary">&lt;tr&gt;</code> тага (таг за ред), а за да добавите колони към редовете, използвайте <code class="text-primary">&lt;td&gt;</code> тага (таг за клетка). Можете също така да използвате <code class="text-primary">&lt;th&gt;</code> тага (таг за заглавна клетка), за да маркирате заглавните клетки на таблицата.</p>
<pre>&lt;table border="1"&gt;
    &lt;tr&gt;
        &lt;th&gt;Заглавие на колона 1&lt;/th&gt;
        &lt;th&gt;Заглавие на колона 2&lt;/th&gt;
    &lt;/tr&gt;
    &lt;tr&gt;
        &lt;td&gt;Елемент 1,1&lt;/td&gt;
        &lt;td&gt;Елемент 1,2&lt;/td&gt;
    &lt;/tr&gt;
    &lt;tr&gt;
        &lt;td&gt;Елемент 2,1&lt;/td&gt;
        &lt;td&gt;Елемент 2,2&lt;/td&gt;
    &lt;/tr&gt;
&lt;/table&gt;</pre>`,
        },
        {
            "type": 0,
            "name": "thead",
            "color": "block",
            "content": `<p><code class="text-primary">&lt;thead&gt;</code> тагът се използва за дефиниране на заглавния ред в таблица на уеб страницата. Този таг обикновено се използва в комбинация с <code class="text-primary">&lt;table&gt;</code> и <code class="text-primary">&lt;tr&gt;</code> таговете, за да определи заглавния ред на таблицата. В заглавния ред обикновено се поставят заглавията на колоните в таблицата. Тагът <code class="text-primary">&lt;thead&gt;</code> е част от семантичната разметка на HTML, която помага за по-доброто разбиране на структурата на таблицата от програми и търсачки.</p>
<pre>&lt;table&gt;
    &lt;thead&gt;
        &lt;tr&gt;
            &lt;th&gt;Заглавие на колона 1&lt;/th&gt;
            &lt;th&gt;Заглавие на колона 2&lt;/th&gt;
        &lt;/tr&gt;
    &lt;/thead&gt;
    &lt;tbody&gt;
        &lt;tr&gt;
            &lt;td&gt;Елемент 1,1&lt;/td&gt;
            &lt;td&gt;Елемент 1,2&lt;/td&gt;
        &lt;/tr&gt;
        &lt;tr&gt;
            &lt;td&gt;Елемент 2,1&lt;/td&gt;
            &lt;td&gt;Елемент 2,2&lt;/td&gt;
        &lt;/tr&gt;
    &lt;/tbody&gt;
&lt;/table&gt;</pre>`,
        },
        {
            "type": 0,
            "name": "tbody",
            "color": "block",
            "content": `<p><code class="text-primary">&lt;tbody&gt;</code> тагът се използва за дефиниране на основното съдържание на таблица на уеб страницата. Този таг обикновено се използва в комбинация с <code class="text-primary">&lt;table&gt;</code> и <code class="text-primary">&lt;tr&gt;</code> таговете, за да определи редовете с основното съдържание на таблицата. В <code class="text-primary">&lt;tbody&gt;</code> тага се поставят всички редове, които не са част от заглавния ред (които са в <code class="text-primary">&lt;thead&gt;</code> тага). Тагът <code class="text-primary">&lt;tbody&gt;</code> е част от семантичната разметка на HTML, която помага за по-доброто разбиране на структурата на таблицата от програми и търсачки.</p>
            <pre>&lt;table&gt;
    &lt;thead&gt;
        &lt;tr&gt;
            &lt;th&gt;Заглавие на колона 1&lt;/th&gt;
            &lt;th&gt;Заглавие на колона 2&lt;/th&gt;
        &lt;/tr&gt;
    &lt;/thead&gt;
    &lt;tbody&gt;
        &lt;tr&gt;
            &lt;td&gt;Елемент 1,1&lt;/td&gt;
            &lt;td&gt;Елемент 1,2&lt;/td&gt;
        &lt;/tr&gt;
        &lt;tr&gt;
            &lt;td&gt;Елемент 2,1&lt;/td&gt;
            &lt;td&gt;Елемент 2,2&lt;/td&gt;
        &lt;/tr&gt;
    &lt;/tbody&gt;
&lt;/table&gt;</pre>`,
        },
        {
            "type": 0,
            "name": "tfoot",
            "color": "block",
            "content": `<p><code class="text-primary">&lt;tfoot&gt;</code> тагът се използва за дефиниране на подвала на таблица на уеб страницата. Този таг обикновено се използва в комбинация с <code class="text-primary">&lt;table&gt;</code> и <code class="text-primary">&lt;tr&gt;</code> таговете, за да определи редовете със съдържание за подвала на таблицата. В <code class="text-primary">&lt;tfoot&gt;</code> тага се поставят всички редове, които съдържат информация за подвала на таблицата. Тагът <code class="text-primary">&lt;tfoot&gt;</code> е част от семантичната разметка на HTML, която помага за по-доброто разбиране на структурата на таблицата от програми и търсачки.</p>
            <pre>&lt;table&gt;
    &lt;thead&gt;
        &lt;tr&gt;
            &lt;th&gt;Заглавие на колона 1&lt;/th&gt;
            &lt;th&gt;Заглавие на колона 2&lt;/th&gt;
        &lt;/tr&gt;
    &lt;/thead&gt;
    &lt;tbody&gt;
        &lt;tr&gt;
            &lt;td&gt;Елемент 1,1&lt;/td&gt;
            &lt;td&gt;Елемент 1,2&lt;/td&gt;
        &lt;/tr&gt;
        &lt;tr&gt;
            &lt;td&gt;Елемент 2,1&lt;/td&gt;
            &lt;td&gt;Елемент 2,2&lt;/td&gt;
        &lt;/tr&gt;
    &lt;/tbody&gt;
    &lt;tfoot&gt;
        &lt;tr&gt;
            &lt;td colspan="2"&gt;Общо: 2 елемента&lt;/td&gt;
        &lt;/tr&gt;
    &lt;/tfoot&gt;
&lt;/table&gt;</pre>`,
        },
        {
            "type": 0,
            "name": "tr",
            "color": "block",
            "content": `<p><code class="text-primary">&lt;tr&gt;</code> тагът се използва за дефиниране на ред в таблица на уеб страницата. Този таг обикновено се използва в комбинация с <code class="text-primary">&lt;table&</code>gt;, <code class="text-primary">&lt;thead&</code>gt;, <code class="text-primary">&lt;tbody&</code>gt; или <code class="text-primary">&lt;tfoot&</code>gt; таговете, за да определи редовете в съответната част на таблицата. Всеки <code class="text-primary">&lt;tr&gt;</code> таг дефинира отделен ред в таблицата. За да добавите клетки към реда, използвайте <code class="text-primary">&lt;td&gt;</code> тага (таг за клетка) за основното съдържание или <code class="text-primary">&lt;th&gt;</code> тага (таг за заглавна клетка), ако става въпрос за заглавен ред.</p>
            <pre>&lt;table&gt;
    &lt;tr&gt;
        &lt;th&gt;Заглавие на колона 1&lt;/th&gt;
        &lt;th&gt;Заглавие на колона 2&lt;/th&gt;
    &lt;/tr&gt;
    &lt;tr&gt;
        &lt;td&gt;Елемент 1,1&lt;/td&gt;
        &lt;td&gt;Елемент 1,2&lt;/td&gt;
    &lt;/tr&gt;
    &lt;tr&gt;
        &lt;td&gt;Елемент 2,1&lt;/td&gt;
        &lt;td&gt;Елемент 2,2&lt;/td&gt;
    &lt;/tr&gt;
&lt;/table&gt;</pre>`,
        },
        {
            "type": 0,
            "name": "th",
            "color": "block",
            "content": `<p><code class="text-primary">&lt;th&gt;</code> тагът се използва за дефиниране на заглавна клетка в таблица на уеб страницата. Този таг обикновено се използва в комбинация с <code class="text-primary">&lt;tr&gt;</code> тага (ред), за да определи заглавните клетки на таблицата. Заглавните клетки се използват за маркиране на заглавията на колоните или редовете в таблицата и се изобразяват с по-силен или по-изразителен стил в сравнение с обикновените клетки. За да добавите заглавна клетка към реда, използвайте <code class="text-primary">&lt;th&gt;</code> тага вместо <code class="text-primary">&lt;td&gt;</code> тага.</p>
            <pre>&lt;table&gt;
    &lt;tr&gt;
        &lt;th&gt;Заглавие на колона 1&lt;/th&gt;
        &lt;th&gt;Заглавие на колона 2&lt;/th&gt;
    &lt;/tr&gt;
    &lt;tr&gt;
        &lt;td&gt;Елемент 1,1&lt;/td&gt;
        &lt;td&gt;Елемент 1,2&lt;/td&gt;
    &lt;/tr&gt;
    &lt;tr&gt;
        &lt;td&gt;Елемент 2,1&lt;/td&gt;
        &lt;td&gt;Елемент 2,2&lt;/td&gt;
    &lt;/tr&gt;
&lt;/table&gt;</pre>`,
        },
        {
            "type": 0,
            "name": "td",
            "color": "block",
            "content": `<p><code class="text-primary">&lt;th&gt</code>; тагът се използва за дефиниране на заглавна клетка в таблица на уеб страницата. Този таг обикновено се използва в комбинация с <code class="text-primary">&lt;tr&gt</code>; тага (ред), за да определи заглавните клетки на таблицата. Заглавните клетки се използват за маркиране на заглавията на колоните или редовете в таблицата и се изобразяват с по-силен или по-изразителен стил в сравнение с обикновените клетки. За да добавите заглавна клетка към реда, използвайте <code class="text-primary">&lt;th&gt</code>; тага вместо <code class="text-primary">&lt;td&gt</code>; тага.</p>
            <pre>&lt;table&gt;
    &lt;tr&gt;
        &lt;th&gt;Заглавие на колона 1&lt;/th&gt;
        &lt;th&gt;Заглавие на колона 2&lt;/th&gt;
    &lt;/tr&gt;
    &lt;tr&gt;
        &lt;td&gt;Елемент 1,1&lt;/td&gt;
        &lt;td&gt;Елемент 1,2&lt;/td&gt;
    &lt;/tr&gt;
    &lt;tr&gt;
        &lt;td&gt;Елемент 2,1&lt;/td&gt;
        &lt;td&gt;Елемент 2,2&lt;/td&gt;
    &lt;/tr&gt;
&lt;/table&gt;</pre>`,
        },
        {
            "type": 0,
            "name": "b",
            "color": "inline",
            "content": `<p><code class="text-primary">&lt;b&gt;</code> тагът се използва за определяне на текст като полу-изразителен или полу-семантичен. Той обикновено се използва за подчертаване на текстови елементи, които са важни за визуалния стил на уеб страницата, но не непременно и за смисъла им. Въпреки че използването на <code class="text-primary">&lt;b&gt;</code> таг е приемливо за стилизиране на текст, се препоръчва използването на <code class="text-primary">&lt;strong&gt;</code> таг за текст, който е важен от семантична гледна точка.</p>
            <pre>&lt;p&gt;Това е &lt;b&gt;важен текст&lt;/b&gt; за вашата уеб страница.&lt;/p&gt;</pre>`,
        },
        {
            "type": 0,
            "name": "i",
            "color": "inline",
            "content": `<p><code class="text-primary">&lt;i&gt;</code> тагът се използва за определяне на текст като курсивен или за нагласяне на текста във визуален план. Той обикновено се използва за подчертаване на текстови елементи, които искаме да бъдат представени в курсивен шрифт. Въпреки че използването на <code class="text-primary">&lt;i&gt;</code> таг е приемливо за стилизиране на текст, се препоръчва използването на <code class="text-primary">&lt;em&gt;</code> таг за текст, който е важен от семантична гледна точка или който изразява емоцията на автора.</p>
            <pre>&lt;p&gt;Това е &lt;i&gt;курсивен текст&lt;/i&gt; за вашата уеб страница.&lt;/p&gt;</pre>`,
        },
        {
            "type": 0,
            "name": "a",
            "color": "inline",
            "defaultAttrs": ["href"],
            "content": `<p><code class="text-primary">&lt;a&gt;</code> тагът се използва за създаване на хипервръзки или връзки към други уеб страници, документи, изображения, видео файлове и други ресурси в интернет. Този таг е от съществено значение за навигацията в уеб страниците, като позволява на потребителите да преминават лесно от една страница към друга. Важният атрибут за този таг е <code class="text-primary">href</code>, който указва адреса на целевия ресурс. Освен това, може да се използват и други атрибути като <code class="text-primary">target</code> за определяне на прозорец или рамка, в който да се отвори връзката, както и <code class="text-primary">title</code> за добавяне на текст, който се показва при плъзгане с мишката над връзката.</p>
            <pre>&lt;a href="https://www.example.com" target="_blank" title="Отвори в нов прозорец"&gt;Посети примерния сайт&lt;/a&gt;</pre>`,
        },
        {
            "type": 0,
            "name": "strong",
            "color": "inline",
            "content": `<p><code class="text-primary">&lt;strong&gt;</code> тагът се използва за определяне на текст като важен или подчертан в контекста на уеб страницата. Той обикновено се използва за подчертаване на текстови елементи, които са от значение или съдържат важна информация. Когато браузърът срещне <code class="text-primary">&lt;strong&gt;</code> таг, текстът вътре в него се изобразява по-тежко или по-изразително, като по този начин се подчертава важността му за потребителя.</p>
            <pre>&lt;p&gt;Това е &lt;strong&gt;важен текст&lt;/strong&gt; за вашата уеб страница.&lt;/p&gt;</pre>`,
        },
        {
            "type": 1,
            "name": "img",
            "color": "inline",
            "defaultAttrs": ["src", "alt"],
            "content": `<p><code class="text-primary">&lt;img&gt;</code> тагът се използва за вмъкване на изображения в уеб страницата. Този таг е от съществено значение за визуалното представяне на уебсайта и позволява на потребителите да видят графичните елементи. Основният атрибут, който трябва да бъде посочен в <code class="text-primary">&lt;img&gt;</code> тага, е <code class="text-primary">src</code>, който указва пътя към изображението. Освен това, могат да се използват и други атрибути като <code class="text-primary">alt</code>, който предоставя текстово описание на изображението за по-добра достъпност и <code class="text-primary">width</code> и <code class="text-primary">height</code>, които определят размерите на изображението в пиксели.</p>
            <pre>&lt;img src="example.jpg" alt="Примерно изображение" width="300" height="200"&gt;</pre>`,
        },
        {
            "type": 0,
            "name": "ul",
            "color": "lists",
            "content": `<p><code class="text-primary">&lt;ul&gt;</code> тагът се използва за създаване на неорганизиран списък на уеб страницата. Този таг създава списък, в който всяко отделно елемент е маркиран с точка, чертица или друг символ. За да се добавят елементи към неорганизирания списък, използвайте <code class="text-primary">&lt;li&gt;</code> тага (таг за списъчен елемент) вътре в <code class="text-primary">&lt;ul&gt;</code> тага. Неорганизираните списъци са полезни за представяне на информация, която не е подредена в специфичен ред или й липсва ясна йерархия.</p>
            <pre>&lt;ul&gt;
    &lt;li&gt;Елемент 1&lt;/li&gt;
    &lt;li&gt;Елемент 2&lt;/li&gt;
    &lt;li&gt;Елемент 3&lt;/li&gt;
&lt;/ul&gt;</pre>`,
        },
        {
            "type": 0,
            "name": "ol",
            "color": "lists",
            "content": `<p><code class="text-primary">&lt;ol&gt;</code> тагът се използва за създаване на подреден списък на уеб страницата. Този таг създава списък, в който всяко отделно елемент е номериран, като обикновено се използват числата 1, 2, 3 и т.н. За да се добавят елементи към подредения списък, използвайте <code class="text-primary">&lt;li&gt;</code> тага (таг за списъчен елемент) вътре в <code class="text-primary">&lt;ol&gt;</code> тага. Подредените списъци са полезни за представяне на информация, която изисква специфичен ред или има ясна йерархия.</p>
            <pre>&lt;ol&gt;
    &lt;li&gt;Първи елемент&lt;/li&gt;
    &lt;li&gt;Втори елемент&lt;/li&gt;
    &lt;li&gt;Трети елемент&lt;/li&gt;
&lt;/ol&gt;</pre>`,
        },
        {
            "type": 0,
            "name": "li",
            "color": "lists",
            "content": `<p><code class="text-primary">&lt;li&gt;</code> тагът се използва за дефиниране на елемент в списък на уеб страницата. Този таг обикновено се използва в комбинация с <code class="text-primary">&lt;ul&gt;</code> или <code class="text-primary">&lt;ol&gt;</code> таговете за създаване на неорганизиран или подреден списък. Всяко използване на <code class="text-primary">&lt;li&gt;</code> таг дефинира отделен елемент в списъка. Той може да съдържа текст, снимка или други HTML елементи.</p>
            <pre>&lt;ul&gt;
    &lt;li&gt;Елемент 1&lt;/li&gt;
    &lt;li&gt;Елемент 2&lt;/li&gt;
    &lt;li&gt;Елемент 3&lt;/li&gt;
&lt;/ul&gt;
</pre>`,
        },
        {
            "type": 3,
            "name": "hr",
            "color": "text",
            "content": `<p><code class="text-primary">&lt;hr&gt;</code> тагът се използва за вмъкване на хоризонтална линия на уеб страницата. Този таг създава хоризонтална разделителна линия между два блока на съдържанието. Обикновено се използва за разграничаване на различни секции или теми на уеб страницата и подобрява четимостта и визуалния вид на страницата.</p>
            <pre>&lt;p&gt;Това е текст преди &lt;hr&gt; тага.&lt;/p&gt;
&lt;hr&gt;
&lt;p&gt;Това е текст след &lt;hr&gt; тага.&lt;/p&gt;
</pre>`,
        },
        {
            "type": 3,
            "name": "br",
            "color": "text",
            "content": `<p>&lt;br&gt; тагът се използва за вмъкване на пренасяне на ред в уеб страницата. Този таг създава нов ред в тексовото съдържание без да създава нов параграф. Той обикновено се използва, когато искаме да разделим текста на две линии или да поставим текст на нов ред, без да добавяме празно пространство между двата реда.</p>
            <pre>&lt;p&gt;Това е първи ред.&lt;br&gt;Това е втори ред.&lt;/p&gt;</pre>`,
        }
    ],
    "allowed_drops": {
        "text": [],
        "head": [],
        "h1": ["text", "i", "b", "strong", "br", "img", "a"],
        "h2": ["text", "i", "b", "strong", "br", "img", "a"],
        "h3": ["text", "i", "b", "strong", "br", "img", "a"],
        "h4": ["text", "i", "b", "strong", "br", "img", "a"],
        "h5": ["text", "i", "b", "strong", "br", "img", "a"],
        "h6": ["text", "i", "b", "strong", "br", "img", "a"],
        "div": ["text", "i", "b", "strong", "h1", "h2", "h3", "h4", "h5", "h6", "p", "br", "hr", "ul", "ol", "div", "img", "table", "a", "form"],
        "body": ["text", "i", "b", "strong", "h1", "h2", "h3", "h4", "h5", "h6", "p", "br", "hr", "ul", "ol", "li", "div", "img", "table", "thead", "tbody", "tfoot", "tr", "th", "td", "a", "form"],
        "delete": ["/"],
        "p": ["i", "b", "strong", "text", "br", "hr", "img", "a"],
        "button": ["i", "b", "strong", "text", "br", "hr", "img", "a"],
        "i": ["text", "a"],
        "b": ["text", "a"],
        "strong": ["text", "a"],
        "hr": [""],
        "ul": ["li"],
        "ol": ["li"],
        "li": ["text", "i", "b", "strong", "h2", "h3", "h4", "h5", "h6", "p", "br", "hr", "ol", "ul", "img", "table", "a", "form"],
        "form": ["text", "i", "b", "strong", "h2", "h3", "h4", "h5", "h6", "p", "br", "hr", "ol", "ul", "img", "table", "a", "button", "input", "textarea", "select"],
        "table": ["thead", "tbody", "tfoot", "tr"],
        "thead": ["tr"],
        "tbody": ["tr"],
        "tfoot": ["tr"],
        "tr": ["th", "td"],
        "th": ["text", "i", "b", "strong", "h2", "h3", "h4", "h5", "h6", "p", "br", "hr", "ol", "ul", "img", "table", "a", "form"],
        "td": ["text", "i", "b", "strong", "h2", "h3", "h4", "h5", "h6", "p", "br", "hr", "ol", "ul", "img", "table", "a", "form"],
        "a": ["text", "i", "b", "strong"],
        "select": ["option"],
        "option": ["i", "b", "strong", "text", "a"],
        "input": [],
        "h1_attr": ["class", "id", "style"],
        "h2_attr": ["class", "id", "style"],
        "h3_attr": ["class", "id", "style"],
        "h4_attr": ["class", "id", "style"],
        "h5_attr": ["class", "id", "style"],
        "h6_attr": ["class", "id", "style"],
        "div_attr": ["class", "id", "style"],
        "p_attr": ["class", "id", "style"],
        "i_attr": ["class", "id", "style"],
        "b_attr": ["class", "id", "style"],
        "strong_attr": ["class", "id", "style"],
        "hr_attr": ["class", "id", "style"],
        "br_attr": ["class", "id", "style"],
        "ul_attr": ["class", "id", "style"],
        "ol_attr": ["class", "id", "style"],
        "li_attr": ["class", "id", "style"],
        "table_attr": ["class", "id", "style"],
        "thead_attr": ["class", "id", "style"],
        "tbody_attr": ["class", "id", "style"],
        "tfoot_attr": ["class", "id", "style"],
        "tr_attr": ["class", "id", "style"],
        "th_attr": ["class", "id", "style"],
        "td_attr": ["class", "id", "style"],
        "a_attr": ["class", "id", "style", "href"],
        "img_attr": ["class", "id", "style", "src", "alt", "width", "height"],
        "form_attr": ["class", "id", "style", "method", "action"],
        "input_attr": ["class", "id", "style", "type", "name", "value", "disabled"],
        "button_attr": ["class", "id", "style", "type", "disabled"],
        "option_attr": ["class", "id", "style", "selected", "disabled", "value"],
        "select_attr": ["class", "id", "style", "disabled", "name"],
        "styleBlock": ["background-color", "color", "font-size", "font-family", "margin", "padding", "opacity", "display", "border", "margin-", "padding-", "border-", "font-style", "font-weight", "text-decoration", "text-decoration-", "width", "height"],
        "stylesheet": ["styleBlock"]
    }
}


const ALLOWED_DROPS = CONFIG.allowed_drops;
const Styles = CONFIG.styles;
const Tags = CONFIG.tags;
const Attributes = CONFIG.attributes;
//export { Styles, Tags, Attributes, ALLOWED_DROPS, CONFIG };