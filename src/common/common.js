import Vue from 'vue'

//对于这个公共的js用于存储公共的数据
var common = new Vue({
	data: {
		value: 'It is public value',
		num: 12
	},
	methods: {
		//比如这里封装公共的方法，引入axios就可以，这里我没有引入axios先不做介绍
		commonGet() {

		},
		commonPost() {

		},
		commonAdd() {
			this.num = 12 + 1;
		}
	},
	created() {

	}
})

export default common;