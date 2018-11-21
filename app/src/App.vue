<template>
  <div id="app">
	  <header>
		  <!-- router-link 定义点击后导航到哪个路径下 -->
		  <router-link to="/home">Home</router-link>
		  <router-link to="/note">note</router-link>
		  <router-link to="/about">About</router-link>
	  </header>
	  <!-- 对应的组件内容渲染到router-view中 -->
	  <router-view></router-view>
	 <!--单页面容器，方便渲染指定路由对应的组件-->
	  <div class="increment">
		  <IncrementCount/>
	  </div>
	  <div class="show-back"> {{fontCount}} </div>
	  <div class="decrement">
		  <DecreaseCount/>
	  </div>
	  <div>{{ message}}</div>
	  <cHead @tan1="tanchuang()"></cHead>
  </div>
</template>

<script>

	import IncrementCount from './components/IncrementCont.vue'
	import DecreaseCount from './components/decrease.vue'
	import {EventBus} from './event-bus.js'
	import cHead from './components/head.vue'


	export default {
		name:'App',
		components:{
			IncrementCount,
					DecreaseCount,
					cHead
		},
		data(){
			return{
				fontCount:0,
				backCount:0,
				message : "xuxiao is boy"
			}
		},
		methods:{
			tanchuang(){
				alert(1111);
			}
		},


		/*beforeCreate: function () {
			console.group('beforeCreate 创建前状态===============》');
			console.log("%c%s", "color:red" , "el     : " + this.$el); //undefined
			console.log("%c%s", "color:red","data   : " + this.$data); //undefined
			console.log("%c%s", "color:red","message: " + this.message)
		},
		created: function () {
			console.group('created 创建完毕状态===============》');
			console.log("%c%s", "color:red","el     : " + this.$el); //undefined
			console.log("%c%s", "color:red","data   : " + this.$data); //已被初始化
			console.log("%c%s", "color:red","message: " + this.message); //已被初始化
		},
		beforeMount: function () {
			console.group('beforeMount 挂载前状态===============》');
			console.log("%c%s", "color:red","el     : " + (this.$el)); //已被初始化
			console.log(this.$el);
			console.log("%c%s", "color:red","data   : " + this.$data); //已被初始化
			console.log("%c%s", "color:red","message: " + this.message); //已被初始化
		},*/
		mounted: function () {
			EventBus.$on("incremented", ({num}) => {
				this.fontCount += num
			});
			EventBus.$on("decreased", ({num}) => {
				this.fontCount -= num
			});
			console.group('mounted 挂载结束状态===============》');
			console.log("%c%s", "color:red","el     : " + this.$el); //已被初始化
			console.log(this.$el);
			console.log("%c%s", "color:red","data   : " + this.$data); //已被初始化
			console.log("%c%s", "color:red","message: " + this.message); //已被初始化
		},
		/*beforeUpdate: function () {
			console.group('beforeUpdate 更新前状态===============》');
			console.log("%c%s", "color:red","el     : " + this.$el);
			console.log(this.$el);
			console.log("%c%s", "color:red","data   : " + this.$data);
			console.log("%c%s", "color:red","message: " + this.message);
		},
		updated: function () {
			console.group('updated 更新完成状态===============》');
			console.log("%c%s", "color:red","el     : " + this.$el);
			console.log(this.$el);
			console.log("%c%s", "color:red","data   : " + this.$data);
			console.log("%c%s", "color:red","message: " + this.message);
		},
		beforeDestroy: function () {
			console.group('beforeDestroy 销毁前状态===============》');
			console.log("%c%s", "color:red","el     : " + this.$el);
			console.log(this.$el);
			console.log("%c%s", "color:red","data   : " + this.$data);
			console.log("%c%s", "color:red","message: " + this.message);
		},
		destroyed: function () {
			console.group('destroyed 销毁完成状态===============》');
			console.log("%c%s", "color:red","el     : " + this.$el);
			console.log(this.$el);
			console.log("%c%s", "color:red","data   : " + this.$data);
			console.log("%c%s", "color:red","message: " + this.message)
		}*/

	}

</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
