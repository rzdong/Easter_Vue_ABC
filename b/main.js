var app
window.onload = function (){
	//注册一个组件
	Vue.component('first-component', {
		template: '\
		<li>\
			<span>序号：{{i}} , 描述：{{value.text}}</span>\
			<button v-on:click="changeobject">/</button>\
			<button v-on:click="deleteobject">X</button>\
		</li>\
		',
		props: ['value','i'],
		methods: {
			deleteobject: function(){
				console.log(this.i)
				this.$emit('deleteobject', this.i)
			},
			changeobject: function(){
				this.$emit('changeobject', this.i)
			}
		},
		vuex: {

		}
	})
	
	//开启一个vuejs应用
	app = new Vue({
		el: '#app',
		data: {
			message: [
				{ text: "该配合你演出的我眼视而不见" },
				{ text: "在逼一个最爱你的人即兴表演" },
				{ text: "后面的词是啥来着。。。" },
				{ text: "好像是什么时候我们开始了" }
			],
			text_message: '',
			status: false,
			change_text: '',
			change_index: -1
		},
		methods: {
			addOne: function(){
				var obj = {}
				obj.text = this.text_message
				this.message.push(obj)
				this.text_message = ''
			},
			subThisObject: function(index){
				console.log(1)
				this.message.splice(index,1)
			},
			changeThisObject: function(index){
				this.status = true
				this.change_index = index
				this.change_text = this.message[index].text
			},
			done: function (){
				this.message[this.change_index].text = this.change_text
				this.change_text = ''
				this.status = false
				console.log(this.change_index)
			}
		},
		beforeCreate: function(){
			alert("实例初始化之后，数据观测和wathcer事件配置之前被调用")
		}/*,
		created: function(){
			alert("实例初始化之后，数据观测和wathcer事件，属性计算完成，el没有挂载")
		},
		beforeMount: function(){
			alert("挂载el之前调用，相关render函数首次调用")
		},
		mounted: function(){
			alert("开始挂载el")
		},
		beforeUpdate: function(){
			alert("数据更新时调用")
		},
		updated: function(){
			alert("由于数据更改，导致虚拟DOM重新")
		},
		beforeDestory: function(){
			alert("实例销毁前调用")
		},
		destoryed: function(){
			alert("实例销毁后调用")
		}*/
	})
}