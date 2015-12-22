module.exports = {
    // configuration
    entry: {
        bundle: './bundle.js'
    },
    output: {
        path: './dist',
 	filename: '[name].js'	
    },
    module: {
	loaders: [
	    // loder less
	    {
		test: /\.less$/,
		loader: 'style-loader!css-loader!less-loader!autoprefiexer'	
	    },
	    {
		test: /\.css$/,
		loader: 'style-loader!css-loader!autoprefixer'
	    },
	    {
		test: /\.(png|jpg)$/,
		loader: 'url-loader?limit=8192'
	    }
	]
    },
    resolve: {
	extensions: ['', '.js', '.json', '.coffee']
    }
};
