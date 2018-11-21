<template>
	<div>
		<h1>home1</h1>
		<p>{{msg}}</p>
		<div @click="goto(path)">点我点我点我</div>
	</div>
</template>
<script>
	export default {
		data () {
			return {
				msg: "我是home 组件1",
				path:"/note"
			}
		},
		methods:{
			goto(path){
				this.$router.push({path:path})
			}
		}
	}
</script>