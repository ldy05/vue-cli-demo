//发布 emit 订阅 on  {学生放假:["玩","睡觉","打游戏"]}

function Student(){
    this._events = {}
}
Student.prototype.on = function(eventName,callback){
    if(this._events[eventName]){//不是第一次
        this._events[eventName].push(callback);
    }else{
        this._events[eventName] = [callback]
    }
};
Student.prototype.emit = function(eventName){

    if(this._events[eventName]){
        this._events[eventName].forEach(cb=>cb)
    }
};
var student = new Student();
var play = function(who){
    console.log(who+"玩");
};
var sleep = function(who){
    console.log(who+"睡觉");
};
var playGame = function(who){
    console.log(who+"打游戏");
};
student.on("放假",play());//{放假:[play]}
student.on("放假",sleep());//{放假:[play,sleep]}
student.on("放假",playGame());//{放假:[play,sleep,playGame]}

student.emit("放假","我");

