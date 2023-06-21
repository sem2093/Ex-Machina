//babel.transform
var input = 'const getMessage = () => "Hello World";';
var output = Babel.transform(input, { presets: ['es2015'] }).code;

// hello world 
const getMessage = () => "Hello World";
document.getElementById('output').innerHTML = getMessage(); 


//react example from jsanywhere
const App = ({ name }) => {
  return (
    <h1>{name}</h1>
  );
};

ReactDOM.render(
  <App name="React Debug" />,
  document.getElementById('app')
);
//react example from mimo

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
 </div>,

document.getElementById("root")
  );







  


