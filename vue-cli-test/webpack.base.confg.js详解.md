	module.export = {
	    // 编译入口文件
	    entry: {},
	    // 编译输出路径
	    output: {},
	    // 一些解决方案配置
	    resolve: {},
	    resolveLoader: {},
	    module: {
	        // 各种不同类型文件加载器配置
	        loaders: {
	        ...
	        ...
	        // js文件用babel转码
	        {
	            test: /\.js$/,
	            loader: 'babel',
	            include: projectRoot,
	            // 哪些文件不需要转码
	            exclude: /node_modules/
	        },
	        ...
	        ...
	        }
	    },
	    // vue文件一些相关配置
	    vue: {}
	}