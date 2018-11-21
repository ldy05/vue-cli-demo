var vm = new Vue({
    el:"#app",
    data:{
        todos:[
            {
                isSelected:false,
                title:'睡觉'
            },
            {
                isSelected:false,
                title:'吃饭'
            },
            {
                isSelected:false,
                title:'打豆豆'
            }
        ],
        title:'',
        cur:'',
        hash:''
    },
    computed:{
        filterTodos:function(){
          if(this.hash==='all') return this.todos;

          if(this.hash==='finish'){
              return this.todos.filter(function(item){//正常写法
                  return item.isSelected;
              });
          }

          if(this.hash==='unfinish') return this.todos.filter(item=>!item.isSelected);//箭头函数写法

          return this.todos;
        },
        count:function(){//get方法要有return
           return this.todos.filter(item=>!item.isSelected).length;
        }
    },
    methods:{
        /*添加*/
        add:function(){//keydown和keyup差一个单词,keydown的时候内容没有进入输入框内
            this.todos.push({
                isSelected:false,
                title:this.title
            });
            this.title="";
        },
        /*删除*/
        remove:function(con){
          this.todos = this.todos.filter(function(item){//返回新数组,true,删除就是取反
              return item!==con;
          })
        },
        /*双击切换输入框*/
        remeber:function(todo){
                this.cur = todo;
        },
        cancel:function(){
            this.cur="";
        }
    },
    directives:{//添加指令,操作dom
        focus:function(el,bindings){
            //当点击当前li的时候让内部的输入框获取焦点
            if(bindings.value){
                el.focus();//获取焦点
            }
        }

    },
    created(){//ajax获取 初始化数据
        this.todos=JSON.parse(localStorage.getItem('data'))||this.todos;

        //监控hash值的变化,如果页面以有hash了,重新刷新页面也要获取hash值
        this.hash = window.location.hash.slice(2)||'all';

        var _this = this;
        window.addEventListener('hashchange',function(){
            //当hash值变化,重新操作记录数据
            _this.hash = window.location.hash.slice(2)||'all';
        },false)
    },
    watch:{
        todos:{//watch默认只监控一层数据变化,如果深度监控,改格式
            handler(){//默认写成函数,相当于默认写个handler
                localStorage.setItem('data',JSON.stringify(this.todos));
            },deep:true
        }



    }
});