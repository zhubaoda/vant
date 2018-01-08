<template>
  <div>
  	<!--v-on:input是input的事件,普及一下还有change事件-->
    <input type="text" v-bind:value="syncdata1" v-on:input="syncdata1=$event.target.value" @click="change1"/>
    <br />
    <!--是不是可以通过方法使得value值具有和syncdata2有一定关系的值-->
    <input type="text" v-bind:value="2*syncdata2" />
  </div>
</template>

<script>
export default {
  name: 'home-mine',
  data () {
    return {
      syncdata1:'我是数据绑定的值',
      syncdata2:1
    }
  },
  methods:{
  	change1($event){
  		console.log($event.target.value)
  	}
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
