module.exports = {
	devServer: {
		open: false,
		port: 8080,
		https: false,
		proxy: {
			'api': {
				target: 'http://localhost:8088/',
				ws: true,
				changeOrigin: true,
				pathRewrite: {
					'^/api':''
				}
			}
		}
	}
};