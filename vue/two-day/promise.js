//resolve 代表的是转向成功态
//reject代表的是转向失败态    resolve和reject均是函数
//Promise的实例就一个then方法,then方法中有两个参数


let p = new Promise((resolve,reject)=>{
    setTimeout(function(){
        let a = "蘑菇";
        resolve(a);//成功
        //reject(a);//失败
    })
});
p.then((data)=>{console.log(data)},(err)=>{console.log('err')});