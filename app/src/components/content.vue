<template>
	<div>
		<h1>我是{{tit}}内容页</h1>
		<a href="javascript:;" @click="dialogOpen">点击弹窗</a>
		<dialogBox :is-show="isShow" :tit="tit" @hidden="dialogclosed()">
			<p slot="content">我是内容</p>
			<p slot="footer">我是尾部</p>
		</dialogBox>
		<cHead></cHead>
		<a href="javascript:;" @click="goBack">点我返回</a>
	</div>
</template>
<script>
	import dialogBox  from './openBox.vue';

	import cHead from './head.vue';

	export default {
		methods:{
			goBack(){
				this.$router.go(-1);
			},
			dialogclosed(){
				this.isShow = false;
			},
			dialogOpen(){
				this.isShow = true;
			}
		},
		data(){
			return{
				tit:this.$route.params.tit,
				isShow:false,

			}
		},
		components:{
			cHead,
					dialogBox
		},
	}
</script>