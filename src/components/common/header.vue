<template>
	<div class="head" :class="{transparent: isTransparent}">
		<div class="commonflex arrow" v-if="showBack">
			<img src="../../../static/images/back.png" @click="goBack" v-show="!giveUp" />
			<img src="../../../static/images/back.png" @click="goOther" v-show="giveUp"/>
		</div>
        <div v-else class="commonflex arrow">
            <slot name="left-icon"></slot>
        </div>
		<div class="commonflex title">{{title}}</div>
		<div class="commonflex button">
			<span v-if="show">编辑</span>
            <slot name="right-text" @click="rightTextHandler">{{rightText}}</slot>
            <slot name="right-icon" @click="rightHandler()"></slot>
		</div>
	</div>
</template>
<script>
	export default {
		data() {
			return {
			}
		},
		props: {
			title: {
				type: String
			},
			show: {
				type: Boolean,
				default:false
			},
            showBack: {
                type: Boolean,
                default: true
            },
            rightText: {
			    type: String,
                default: ''
            },
            isTransparent : {
			    type: Boolean,
                default: false
            },
            giveUp:{
            	    type: Boolean,
                default: false 
            }
        },
		methods: {
			//返回键
			goBack: function() {
				window.history.go(-1)
			},
			//特俗情况
			goOther:function(){
				this.$emit('goOther')
			},
            rightTextHandler: function(){
			    this.$emit('rightTextClick');
            },
            rightHandler: function() {
			    this.$emit('rightIconClick');
            }
		}
	}
</script>
<style lang="less" scoped>
    .head {
        border-bottom: 1px solid #e5e5e5;
        .commonflex {
            display: flex;
            display: -webkit-flex;
            flex-direction: row;
            -webkit-flex-direction: row;
            align-items: center;
            -webkit-align-items: center;
            justify-content: center;
            -webkit-justify-content: center;
        }
        height: 57px;
        position: relative;
        background-color: #fff;
        display: flex;
        display: -webkit-flex;
        flex-direction: row;
        -webkit-flex-direction: row;
        align-items: center;
        -webkit-align-items: center;
        .arrow {
            height: 57px;
            width: 15%;
            img {
                height: 28px;
            }
        }
        .title {
            flex: 1;
            -webkit-flex: 1;
            text-align: center;
            font-size: 18px;
            color: #222;
        }
        .button {
            height: 57px;
            width: 15%;
            font-size: 16px;
            color: #222;
        }
        &.transparent {
            border-bottom: none;
            background-color: transparent;
        }
    }
</style>
