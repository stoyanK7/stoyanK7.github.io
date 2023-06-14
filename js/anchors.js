/*jslint browser: true*/
/*global window */
(function () {
    "use strict";
    window.addEventListener("load", function () {
        var url = window.location.href;
        var position = url.indexOf("#");

        if (position !== -1) {
            url = url.substring(0, position);
        }

        const sources = document.querySelectorAll('div.source');
        [].forEach.call(sources, function (source) {
            const previousSibling = source.previousSibling.previousSibling;
            const id = previousSibling.id;
            if (!id) {
                return;
            }
            if (previousSibling.localName !== "div") {
                console.log("yes")
                return;
            }
            const link = "" + url + "#" + id + "";

            const a = document.createElement("a");
            a.setAttribute("href", link);

            const image = document.createElement("img");
            image.setAttribute("src", "images/anchor.png");

            const anchor = document.createElement("div");
            anchor.className = "anchor";

            a.appendChild(image);
            anchor.appendChild(a);
            source.insertBefore(anchor, source.firstChild);
        });

        const exampleDivs = document.querySelectorAll('p[id*="Example"]');
        [].forEach.call(exampleDivs, function (exampleDiv) {
            var name = exampleDiv.id;
            var link = "" + url + "#" + name + "";
    
            var a = document.createElement("a");
            a.setAttribute("href", link);
    
            var image = document.createElement("img");
            image.setAttribute("src", "images/anchor.png");
    
            var anchor = document.createElement("div");
            anchor.className = "anchor";
    
            a.appendChild(image);
            anchor.appendChild(a);
            exampleDiv.appendChild(anchor);
        });

        var anchors = document.getElementsByTagName("h2");
        [].forEach.call(anchors, function (anchorItem) {
            var name = anchorItem.childNodes[0].name;
            var link = "" + url + "#" + name + "";

            var a = document.createElement("a");
            a.setAttribute("href", link);

            var image = document.createElement("img");
            image.setAttribute("src", "images/anchor.png");

            var anchor = document.createElement("div");
            anchor.className = "anchor";

            a.appendChild(image);
            anchor.appendChild(a);
            anchorItem.appendChild(anchor);
        });

        var anchorsSubSection = document.getElementsByTagName("h3");
        [].forEach.call(anchorsSubSection, function (anchorItem) {
            var name;
            if (anchorItem.parentNode.id) {
                name = anchorItem.parentNode.id;
            } else {
                name = anchorItem.childNodes[0].name;
            }
            var link = "" + url + "#" + name + "";

            var a = document.createElement("a");
            a.setAttribute("href", link);

            var image = document.createElement("img");
            image.setAttribute("src", "images/anchor.png");

            var anchor = document.createElement("div");
            anchor.className = "anchor";

            a.appendChild(image);
            anchor.appendChild(a);
            anchorItem.appendChild(anchor);
        });
    });
}());

