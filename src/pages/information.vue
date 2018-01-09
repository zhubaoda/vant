<template>
	<div>
		<span>{{name}}</span>
		<span>{{sex}}</span>
		<br />
		<button @click="add">面向对象编程</button>
	</div>
</template>

<script>
	export default {
		name: 'information',
		data() {
			return {

			}
		},
		//在computed中计算出state变化的值
		computed:{
			name(){
				return this.$store.state.infor.name;
			},
			sex(){
				return this.$store.state.infor.sex;
			}
		},
		methods: {
			add(){
				//构造函数
				function Cat(name,color){
					this.name = name;
					this.color = color;
				}	
				//实例对象
				var cat1 = new Cat("大毛","黄色");
				var cat2 = new Cat("二毛","黑色");
//				这时候实例出来的cat1,cat2就有了name和color属性
//              cat1和cat2会自动含有一个constructor属性,指向构造函数
//              instanceof用于检查原型对象和实例对象之间的关系
//              console.log(cat1 instanceof Cat) true
//              如果在构造函数里面添加属性和方法没生成一个实例都必须是重复的内容,会多占用内存

//              每一个构造函数都有一个prototype属性，指向一个对象，这个对象的所有属性和方法都会被构造函数的实例继承
                Cat.prototype.type = "猫科动物";
                Cat.prototype.eat = function(){console.log('吃！！！！！')}
//				通过prototype属性得到的属性和方法,其实都是一个内存地址,指向prototype对象
                for(var prop in cat1){
                	   console.log(prop)
                }
                
//              对于new Vue同样也是这个道理，打个比方
//              写一个构造函数
                function Bue(obj){
                	   this.data = obj.data;
                	   this.methods = obj.methods
                }
                //new 一个实例出来
                var Bue1 = new Bue({
                	   data:function(){
                	   	  return {
                	   	  	  name:'Bue'
                	   	  }
                	   },
                	   methods:{
                	   	  myadd:function(){
                	   	  	  console.log(1111)
                	   	  }
                	   },
                	   created:function(){
                	   	
                	   }
                }) 
//              这些是vue源码中的一些方法，至于其他的原理请去看vue源码
//              1.初始化的入口，各种初始化工作
//                initMixin(Vue) 
//              2.数据绑定的核心方法，包括常用的$watch方法
//                stateMixin(Vue)
//              3.事件的核心方法，包括常用的$on，$off，$emit方法
//                eventsMixin(Vue)
//              4.生命周期的核心方法
//                lifecycleMixin(Vue)
//              5.渲染的核心方法，用来生成render函数以及VNode
//                renderMixin(Vue)
                
			}
		},
		created(){
			//触发action里面叫getInfor的方法
			this.$store.dispatch('getInfor')
		}
	}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
button{
	padding: 5px;
	border:1px solid #CCCCCC;
	color:red;
	cursor: pointer;
}
</style>