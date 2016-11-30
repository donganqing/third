
define( function( require, exports, module ){
	//通过require引入依赖。
	//var  $ = require( "jquery" );
	//或者通过 module.exports 提供整个接口
	
	var b = require( './b.js' );//调用js文件
	
	require( 'jquery' );
	
	require( '../css/c.css' );//调用css文件
	
	require( 'handlebars' );
	
	var tpl = require( '../h.html' );
	
	var compilerTpl = Handlebars.compile( tpl );
	
	$( document.body ).append(compilerTpl({name:'Hi Henry!'}))
	
	exports.fn = function(){
		console.log("I am in module a.js");
		b.bfn();//用函数名加载b.js 文件里的内容
		b.cfn();
	}
	

})
