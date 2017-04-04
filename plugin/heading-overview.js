/**
 * Created by Leonhard Gahr on 04.04.2017.
 */
init();

function init() {
    var seperator = " - ";

    var headings = document.getElementsByClassName("heading-overview");

    var reveal = document.getElementById("reveal");

    var body = document.getElementsByClassName("reveal")[0];

    var bodyChild = body.children[0];

    var topicsElement = document.createElement("div");
    topicsElement.className = "topics";
    topicsElement.setAttribute("style", "text-align: center");

    var headElement = document.createElement("div");
    headElement.className = "head";
    headElement.setAttribute("style", "margin-top: 90vh; margin-bottom: 0; z-index:500;");


    var textElements = [];

    for (var key in headings) {
        if (headings.hasOwnProperty(key) && headings[key].nodeType === 1) {
            var element = document.createElement("h4");
            element.innerText = headings[key].innerText;
            element.className = headings[key].innerText.replace(" ", "").toLowerCase();

            var seperatorElement = document.createElement("h4");
            seperatorElement.innerText = seperator;

            textElements.push(element, seperatorElement)
        }
    }

    textElements.pop();

    for (var index in textElements) {
        headElement.insertBefore(textElements[index], headElement.nextSibling)
    }

    topicsElement.insertBefore(headElement, topicsElement.nextSibling);

    bodyChild.parentNode.insertBefore(topicsElement, bodyChild.nextSibling);

    addStyle();

    addRevealListener()
}

function addStyle() {
    var css = '.head h4{color:gray;display:inline;}.head .active{color:#000;-webkit-transition:color 2s;-moz-transition:color 2s;-ms-transition:color 2s;-o-transition:color 2s;transition:color 2s}.head .inactive{color:gray;-webkit-transition:color 2s;-moz-transition:color 2s;-ms-transition:color 2s;-o-transition:color 2s;transition:color 2s}.hidden{display: none;}',
        head = document.head || document.getElementsByTagName('head')[0],
        style = document.createElement('style');

    style.type = 'text/css';
    if (style.styleSheet) {
        style.styleSheet.cssText = css;
    } else {
        style.appendChild(document.createTextNode(css));
    }

    head.appendChild(style);
}

function addRevealListener() {
    var element;
    var elementClasses;

    var hIndex;
    Reveal.addEventListener('slidechanged', function (event) {
        if (hIndex !== undefined && hIndex !== Reveal.getIndices().h) {
            element.className = elementClasses + " inactive";
        }
        var h = Reveal.getIndices().h;
        var v = Reveal.getIndices().v;


        var revealChilds = Reveal.getSlide(h, v).children;
        for (var index in revealChilds) {
            if (revealChilds[index].nodeType === 1) {
                if (revealChilds[index].className.includes("heading-overview")) {
                    if (element !== undefined) {
                        element.className = elementClasses;

                        element = document.getElementsByClassName(revealChilds[index].innerText.replace(" ", "").toLowerCase())[0];
                        elementClasses = element.className;
                        element.className = elementClasses + " active"
                    } else {
                        element = document.getElementsByClassName(revealChilds[index].innerText.replace(" ", "").toLowerCase())[0];
                        elementClasses = element.className;
                        element.className = elementClasses + " active"
                    }
                    hIndex = h
                }
            }
        }
    });

    Reveal.addEventListener( 'overviewshown', function( event ) { document.getElementsByClassName("topics")[0].className = "topics hidden"} );
    Reveal.addEventListener( 'overviewhidden', function( event ) { document.getElementsByClassName("topics")[0].className = "topics"} );
}