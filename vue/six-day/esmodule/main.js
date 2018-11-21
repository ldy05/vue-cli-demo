//如果是第三方模块必须要加./
//如果是文件模块需要加./

//在另一个文件中将内容结构出来即可使用
//import拥有生命功能,可以变量提升
//import放在页面的顶部

//两种方法,一种结构赋值,一种* as
//import {str,str1,a} from './a.js'
import * as b from './a.js'
console.log(b.str,b.str1);

b.a();


//如果是一个默认的变量导出
 //xxx代表的是default的结果
import xxx from './b.js'

console.log(xxx);