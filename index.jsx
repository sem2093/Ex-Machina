import React from "react";
import ReactDOM from "react-dom";

const App = () => (
  <div>
    <div data-aos="fade-in" id="am">
      <div className="container">
        <h2 id="h2am">About<span className="auto-typeh2am"></span></h2>
      </div>
      <div className="container">
        <p id="pam">I'm<span className="auto-typepam"></span></p>
      </div>
    </div>
  </div>
);

ReactDOM.render(<App />, document.getElementById("amroot"));