var input = 'const getMessage = () => "Hello World";';
var output = Babel.transform(input, { presets: ['es2015'] }).code;

//second hello world 
const getMessage = () => "Hello World";
document.getElementById('op2').innerHTML = getMessage(); 

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
<h2> About Me </h2>,
document.getElementById("root")
  );

const eduh =  <h2>Education</h2> ;
const edup = <p>I graduated from Alta High School in Sandy, UT in 2012 </p> ;

const edu = (
  <div>
  {eduh}
{edup} 
</div>
  );

ReactDOM.render (
  edu,
  document.getElementById("rootedu")
  );
  
  


