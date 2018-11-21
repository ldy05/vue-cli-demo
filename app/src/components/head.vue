<template>
	<div>
		<h1 @click="tan">我是组件标题</h1>
	</div>
</template>
<script>
	export default {
		name:'c-head',
		methods:{
			tan(){
				this.$emit('tan1');
			}
		}
	}
</script>