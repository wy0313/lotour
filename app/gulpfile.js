var gulp = require( "gulp" ),
	less = require( "gulp-less" ),				//less编译
	minify = require( "gulp-minify-css" ), 		//压缩css
	livereload = require( "gulp-livereload" ),	//自动刷新
	connect = require( 'gulp-connect' ),		//服务
	rename = require( "gulp-rename" ),			//重命名
	concat = require( 'gulp-concat' ),			//合并文件
	amd = require("amd-optimize"),				//
	uglify = require('gulp-uglify'),			//压缩js		
	rev = require('gulp-rev'),					//加密
	collector = require('gulp-rev-collector'),
	mockServer = require('gulp-mock-server');	//数据

	