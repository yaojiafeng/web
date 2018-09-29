## LCS (最长公共子序列)
定义：一个数列 S，如果分别是两个或多个已知数列的子序列，且是所有符合此条件序列中最长的，则 S 称为已知序列的最长公共子序列。
如有两个字符串：1235和136，则：

1, 12, 123, 1235, 2, 23, ..., 1235是字符串1235的子序列

1, 3, 13, 36, ..., 136是136的子序列

13是1235和136的最长公共子序列

LCS问题即求两集合最长公共子序列的问题
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
```
