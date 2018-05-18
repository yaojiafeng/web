                                          #ES6

##Module的语法

export 可输出变量、函数和(class)

//方式一:
export var name='yao';
export function v1(){}
//方式二:
var name='yao';
export{name};
//方式三:
function v1(){};
export {v1 as v11};
//方式四:指定模块的默认输出
export default function (){}//匿名函数
function foo(){};//非匿名函数
export default foo;


import 加载模块
//方式一:
import {name} from 'xxx';
//方式二:
import {name as name1} from 'xxx';
//import 'lodash';仅仅执行lodash,但是并没有输入任何值
//方式三:模块的整体加载(两个方法)
import *as circle from 'xxx';
circle.area();
circle.circumference();
//方式四:
import myClass from 'xxx';//export default class{};
