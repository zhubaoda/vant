<template>
  <div class="birth">
	<clock class="myclock"></clock>
	<div class="flex black">
		<span>你{{year}} 岁了</span>
	</div>
	<div class="tflex gray">
		<span>在这个世界上你已经存在了</span>
	</div>
		<div class="box">
			<div class="top">
				<div class="inbox">
					<span>年</span>
					<span v-show="year!=='???'">{{Math.floor(year)}}</span>
					<span v-show="year=='???'">unknow</span>
				</div>
				<div class="inbox">
					<span>月</span>
					<span v-show="month!=='???'">{{Math.floor(month)}}</span>
					<span v-show="month=='???'">unknow</span>
				</div>
				<div class="inbox">
					<span>周</span>
					<span v-show="week!=='???'">{{Math.floor(week)}}</span>	
					<span v-show="week=='???'">unknow</span>
				</div>
			</div>
			<div class="top footer">
				<div class="inbox">
					<span>日</span>
					<span v-show="day!=='???'">{{Math.floor(day)}}</span>
					<span v-show="day=='???'">unknow</span>
				</div>
				<div class="inbox">
					<span>分</span>
					<span v-show="min!=='???'">{{Math.floor(min)}}</span>
					<span v-show="min=='???'">unknow</span>
				</div>
				<div class="inbox">
					<span>秒</span>
					<span v-show="second!=='???'">{{Math.floor(second)}}</span>
					<span v-show="second=='???'">unknow</span>
				</div>
			</div>
	    </div>
	    <div class="flex black" style="color:#16A9FF;">
		  <div @click="select" style="padding: 10px;">选择生日</div>
	    </div>
	<van-datetime-picker
	  v-model="currentDate"
	  type="datetime"
	  :min-date="minDate"
      :max-date="maxDate"
      @confirm="confirm"
      @cancel="cancel"
      v-show="show"
      class="time"
	/>
  </div>
  
</template>

<script>
  import clock from '../../components/common/clock.vue'
  export default {
  	components:{clock},
    data () {
    	  return {
    	  	show:false,
    	  	currentDate:null,
    	  	minDate: new Date(1968, 0, 1),
        maxDate: new Date(),
        day:'???',
        year:'???',
        month:'???',
        week:'???',
        second:'???',
        min:'???'
    	  }
    },
    methods:{
    	  select(){
    		this.show = !this.show;
    	  },
    	  confirm () {
    	  	let tamp = new Date().getTime() - new Date(this.currentDate).getTime();
    	  	this.day = tamp/(1000*60*60*24);
    	  	this.year = this.day/365.24219;
    	  	this.month = this.year*12;
    	  	this.week = this.day/7;
    	  	this.second = tamp/1000;	
    	  	this.min = tamp/(1000*60);
    	  	this.show = false;
    	  },
    	  cancel () {
    	  	this.show = false;
    	  }
    }
  }
</script>

<style scoped>
  .birth{
  	height:100vh;
  	width:100vw;
  	overflow: auto;
  	background-color:#fff;
  	position: relative;
  }	
  .myclock{
  	width:100vw;
  	display: flex;
  	flex-direction: row;
  	justify-content: center;
  	align-items: center;
  }
  .time{
  	width:100vw;
  	position:fixed;
  	bottom: 0;
  }
  .flex{
  	display: flex;
  	flex-direction: row;
  	justify-content: center;
  	align-items: center;
  }
  .tflex{
  	display: flex;
  	flex-direction: row;
  	justify-content: flex-start;
  	align-items: center;
  	padding: 20px 0 0 20px;
  }
  .black{
  	font-size: 16px;
  	color:#000;
  }
  .gray{
  	font-size: 13px;
  	color:gray;
  }
  .box{
  	margin: 20px;
  	box-sizing: border-box;
  	box-shadow: 0 0 20px #ccc;
  }
  .top{
  	display:flex;
  	flex-direction: row;
  	justify-content: center;
  	align-items: center;
  }
  .inbox{
  	flex: 1;
  	display:flex;
  	flex-direction: column;
  	justify-content: center;
  	align-items: center;
  	padding: 10px 0;
  }
  .footer{
  	background-color: #f5f1f0;
  }
</style>