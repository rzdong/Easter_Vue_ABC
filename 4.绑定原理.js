var a= {b: 0}
Object.defineProperty(a,"b",{

	set:function(newValue){
		console.log("调用了set函数");
		console.log("赋值操作,b新值是"+ newValue);
		b = newValue;
	},

	get:function(){
		console.log("调用了get函数");
		console.log("取值操作，返回b的值");
		return b;
	}
})
a.b = 15;
a.b;
console.log(a.b)
