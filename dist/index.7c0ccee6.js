const parent = React.createElement('div', {
    id: 'parent'
}, React.createElement('div', {
    id: 'child'
}, [
    React.createElement('h1', {}, "I am an h1 tag"),
    React.createElement('h2', {}, "I am an h2 tag")
]), React.createElement("div", {
    id: "child2"
}, [
    React.createElement("h1", {}, "I am an h1 tag"),
    React.createElement("h2", {}, "I am an h2 tag")
]));
// const heading = React.createElement('h1',{id:"Heading"},"Hello From React !");
console.log(parent);
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(parent);

//# sourceMappingURL=index.7c0ccee6.js.map
