import React from "react"
import ReactDOM from "react-dom/client"


//const element =React.createElement("h1",{id:"heading"},"Namaste React")
// const element = (<h1 className="head"
//     id="heading">Namaste React</h1>)
//jsx--> javascript syntax --> convert to React element by Babel(comes along with parcel) package  which is then given to render method to create actual HTML 
//const root = ReactDOM.createRoot(document.getElementById("root"));

//JSX FUNCTIONAL COMPONENT
/**
 * Any functions those are returning Jsx/react Element are referred as functional component
 */
const Title = () => (//if JSX is multiple line use "()""
    <h1>Hi i am Title</h1>
);
const Heading = () => (//<Title/> or {Title}
    <div class="container">
        <Title />

        <h2>Hi i am h2 heading</h2>
    </div>
)
const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(<Heading />)//rendering component
//root.render(element)//rendering React element