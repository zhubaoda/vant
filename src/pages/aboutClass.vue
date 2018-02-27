<template>
  <div>
    <div @click="jump">es6类</div>
  </div>
</template>
<script>
  export default {
    data() {
    	  return {
    	  	
    	  }
    },
    methods: {
    	  func () {
    	  	//Point类
    	    class Point {
		  constructor(x,y) {
		    this.x = x;
		    	this.y = y;
		  }
    	    }
    	    //ColorPoint继承了Point类的属性和方法
    	    class ColorPoint extends Point {
    	    	
    	    }
    	    var p = new ColorPoint(1,2);
//  	    console.log(p);
    	  },
    	  jump() {
    	  	this.$router.push('/');
    	  }
    },
    mounted() {
    	  this.func();
    }
  }
</script>