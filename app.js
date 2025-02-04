import React from "react";
import ReactDOM from "react-dom/client";

// const parent = React.createElement(
//     'div',
//     {id:'parent'},
//     React.createElement(
//         'div',
//         {id:'child'},
//     [React.createElement('h1',{},"I am an h1 tag"),React.createElement('h2',{},"I am an h2 tag")]
// ),React.createElement("div",{id:"child2"},[React.createElement("h1",{},"I am an h1 tag"),React.createElement("h2",{},"I am an h2 tag")]
// ));

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(parent);

// React.createElement => Object => HTMLElement(render)

const heading = React.createElement("h1",{id:"heading"},"Namaste React");
const root = ReactDOM.createRoot(document.getElementById('root'));

// JSX

const jsxHeading = <h1>This is the jsx heading</h1>
root.render(jsxHeading);
console.log(jsxHeading);