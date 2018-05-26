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
  /*参数混合*/
  .how-box(@width, @height) {
  	width: @width;
  	height: @height;
  }
  .shake {
  	width: 100%;
  	height: 100vh;
  	background-color: #fff;
  	/*混合*/
  	.display;
  	.word {
  	  .how-box(100px, 100px);
  	  .border-radius(15px);
  	  border: 1px solid #ccc;
  	}
  }
</style>

<template>
  <div class="shake">
  	<div class="word">社会摇</div>
  </div>
</template>

<script>
  export default {
    data () {
    	  return {
    	  	last_update: 0,
    	  	SHAKE_THRESHOLD: 4000,
    	  	last_x: 0,
    	  	last_y: 0,
    	  	last_z: 0,
    	  	x: 0,
    	  	y: 0,
    	  	z: 0
    	  }
    },
    methods: {
    	  listenPhoneShake () {
    	  	// 监听运动传感事件
    	    if (window.DeviceMotionEvent) {
    	  	  window.addEventListener('devicemotion', deviceMotionHandler, false);
    	    }
    	    let self = this;
    	    function deviceMotionHandler(eventData) { 
          var acceleration = eventData.accelerationIncludingGravity;  
          var curTime = new Date().getTime();  
          if ((curTime - self.last_update) > 100) { 
            var diffTime = curTime - self.last_update;  
            self.last_update = curTime;  
            self.x = acceleration.x;  
            self.y = acceleration.y;  
            self.z = acceleration.z;  
            var speed = Math.abs(self.x + self.y + self.z - self.last_x - self.last_y - self.last_z) / diffTime * 10000;  
            if (speed > self.SHAKE_THRESHOLD) {  
              alert('小伙子我很看好你哦！！！')
            }  
            self.last_x = self.x;  
            self.last_y = self.y;  
            self.last_z = self.z;  
          }
        } 
    	  },
      handelShakingMotion() {
      	
      }
    },
    mounted () {
    	  this.listenPhoneShake()
    }
  }
</script>


