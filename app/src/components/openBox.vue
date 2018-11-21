<template>
	<div>
		<div class="box" v-if="isShow">
			<a href="javascript:;" class="closed" @click="hidden()"></a>
			<h1>我是弹窗{{tit}}</h1>
			<slot name="content"></slot>
			<slot name="footer"></slot>
			<input type="text" v-model="message"/>
			<p>{{message}}</p>
		</div>

	</div>
</template>
<script>
	export default {
		name:"dialog-box",
		props:['isShow','tit'],
		methods:{
			hidden(){
				this.$emit('hidden')
			}
		},
		data(){
			return{
				message:"input值"
			}
		}
	}
</script>
<style>
	.box{
		width: 300px;
		height: 300px;
		position: fixed;
		left: 50%;
		top:50%;
		margin-left:-150px;
		margin-top: -150px;
		background: red;
	}
	.closed{
		width: 50px;
		height: 50px;
		display: block;
		background: yellow;
		position: absolute;
		right: 0;
	    top:0;
	}
</style>