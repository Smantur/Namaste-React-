//returns react element i.e Sample JS object
// const heading = React.createElement("h1", { id: "heading", class: "head" }, "Namaste React");
//creation of nested element
/**
 * <div id="parent">
  <div id="child">
  <h1></h1>
  <h2></h2>
 
  </div>
 * </div>
 * 
 * 
 */
const element = React.createElement("div",
    { id: "parent" }, [React.createElement("div",
        { id: "child" }, [React.createElement("h1",
            {}, "I am H1"), React.createElement("h2", {}, "I am h2 tag")]), React.createElement("div",
                { id: "child2" }, [React.createElement("h1",
                    {}, "I am H1"), React.createElement("h2", {}, "I am h2 tag")])])



const root = ReactDOM.createRoot(document.getElementById("root"));
//takes the Js object and create resp element and put into the dom
root.render(element)