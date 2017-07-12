module.exports = function(paths) {
	return {
		module: {
			rules: [
				{
					test: /\.(mp4)$/,
					include: paths,
					loader: 'file-loader',
					options: {
						name: 'video/[name].[ext]'
					},
				},
			],
		},
	};
};