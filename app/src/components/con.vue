<template>
	<div>切切切{{this.$route.params.num}}</div>
</template>
<script>
	export default {
		watch:{// watch $route 决定使用哪种过渡
			$route (to,from){
				console.log(to);
				console.log(from)
			}
		}
	}
</script>