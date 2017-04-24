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

    var headElement = document.createElement("div");
    headElement.className = "head";


    var textElements = [];

    for (var key in headings) {
        if (headings.hasOwnProperty(key) && headings[key].nodeType === 1) {
            var element = document.createElement("h4");
            element.innerText = headings[key].innerText;
            element.className = headings[key].innerText.replace(" ", "").toLowerCase() + " heading-preview";

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

    addRevealListener();

    if (Reveal.getCurrentSlide().classList.contains("no-heading-overview")) {
        document.getElementsByClassName("topics")[0].classList.add("hidden");
    }
}

function appendClass(element, newClass) {
    element.className = element.className + " " + newClass
}

function addRevealListener() {
    var elements = document.getElementsByClassName("heading-overview");
    var indices = [];
    for (var i = 0; i < elements.length; i++) {
        var slideIndices = Reveal.getIndices(elements[i].parentNode).h;
        appendClass(document.getElementsByClassName("heading-preview")[i], slideIndices);
        indices.push(slideIndices);
    }

    var recentElement;

    Reveal.addEventListener('slidechanged', function () {
        if (Reveal.getCurrentSlide().classList.contains("no-heading-overview")) {
            document.getElementsByClassName("topics")[0].classList.add("hidden")
        } else {
            document.getElementsByClassName("topics")[0].classList.remove("hidden")
        }
        if (indices.indexOf(Reveal.getIndices().h) !== -1) {
            if (recentElement) {
                recentElement.classList.remove("active");
                recentElement.classList.add("inactive")
            }
            var element = document.getElementsByClassName("" + Reveal.getIndices().h)[0];
            recentElement = element;
            if (!element.classList.contains("active")) {
                element.classList.remove("inactive");
                element.classList.add("active");
            }
        } else {
            if (recentElement) {
                recentElement.classList.remove("active");
                recentElement.classList.add("inactive")
            }
        }
    });

    Reveal.addEventListener('overviewshown', function () {
        document.getElementsByClassName("topics")[0].className = "topics hidden"
    });
    Reveal.addEventListener('overviewhidden', function () {
        document.getElementsByClassName("topics")[0].className = "topics"
    });
}