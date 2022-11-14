// JSX - javascript xml
let app = {
    title: 'Todo Decision',
    subtitle:'things to focus on',
    options:["baseball", "soccer", "tennis", "golf","sports"],
};

let template = (
    <div>
       <h1>{app.title}</h1>
       {app.subtitle && <p>{app.subtitle}</p>}
       <p>{app.options.length > 0 ? "here are your options" : "no options here"}</p>
        <ul>
            <li>{app.options[0]}</li>
        </ul>
        <h1>landscape</h1>
        <img src ="./image/dog-3320301-1920-741x486.jpg"alt=""></img>
    </div>
);

let count = 0;
const addone = () => {
    console.log("addone");
};

const minusone = () => {
    console.log("minusone");
};
const reset = () => {
    console.log("reset");
};

let templateTwo = (
    <div>
        <h1>Count:{count}</h1>
        <button onClick={addone}>+1</button>
        <button onClick={minusone}>-1</button>
        <button onClick={reset}>reset</button>
    </div>
);
//let appRoot = document.getElementById("app");

//ReactDOM.render(template, appRoot);
