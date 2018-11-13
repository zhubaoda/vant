<style lang="less" scoped>
  .display {
  	display: flex;
  	flex-direction: row;
  	align-items: center;
  	justify-content: center;
  }
  .border-radius(@radius) {
  	border-radius: @radius;
  }
  .border(@color) {
  	border: 1px solid @color;
  }
  /*参数混合*/
  .how-box(@width, @height) {
  	width: @width;
  	height: @height;
  }
  /*定义变量*/
  @base-margin: 5px;
  @blue: #369;
  /*嵌套规则*/
  .myless{
  	height: 100vh;
  	width: 100%;
  	.box1 {
  	  .display; /*混合.display选择器嵌套到.myless选择器里面;*/
  	  .how-box(300px, 50px);
  	  .border(#ccc);
  	  .border-radius(10px);
  	}
  	.box2 {
  	   margin-top: @base-margin * 2; /*运算*/
  	   @extend .box1; /*继承， 但是失效了，不知道为什么*/
  	   .box1; /*这里就直接混合吧*/
  	}
  	.box3 {
  	   .box1;
  	   margin-top: @base-margin * 2;
  	   background: linear-gradient(left, lighten(@blue, 10%) 0%, @blue 100%);/*颜色函数*/
  	}
  }
</style>

<template>
  <div class="myless">
  	<div class="box1">
  		<span>less例子1</span>
  	</div>
  	<div class="box2">
  	    <span>less例子2</span>
  	</div>	
  	<div class="box3"></div>
  </div>
</template>

<script>
  export default {
    data () {
    	  return {
    	  	
    	  }
    },
    methods: {
    	  
    },
    mounted () {
    	  // less和sass的特点  https://www.w3cplus.com/css/an-introduction-to-less-and-comparison-to-sass.html
    	  // 混合， 参数混合， 嵌套规则， 运算（css的数学计算），颜色功能，命名空间，作用域，js表达式
    	   
    	  // 1. less 定义变量用@， sass 用$
    	  
    	  // 2. less的混合 你定义一个样式，在另外一个选择器中直接写入这个选择器名字加分号即可；
    	  //    sass的混合 你要混入的样式选择器需要在前面加一个@minix， 混入到的地方要在前面加@include（都不需要加.）
    	  
    	  // 3. sass的运算要比less更加专业，他已经可以加单位进行计算了
    	  
    	  // 4. sass的颜色函数比less要多， 这里常用的lighten和darken
    	  
    	  // 5. sass 支持条件语句和控制
    	  
    	  // 6. 命名空间，就是一个公共样式的分组，在某个选择器中可以直接去调用它
    	  
    	  // 7. 作用域类似于js，定义的全局变量全局都可以使用，局部的只能局部使用， less在局部定义一个
    	  //    和全局一样的变量不影响全局的变量值， sass后面的样式都是后定义的
    }
  }
</script>


