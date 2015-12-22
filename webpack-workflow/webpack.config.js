module.exports = {
    // configuration
    context: __dirname + '/src',
    entry: {
        bundle: './bundle.js'
    },
    output: {
        path: __dirname + '/dist',
 	filename: '[name].js'	
    },
    module: {
	loaders: [
	    // loder less
	    {
		test: /\.less$/,
		loader: 'style-loader!css-loader!less-loader'	
	    },
	    {
		test: /\.css$/,
		loader: 'style-loader!css-loader'
	    },
	    {
		test: /\.(png | jpg)$/,
		loader: 'url-loader?limit=8192'
	    }
	]
    }
};
