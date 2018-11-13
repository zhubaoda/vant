<template>
	<div class="paging">
		
		<div class="table">
			<div class="thead">
				<div class="type">类型</div>
				<div class="title">标题</div>
				<div class="time">时间</div>
			</div>
            <div class="tbody">
            	<div class="list">
            		<div class="li" v-for="(todo, index) in pageArr">
            			
            		</div>
            	</div>
            </div>
		</div>
		
		<pages 
			:current="current" 
			:pageArr="pageArr" 
			:pageSize="pageSize"
			:endVal="endVal"
			:startVal="startVal"
			:total="total" 
			@changePages="changePages"
			@getMore="getMore"/>
	</div>
</template>

<script>
	import pages from '@/components/pages.vue'
	import axios from 'axios'
	import hash_hmac from 'hmacsha1'
	import base64 from 'base64-js'
	export default {
		components: { pages },
		data () {
			return {
				current: 0,
				total: 27,
				pageArr: [0, 1, 2, 3, 4, 5, 6, 7],
				pageSize: 8,
				startVal: 0,
				endVal: 0
				
			}
		},
		methods: {
			changePages(params) {
                if (params.arr.length > 0) {
                	this.getMore(params.arr);
                }
				this.current = params.idx;
			},
			getMore (arr) {
				this.pageArr = arr;
			    this.getVal();
			},
			getVal () {
				this.startVal = this.pageArr[0];
				let len = this.pageSize - 1;
			    this.endVal = this.pageArr[len];
			}
		},
		created () {
			this.getVal();
//			let data = {
//			    "accesskey" : "83dc18c7bf0e37fda2559a5f2f0e28eb",
//			    "data" : "{\"maxId\":0,\"pageSize\":2}",
//			    "method" : "hotel.poi.list",
//			    "nonce" : 547,
//			    "partnerId" : 171,
//			    "timestamp" : 1472027309,
//			    "version" : "1.0"
//			}
//			let $plainText = 'accesskey=83dc18c7bf0e37fda2559a5f2f0e28eb&data={"maxId":0,"pageSize":2}&method=hotel.poi.list&nonce=547&partnerId=171&timestamp=1472027309&version=1.0'
//			let $secretkey = '83dc18c7bf0e37fda2559a5f2f0e28eb';
//			let base = new base64();
//			let signature=base64.encode(hash_hmac('sha1', $plainText, $secretkey, true));
//			console.log(21, signature)
		}
	}
</script>

<style scoped>
	.paging {
		margin: 50px;
	}
	.paging .table {	
		width: 100%;
		border: 1px solid #ccc;
		border-radius: 8px;
	}
	.paging .table .thead {
		width: 100%;
		display: flex;
		flex-direction: row;
		background-color: rgba(255,238,238, .4);
		border-radius: 8px;
		border-bottom: 1px solid #ccc;
		padding: 10px 0;
	}
	.paging .table .thead .title {
		flex: 3;
		text-align: center;	
		border-left: 1px dotted #000;
		border-right: 1px dotted #000;		
	}
	.paging .table .thead .type, .time {
		flex: 1;
		text-align: center;
	}
	.list .li {
		padding: 8px 0;
	}
</style>