## 目录
- [基本类型](#基本类型)
- [接口](#接口)


### 基本类型

- Number
- String
- Boolean
- Array
```ts
let list: Array<number> = [1, 2, 3];
```
- Tuple
```ts
// Declare a tuple type
let x: [string, number];
// Initialize it
x = ['hello', 10]; // OK
// Initialize it incorrectly
x = [10, 'hello']; // Error
```
- enum
  - 使用枚举我们可以定义一些有名字的数字常量。枚举通过enum关键字定义。
```ts
enum Color {Red, Green, Blue}
let c: Color = Color.Green;//1
```
- any
- void
- never
- 类型断言
```ts
let someValue: any = "this is a string";
let strLength: number = (<string>someValue).length;
//or
let strLength: number = (someValue as string).length;
```
### 接口
在TypeScript里，接口的作用就是为这些类型命名和为你的代码或第三方代码定义契约。
```ts
interface List{
  name:string,//必须
  age?:number,//可选
  readonly power:number,//只读,只能在对象刚刚创建的时候修改其值,之后不能修改  
}
```
- 类类型
  - 接口描述了类的公共部分，而不是公共和私有两部分。 它不会帮你检查类是否具有某些私有成员。
```ts
interface ClockInterface {
    currentTime: Date;
    setTime(d: Date);
}

class Clock implements ClockInterface {
    currentTime: Date;
    setTime(d: Date) {
        this.currentTime = d;
    }
    constructor(h: number, m: number) { }
}
```
- 接口继承
```ts
interface Shape {
    color: string;
}

interface PenStroke {
    penWidth: number;
}

interface Square extends Shape, PenStroke {
    sideLength: number;
}
```
- 接口继承类
```ts
class Control {
    private state: any;
}

interface SelectableControl extends Control {
    select(): void;
}
```

