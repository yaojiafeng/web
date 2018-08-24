## 目录
- [基本类型](#基本类型)


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

