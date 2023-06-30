//babel.transform
var input = 'const getMessage = () => "Hello World";';
var output = Babel.transform(input, { presets: ['es2015'] }).code;

// hello world 
const getMessage = () => "Hello World";

//react example from mimo

ReactDOM.render( 
<div>
   <h1>Hi I'm Steven Miller & I'm a Developer.</h1>
  </div>,
  document.getElementById("header")
);

ReactDOM.render( 
<div>
  <div>
    <h2>About Me</h2>
    </div>
    <div>
      <p>Im a motivated self-learner constantly seeking to improve.</p>
      </div>
  <div>
     <h2>Education</h2>
    </div>
    <div>
     <p>I graduated from Alta High School in Sandy, UT in 2012. After highschool I studied at Brigham Young University in Provo,Ut.</p>
  </div>
    <div>
    <h2>Experience</h2>
    </div>
    <div>
  <p> Ive worked as a Master Fire Alarm Technician, a Customer Service Representative and a Seafood Processor.</p>
    </div>
    <div>
      <h2>Certificates</h2>
      </div>
       <iframe src="JavaScriptcertificate.pdf"></iframe>
      <iframe src="HTML certification .pdf"></iframe>
      <iframe src="SQLcertificate.pdf"></iframe>
 </div>,

document.getElementById("main")
  );
  
ReactDOM.render( 
  <div>
    <div>
   <h3>Contact:</h3>
  </div>
    <div>
   <p>sem2093@gmail.com</p>
  </div>
    <div>
   <p>937-474-9664</p>
  </div>
<div>
   <p>&copy; Steve Miller 2023. </p>
  </div>
  </div>,
  document.getElementById("footer")
);






  


