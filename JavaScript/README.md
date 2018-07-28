# javascript常忘的东西

### 1. 转化为boolean值后为fasle的：'',0,null,undefined,false和NaN
      
```js
Boolean(''),
Boolean(null),
Boolean(undefined),
Boolean(0),
Boolean(NaN),
Boolean(false)
```

### 2. typeof 优先==

```js
typeof 1=='number'//true
typeof (1=='number')//boolean
```






