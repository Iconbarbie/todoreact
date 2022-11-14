let count = 0;

let addone = () => {
    count++;
    renderCounterApp();
};  
let minusone= () => {
    count--;
    renderCounterApp();
};
let reset = () => {
    count = 0;
    renderCounterApp();
};
let appRoot = document.getElementById("app");

const renderCounterApp = () => {
    const template = (
        <div>
            <h1>Count: {count}</h1>
            <button onClick={addone}>+1</button>
            <button onClick={minusone}>-1</button>
            <button onClick={reset}>reset</button>
        </div>
    );
    ReactDOM.render(template,appRoot);
};

renderCounterApp();