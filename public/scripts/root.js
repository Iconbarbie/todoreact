"use strict";

var count = 0;

var addone = function addone() {
    count++;
    renderCounterApp();
};
var minusone = function minusone() {
    count--;
    renderCounterApp();
};
var reset = function reset() {
    count = 0;
    renderCounterApp();
};
var appRoot = document.getElementById("app");

var renderCounterApp = function renderCounterApp() {
    var template = React.createElement(
        "div",
        null,
        React.createElement(
            "h1",
            null,
            "Count: ",
            count
        ),
        React.createElement(
            "button",
            { onClick: addone },
            "+1"
        ),
        React.createElement(
            "button",
            { onClick: minusone },
            "-1"
        ),
        React.createElement(
            "button",
            { onClick: reset },
            "reset"
        )
    );
    ReactDOM.render(template, appRoot);
};

renderCounterApp();
