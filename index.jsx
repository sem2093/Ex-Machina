import React from "react";
import ReactDOM from "react-dom";

const header =<h1>Hello World</h1>;

const app = ( 
    <div> 
    {header}
    </div>
    );

ReactDOM.render(
app,
document.getElementById("root")
);

