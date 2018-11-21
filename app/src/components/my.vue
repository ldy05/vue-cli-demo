<template>
	<div>
		<h1>我是{{this.$route.params.id}}{{this.$route.query.name}}</h1>
		<router-link to="/con/1">111</router-link>
		<router-link to="/con/2">2222</router-link>
		<router-view></router-view>
	</div>

</template>
<script>
	export default {

	}
</script>