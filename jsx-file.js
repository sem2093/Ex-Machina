var input = 'const getMessage = () => "Hello World";';
34	var output = Babel.transform(input, { presets: ['es2015'] }).code;
