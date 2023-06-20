const App = ({ name }) => {
  return (
    <h1>{name}</h1>
  );
};

ReactDOM.render(
  <App name="React Debug" />,
  document.getElementById('app')
);