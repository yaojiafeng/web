```js
var isPalindrome = function (x) {
    // const y = Number(String(x).split('').reverse().join(''));
    // return x === y;
    let str = String(x);
    let len = str.length;
    for (let i = 0; i < len; i++) {
        let j = len - 1 - i;
        if (j >= i) {
            if (str[i] !== str[j]) {
                return false;
            }
        }
    }
    return true;
};
```
