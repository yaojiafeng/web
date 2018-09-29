
```js
function lcs(str1, str2) {    
        var arr = [];    //array init
        for (var i = 0; i < str1.length + 1; i++) {
            arr[i] = [];        
            for (var j = 0; j < str2.length + 1; j++) {
                arr[i][j] = 0;            
            }
        }    
        for (var i = 1; i < str1.length + 1; i++) {        
            for (var j = 1; j < str2.length + 1; j++) {            
                if (str1[i - 1] == str2[j - 1]) {
                    arr[i][j] =  arr[i - 1][j - 1] + 1;
                } else if (arr[i - 1][j] >= arr[i][j - 1]) {
                    arr[i][j] = arr[i - 1][j];
                } else {
                    arr[i][j] = arr[i][j - 1];
                }
            }
        }    
        var result = [];
        _lcs(str1, str2, str1.length, str2.length, arr, result);    
        console.log(result)
    }
    
    function _lcs(str1, str2, i, j, arr, result) {    
        if (i == 0 || j == 0) {        
            return;
        }    
        if (str1[i - 1] == str2[j - 1]) {
            _lcs(str1, str2, i - 1, j - 1, arr, result);
            result.push(str1[i - 1]);
        } else if (arr[i][j - 1] >= arr[i - 1][j]) {
            _lcs(str1, str2, i, j - 1, arr, result);
        } else {
            _lcs(str1, str2, i - 1, j, arr, result);
        }
    }
        测试：
```
