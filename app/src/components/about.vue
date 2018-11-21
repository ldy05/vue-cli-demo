<template>
	<div>
		<h1>about</h1>
		<p>{{aboutMsg}}</p>
		<router-link :to="{name:'my',params:{id:id},query:{name:name}}">点我查看</router-link>
	</div>
</template>
<script>
	export default {
		data () {
			return {
				aboutMsg: '我是about组件',
				id:'331477304',
				name:'ldy'
			}
		}
	}
</script>