<template>
  <div>
  	<!--count是传给子组件的值，addNum绑定子组件触发的事件-->
    <child @add="addNum" :count="count">
    	    <!--slot名字为header的插槽-->
    	    <p slot="header">Hello</p>
    	    <!--作用域插槽-->
    	    <template slot-scope="props">
			<span>{{props.text}}</span>
		</template>
    </child>
  </div>
</template>

<script>
import child from './child.vue'
export default {
  name: 'home-resource',
  data () {
    return {
      count:0
    }
  },
  methods:{
  	addNum(){
  		this.count++;
  	}
  },
  components:{
    	   child
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
