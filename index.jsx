import React from "react";
import ReactDOM from "react-dom";

const App = () => (
    <div id="am">
      <div className="container">
        <h2 id="h2am">About Me</h2>
      </div>
      <div className="container">
        <p id="pam">I'm<span className="auto-typepam"></span></p>
      </div>
    </div>
);

ReactDOM.render(<App />, document.getElementById("amroot"));