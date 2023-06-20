var input = 'const getMessage = () => "Hello World";';
var output = Babel.transform(input, { presets: ['es2015'] }).code;


const getMessage = () => "Hello World";
document.getElementById('op2').innerHTML = getMessage(); 


