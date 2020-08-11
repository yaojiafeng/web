
`js
function isPalindromes(num) {
  num = num + ''
  let arr = num.split('');
  let len = arr.length;
  for (let i = 0; i < len; i++) {
    if (len % 2 === 0) {
      if (i !== len) {
        if (arr[i] !== arr[len - 1]) {
          return false
        }
      }
    } else {
      if (i !== len - 1) {
        if (arr[i] !== arr[len - 1]) {
          return false
        }
      }
    }
    len--
  }
  return true
}
```
