var input = 'const getMessage = () => "Hello World";';
var output = Babel.transform(input, { presets: ['es2015'] }).code;

const App = ({ name }) => {
  return (
    <h1>{name}</h1>
  );
};

ReactDOM.render(
  <App name="React Debug" />,
  document.getElementById('app')
);
