<template>
  <div>
  	<canvas id="c1" ref="c1" width="600" height="800"></canvas>
  </div>
</template>

<script>
export default {
  data () {
    return {
      
    }
  },
  methods:{
  	 getPic(){
  	 	let ctx = this.$refs.c1.getContext('2d');
  	 	    ctx.beginPath();
            ctx.arc(300, 200, 100, 0, 2 * Math.PI);
            ctx.stroke();

            ctx.beginPath();
            ctx.arc(250, 180, 10, 0, 2*Math.PI);
            ctx.stroke();


            ctx.beginPath();
            ctx.arc(350, 180, 10, 0, 2*Math.PI);
            ctx.stroke();


            ctx.beginPath();
            ctx.arc(250, 185, 5, 0, 2*Math.PI);
            ctx.fillStyle="black";
            ctx.fill();
            ctx.stroke();

            ctx.beginPath();
            ctx.arc(350, 185, 5, 0, 2*Math.PI);
            ctx.stroke();
            ctx.fillStyle="black";
            ctx.fill();

            ctx.beginPath();
            ctx.moveTo(260,250);
            ctx.bezierCurveTo(260,250,290,300,345,250);
            ctx.stroke();

            ctx.beginPath();
            ctx.moveTo(265,294);
            ctx.lineTo(265,315);
            ctx.stroke();

            ctx.beginPath();
            ctx.moveTo(335,294);
            ctx.lineTo(335,315);
            ctx.stroke();

            ctx.beginPath();
            ctx.moveTo(265,315);
            ctx.bezierCurveTo(305,305,310,310,335,315);
            ctx.stroke();
  	 }
  },
  mounted(){
  	this.getPic()
  	console.log(111)
  },
  created(){
  	   
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
