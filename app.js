// const heading = React.createElement("h1", {id:"heading", xyz:"xyz"}, "Hellow world from react js");
// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(heading);

// const parrent = React.createElement("div", {id:"parrent"}, React.createElement("div", {id:"child"}, React.createElement("h1", {id:"heading"}, "Im from js nessted")))




const parrent = React.createElement("div", { id: "parrent" },
    [React.createElement("div", { id: "child" },
        [React.createElement("h1", { id: "heading" }, "Im h1 from js nessted"),
        React.createElement("h2", { id: "heading" }, "Im h2 from js nessted")
        ]), React.createElement("div", { id: "child2" },
        [React.createElement("h1", { id: "heading" }, "Im h1 from js nessted"),
        React.createElement("h2", { id: "heading" }, "Im h2 from js nessted")
        ])])

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parrent);