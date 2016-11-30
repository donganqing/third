
define( function( require, exports, module ){
	//通过require引入依赖。
	//var  $ = require( "jquery" );
	//或者通过 module.exports 提供整个接口
	exports.bfn = function(){
		console.log("I am in module b.js");
		
	}
	
	exports.cfn = function(){
		var oP=document.getElementById("box");
		oP.onclick = function(){
			alert(1);
		}
	}
	
	
})