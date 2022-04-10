## 目录

-   [数据结构](#数据结构)
    -   [链表](#链表)
    -   [数组](#数组)
    -   [栈](#栈)
    -   [队列](#队列)
    -   [树](#树)
    -   [二叉树](#二叉树)
    -   [二叉查找树](#二叉查找树)
    -   [字典树](#字典树)
    -   [树状数组](#树状数组)
    -   [线段树](#线段树)
    -   [堆](#堆)
    -   [哈希](#哈希)
    -   [图](#图)
-   [算法](#算法)
    -   [排序](#排序)
        -   [快速排序](#快速排序)
        -   [冒泡排序](#冒泡排序)
        -   [堆排序](#堆排序)
        -   [简单选择排序](#简单选择排序)
        -   [插入排序](#插入排序)
        -   [归并排序](#归并排序)
    -   [求集合的所有子集](#求集合的所有子集)

# 数据结构

### 链表

-   链表是一种由节点（Node）组成的线性数据集合，每个节点通过指针指向下一个节点。它是一种由节点组成，并能用于表示序列的数据结构。

-   单链表：每个节点仅指向下一个节点，最后一个节点指向空（null）。

-   双链表：每个节点有两个指针 p，n。p 指向前一个节点，n 指向下一个节点；最后一个节点指向空。

-   循环链表：每个节点指向下一个节点，最后一个节点指向第一个节点。

-   时间复杂度：

    -   索引：O(n)

    -   查找：O(n)

    -   插入：O(1)

    -   删除：O(1)

### 数组

-   优点
    -   随机访问性强
    -   查找速度快
-   缺点
    -   插入和删除效率低
    -   可能浪费内存
    -   内存空间要求高，必须有足够的连续内存空间。
    -   数组大小固定，不能动态拓展
-   数组与链表的比较
<table>
  <tr>
     <th>-</th>
     <th>数组</th>
     <th>链表</th>
  </tr>
  <tr>
     <td>读取</td>
     <td>o(1)</td>
     <td>o(n)</td>
  </tr>
    <tr>
     <td>插入</td>
     <td>o(n)</td>
     <td>o(1)</td>
  </tr>
    <tr>
     <td>删除</td>
     <td>o(n)</td>
     <td>o(1)</td>
  </tr>
</table>


### 栈

-   栈是一个元素集合，支持两个基本操作：push 用于将元素压入栈，pop 用于删除栈顶元素。

-   后进先出的数据结构（Last In First Out, LIFO）

-   时间复杂度

    -   索引：O(n)

    -   查找：O(n)

    -   插入：O(1)

    -   删除：O(1)

### 队列

-   队列是一个元素集合，支持两种基本操作：enqueue 用于添加一个元素到队列，dequeue 用于删除队列中的一个元素。

-   先进先出的数据结构（First In First Out, FIFO）。

-   时间复杂度

    -   索引：O(n)

    -   查找：O(n)

    -   插入：O(1)

    -   删除：O(1)

```js
// 两个队列实现栈
function Queue() {
    this.arr = [];
    this.push = function (e) {
        this.arr.push(e);
    };
    this.pop = function () {
        return this.arr.shift();
    };
    this.size = function () {
        return this.arr.length;
    };
}

//两个队列实现栈
function Stack() {
    this.q1 = new Queue();
    this.q2 = new Queue();
    this.push = function (e) {
        if ((this.q1.size() == 0 && this.q2.size() == 0) || (this.q1.size() != 0 && this.q2.size() == 0)) {
            this.q1.push(e);
        } else if (this.q2.size() != 0 && this.q1.size() == 0) {
            this.q2.push(e);
        }
    };
    this.pop = function () {
        if (this.q1.size() != 0) {
            var len = this.q1.size();
            for (var i = 0; i < len - 1; i++) {
                this.q2.push(this.q1.pop());
            }
            return this.q1.pop();
        } else if (this.q2.size() != 0) {
            var len = this.q2.size();
            for (var i = 0; i < len - 1; i++) {
                this.q1.push(this.q2.pop());
            }
            return this.q2.pop();
        }
    };
    this.size = function () {
        return this.q1.size() != 0 ? this.q1.size() : this.q2.size();
    };
}

// 两个栈实现队列
// 思路
//   入队：将元素进栈1;
//　　  出队：判断栈2是否为空，如果为空，则将栈1中所有元素pop，并push进栈2，栈2出栈； 如果不为空，栈２直接出栈。

function Stack() {
    this.arr = [];
    this.push = function (e) {
        this.arr.push(e);
    };
    this.pop = function () {
        return this.arr.pop();
    };
    this.size = function () {
        return this.arr.length;
    };
}
function Queue() {
    this.stack1 = new Stack();
    this.stack2 = new Stack();
    this.push = function (e) {
        this.stack1.push(e);
    };
    this.pop = function () {
        if (this.stack1.size() === 0 && this.stack2.size() === 0) {
            return;
        }
        if (this.stack2.size() !== 0) {
            return this.stack2.pop();
        } else {
            let size = this.stack1.size();
            for (let i = 0; i < size; i++) {
                this.stack2.push(this.stack1.pop());
            }
            return this.stack2.pop();
        }
    };
    this.size = function () {
        return this.stack1.size() + this.stack2.size();
    };
}
```

### 树

树是无向、联通的无环图。

### 二叉树

-   二叉树是一个树形数据结构，每个节点最多可以有两个子节点，称为左子节点和右子节点。

-   满二叉树（Full Tree）：二叉树中的每个节点有 0 或者 2 个子节点。

-   完美二叉树（Perfect Binary）：二叉树中的每个节点有两个子节点，并且所有的叶子节点的深度是一样的。

-   完全二叉树：二叉树中除最后一层外其他各层的节点数均达到最大值，最后一层的节点都连续集中在最左边。

### 二叉查找树

-   二叉查找树（BST）是一种二叉树。其任何节点的值都大于等于左子树中的值，小于等于右子树中的值。

-   时间复杂度

    -   索引：O(log(n))

    -   查找：O(log(n))

    -   插入：O(log(n))

    -   删除：O(log(n))

### 字典树

-   字典树，又称为基数树或前缀树，是一种用于存储键值为字符串的动态集合或关联数组的查找树。树中的节点并不直接存储关联键值，而是该节点在树中的位置决定了其关联键值。一个节点的所有子节点都有相同的前缀，根节点则是空字符串。

### 树状数组

-   树状数组，又称为二进制索引树（Binary Indexed Tree，BIT），其概念上是树，但以数组实现。数组中的下标代表树中的节点，每个节点的父节点或子节点的下标可以通过位运算获得。数组中的每个元素都包含了预计算的区间值之和，在整个树更新的过程中，这些计算的值也同样会被更新。

-   时间复杂度
    -   区间求和：O(log(n))
    -   更新：O(log(n))

### 线段树

-   线段树是用于存储区间和线段的树形数据结构。它允许查找一个节点在若干条线段中出现的次数。

-   时间复杂度

    -   区间查找：O(log(n))

    -   更新：O(log(n))

### 堆

-   堆是一种基于树的满足某些特性的数据结构：整个堆中的所有父子节点的键值都满足相同的排序条件。堆分为最大堆和最小堆。在最大堆中，父节点的键值永远大于等于所有子节点的键值，根节点的键值是最大的。最小堆中，父节点的键值永远小于等于所有子节点的键值，根节点的键值是最小的。

-   时间复杂度

    -   索引：O(log(n))

    -   查找：O(log(n))

    -   插入：O(log(n))

    -   删除：O(log(n))

    -   删除最大值/最小值：O(1)

### 哈希

-   哈希用于将任意长度的数据映射到固定长度的数据。哈希函数的返回值被称为哈希值、哈希码或者哈希。如果不同的主键得到相同的哈希值，则发生了冲突。

-   Hash Map：hash map 是一个存储键值间关系的数据结构。HashMap 通过哈希函数将键转化为桶或者槽中的下标，从而便于指定值的查找。

-   冲突解决

    -   链地址法（Separate Chaining）：在链地址法中，每个桶（bucket）是相互独立的，每一个索引对应一个元素列表。处理 HashMap 的时间就是查找桶的时间（常量）与遍历列表元素的时间之和。

    -   开放地址法（Open Addressing）：在开放地址方法中，当插入新值时，会判断该值对应的哈希桶是否存在，如果存在则根据某种算法依次选择下一个可能的位置，直到找到一个未被占用的地址。开放地址即某个元素的位置并不永远由其哈希值决定。

### 图

-   图是 G =（V，E）的有序对，其包括顶点或节点的集合 V 以及边或弧的集合 E，其中 E 包括了两个来自 V 的元素（即边与两个顶点相关联 ，并且该关联为这两个顶点的无序对）。

-   无向图：图的邻接矩阵是对称的，因此如果存在节点 u 到节点 v 的边，那节点 v 到节点 u 的边也一定存在。

-   有向图：图的邻接矩阵不是对称的。因此如果存在节点 u 到节点 v 的边并不意味着一定存在节点 v 到节点 u 的边。

# 算法

## 排序

-   内部排序算法，即数据记录在内存中进行排序,可分两种：
    -   比较排序，时间复杂度 O(nlogn) ~ O(n^2)
        -   快速排序
        -   冒泡排序
        -   堆排序
        -   简单选择排序
        -   插入排序
        -   归并排序
    -   非比较排序，时间复杂度可以达到 O(n)
        -   计数排序
        -   基数排序
        -   桶排序

以下是比较排序算法的性能比较
![排序总结](./images/排序总结.jpg)

### 快速排序

-   基本思想：

    -   通过一趟排序将要排序的数据分割成独立的两部分，其中一部分的所有数据都比另外一部分的所有数据都要小，然后再按此方法对这两部分数据分别进行快速排序，整个排序过程可以递归进行，以此达到整个数据变成有序序列。

-   一趟快速排序的算法是：

    -   设置两个变量 i、j，排序开始的时候：i=0，j=N-1；

    -   以第一个数组元素作为关键数据，赋值给 key，即 key=A[0]；

    -   从 j 开始向前搜索，即由后开始向前搜索(j--)，找到第一个小于 key 的值 A[j]，将 A[j]和 A[i]互换；

    -   从 i 开始向后搜索，即由前开始向后搜索(i++)，找到第一个大于 key 的 A[i]，将 A[i]和 A[j]互换；

    -   重复第 3、4 步，直到 i=j； (3,4 步中，没找到符合条件的值，即 3 中 A[j]不小于 key,4 中 A[i]不大于 key 的时候改变 j、i 的值，使得 j=j-1，i=i+1，直至找到为止。找到符合条件的值，进行交换的时候 i， j 指针位置不变。另外，i==j 这一过程一定正好是 i+或 j-完成的时候，此时令循环结束）。

-   稳定：否

-   时间复杂度

    -   最优：O(nlog(n)) 快速排序最优的情况就是每一次取到的元素都刚好平分整个数组

    -   最差：O(n^2) 最差的情况就是每一次取到的元素就是数组中最小/最大的，这种情况其实就是冒泡排序了

    -   平均：O(nlog(n))

-   空间复杂度
    -   最优：O(log(n))
    -   最差：O( n )
-   javascript 实现

```js
function quickSort(arr, l, r) {
    if (l < r) {
        var i = l,
            j = r,
            temp = arr[l];
        while (i < j) {
            while (i < j && arr[j] >= temp)
                // 从右向左找第一个小于x的数
                j--;
            if (i < j) arr[i++] = arr[j];

            while (i < j && arr[i] < temp)
                // 从左向右找第一个大于等于x的数
                i++;
            if (i < j) arr[j--] = arr[i];
        }
        arr[i] = temp;
        quickSort(arr, l, i - 1); // 递归调用
        quickSort(arr, i + 1, r);
    }
}
```

### 冒泡排序

-   基本思想：
    -   它重复地走访过要排序的元素列，依次比较两个相邻的元素，如果他们的顺序（如从大到小、首字母从 A 到 Z）错误就把他们交换过来。走访元素的工作是重复地进行直到没有相邻元素需要交换，也就是说该元素已经排序完成,一次排列后最大或最小都冒到数组最后。
-   算法步骤(升序)：
    -   比较相邻的元素，如果前一个比后一个大，就把它们两个调换位置。
    -   对每一对相邻元素作同样的工作，从开始第一对到结尾的最后一对。这步做完后，最后的元素会是最大的数。
    -   针对所有的元素重复以上的步骤，除了最后一个。
    -   持续每次对越来越少的元素重复上面的步骤，直到没有任何一对数字需要比较。
-   稳定：是
-   时间复杂度
    -   最优：如果能在内部循环第一次运行时,使用一个旗标来表示有无需要交换的可能,可以把最优时间复杂度降低到 O(n)
    -   最差：O(n^2)
    -   平均：O(n^2)
-   空间复杂度
    -   O(1)
-   javascript 实现

```js
function bubbleSort(arr) {
    var temp;
    for (var j = 0; j < arr.length - 1; j++) {
        // 控制排序的趟数，每趟最大元素就像气泡一样"浮"到数组的最后
        for (var i = 0; i < arr.length - 1 - j; i++) {
            // 依次比较相邻的两个元素,使较大的那个向后移
            if (arr[i] > arr[i + 1]) {
                // 如果条件改成arr[i] >= arr[i + 1],则变为不稳定的排序算法
                temp = arr[i];
                arr[i] = arr[i + 1];
                arr[i + 1] = temp;
            }
        }
    }
    return arr;
}

//改进的冒泡
function bubbleSort(arr) {
    var temp;
    var flag;
    for (var i = 0, len = arr.length; i < len - 1; i++) {
        flag = false;
        for (var j = 0; j < len - i - 1; j++) {
            if (arr[j] > arr[j + 1]) {
                temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
                flag = true;
            }
        }
        if (flag == false) return;
    }
}
```

### 堆排序

-   基本思想：
    -   将待排序序列构造成一个大顶堆，此时，整个序列的最大值就是堆顶的根节点。将其与末尾元素进行交换，此时末尾就为最大值。然后将剩余 n-1 个元素重新构造成一个堆，如此反复执行，便能得到一个有序序列了。
-   算法步骤：
    -   将无序序列构建成一个堆，根据升序降序需求选择大顶堆或小顶堆;
    -   将堆顶元素与末尾元素交换，将最大元素"沉"到数组末端;
    -   重新调整结构，使其满足堆定义，然后继续交换堆顶元素与当前末尾元素，反复执行调整+交换步骤，直到整个序列有序。
-   具体步骤
    -   步骤一，构造初始堆，将给定无序序列构造成一个大顶堆（一般升序采用大顶堆，降序采用小顶堆)。
        -   假设给定无序序列结构如下
            ![堆1](./images/堆1.jpg)
        -   此时我们从最后一个非叶子结点开始（叶结点自然不用调整，第一个非叶子结点 arr.length/2-1=5/2-1=1，也就是下面的 6 结点），从左至右，从下至上进行调整。
            ![堆2](images/堆2.jpg)
        -   找到第二个非叶节点 4，由于[4,9,8]中 9 元素最大，4 和 9 交换。
            ![堆3](images/堆3.jpg)
        -   这时，交换导致了子根[4,5,6]结构混乱，继续调整，[4,5,6]中 6 最大，交换 4 和 6。
            ![堆4](images/堆4.jpg)
        -   此时，我们就将一个无需序列构造成了一个大顶堆。
    -   步骤二，将堆顶元素与末尾元素进行交换，使末尾元素最大。然后继续调整堆，再将堆顶元素与末尾元素交换，得到第二大元素。如此反复进行交换、重建、交换。
        -   将堆顶元素 9 和末尾元素 4 进行交换
            ![堆5](images/堆5.jpg)
        -   重新调整结构，使其继续满足堆定义
            ![堆6](images/堆6.jpg)
        -   再将堆顶元素 8 与末尾元素 5 进行交换，得到第二大元素 8
            ![堆7](images/堆7.jpg)
        -   后续过程，继续进行调整，交换，如此反复进行，最终使得整个序列有序
            ![堆8](images/堆8.jpg)
-   稳定：否
-   时间复杂度
    -   最好：O(nlogn)
    -   最坏：O(nlogn)
    -   平均：O(nlogn)
-   空间复杂度
    -   O(1)
-   javascript 实现

```js
/**
 * 对数组中的前n项整理成堆
 * @param array
 * @param n
 */
function createHeap(arr, n) {
    if (arr.length < n) {
        n = arr.length;
    }
    // 从下往上，从右往左，第一个非叶子节点 arr[Math.floor(n/2) - 1]
    let index = Math.floor(n / 2) - 1;
    // 从第一个非叶子结点开始，往上遍历非叶子节点
    for (let i = index; i >= 0; i--) {
        let j = 2 * i + 1;
        while (j < n) {
            if (j + 1 < n) {
                if (arr[j] < arr[j + 1]) {
                    j = j + 1;
                }
            }
            //如果最大子节点大于其父节点，则交换
            if (arr[i] < arr[j]) {
                let tmp = arr[i];
                arr[i] = arr[j];
                arr[j] = tmp;
                //交换之后整个堆被破坏，需要重新调整，故令i=j
                //这个调整表示的是从j节点开始判断堆是否需要调整
                //比如交换j、i节点后，结果j的子节点又大于j了，那么就需要重新调整
                i = j;
            } else {
                break;
            }
        }
    }
    return arr;
}

function heapSort(arr, n) {
    if (arr.length < n) {
        n = arr.length;
    }

    while (n > 0) {
        arr = createHeap(arr, n--);
        let tmp = arr[0];
        arr[0] = arr[n];
        arr[n] = tmp;
    }
    return arr;
}

var a = [16, 7, 3, 20, 17, 8];
HeapSort(a, a.length);
console.log(a);
```

### 归并排序

-   合并排序是一种分治算法。这个算法不断地将一个数组分为两部分，分别对左子数组和右子数组排序，然后将两个数组合并为新的有序数组。
-   稳定：是
-   时间复杂度：
    -   最优：O(nlog(n))
    -   最差：O(nlog(n))
    -   平均：O(nlog(n))
-   javascript 实现(递归)

```js
function merge(left, right) {
    var result = [];
    while (left.length > 0 && right.length > 0) {
        if (left[0] < right[0]) {
            /*shift()方法用于把数组的第一个元素从其中删除，并返回第一个元素的值。*/
            result.push(left.shift());
        } else {
            result.push(right.shift());
        }
    }
    return result.concat(left).concat(right);
}
function mergeSort(items) {
    if (items.length == 1) {
        return items;
    }
    var middle = Math.floor(items.length / 2),
        left = items.slice(0, middle),
        right = items.slice(middle);
    return merge(mergeSort(left), mergeSort(right));
}
```

-   javascript 实现(非递归)

```js
function mergePass(arr = [], temp = new Array(arr.length), N = arr.length, length = 1) {
    // 将每个元素看作是相邻的数组长度为1。
    let t; // 迭代深度。
    for (t = 0; Math.pow(2, t) < N; t++, length *= 2) {
        // 每次跳过的长度翻倍。
        const even = t % 2 === 0; // 复用 arr 和 temp 来回赋值。
        for (let left = 0; left < N; left += 2 * length) {
            // 左边数组起始位置 left 从0开始。
            const middle = left + length < N ? left + length : left; // 右边数组起始位置 middle 就是left + 一个数组长度length 但是不要超过 N 。
            const right = left + 2 * length < N ? left + 2 * length : N; // 右边界 right 就是 left + 两个数组长度。
            merge(even ? arr : temp, even ? temp : arr, left, middle, right); // 合并每两个相邻的数组。
        }
    }
    if (t % 2 === 0) {
        return arr; //返回arr
    }
    return temp; // 返回 temp 。
}
function merge(arr, temp, left, middle, right) {
    const leftEnd = middle - 1; // 通过右边数组的起始位置得到左边数组的结束位置。
    while (left <= leftEnd && middle < right) {
        // 如果‘指针’没有越界。
        if (arr[left] > arr[middle]) {
            // 如果左边数组第一个元素比右边数组第一个元素大。
            temp[left + middle - leftEnd - 1] = arr[middle++]; // 将右边数组最小的放入有序数组 temp（初始值为空)。
        } else {
            temp[left + middle - leftEnd - 1] = arr[left++]; // 将左边数组最小的放入有序数组 temp（初始值为空)。
        }
    }
    while (left > leftEnd && middle < right) {
        // 如果左边数组放完了，右边数组还有元素。
        temp[left + middle - leftEnd - 1] = arr[middle++]; // 那么依次将右边数组剩余的元素放入 temp 。
    }
    while (left <= leftEnd && middle >= right) {
        // 如果右边数组放完了，左边数组还有元素
        temp[left + middle - leftEnd - 1] = arr[left++]; // 那么依次将左边数组剩余的元素放入 temp 。
    }
}
```

### 简单选择排序

```c
void Swap(int A[], int i, int j)
{
    int temp = A[i];
    A[i] = A[j];
    A[j] = temp;
}

void SelectionSort(int A[], int n)
{
    for (int i = 0; i < n - 1; i++)         // i为已排序序列的末尾
    {
        int min = i;
        for (int j = i + 1; j < n; j++)     // 未排序序列
        {
            if (A[j] < A[min])              // 找出未排序序列中的最小值
            {
                min = j;
            }
        }
        if (min != i)
        {
            Swap(A, min, i);    // 放到已排序序列的末尾，该操作很有可能把稳定性打乱，所以选择排序是不稳定的排序算法
        }
    }
}
```

桶排序

桶排序是一种将元素分到一定数量的桶中的排序算法。每个桶内部采用其他算法排序，或递归调用桶排序。
时间复杂度
最优：Ω(n + k)
最差: O(n^2)
平均：Θ(n + k)

基数排序

基数排序类似于桶排序，将元素分发到一定数目的桶中。不同的是，基数排序在分割元素之后没有让每个桶单独进行排序，而是直接做了合并操作。
时间复杂度
最优：Ω(nk)
最差: O(nk)
平均：Θ(nk)
图算法

深度优先搜索

深度优先搜索是一种先遍历子节点而不回溯的图遍历算法。
时间复杂度：O(|V| + |E|)

广度优先搜索

广度优先搜索是一种先遍历邻居节点而不是子节点的图遍历算法。
时间复杂度：O(|V| + |E|)

拓扑排序

拓扑排序是有向图节点的线性排序。对于任何一条节点 u 到节点 v 的边，u 的下标先于 v。
时间复杂度：O(|V| + |E|)
Dijkstra 算法

Dijkstra 算法是一种在有向图中查找单源最短路径的算法。
时间复杂度：O(|V|^2)

Bellman-Ford 算法

Bellman-Ford 是一种在带权图中查找单一源点到其他节点最短路径的算法。
虽然时间复杂度大于 Dijkstra 算法，但它可以处理包含了负值边的图。
时间复杂度：
最优：O(|E|)
最差：O(|V||E|)

Floyd-Warshall 算法

Floyd-Warshall 算法是一种在无环带权图中寻找任意节点间最短路径的算法。
该算法执行一次即可找到所有节点间的最短路径（路径权重和）。
时间复杂度：
最优：O(|V|^3)
最差：O(|V|^3)
平均：O(|V|^3)
最小生成树算法

最小生成树算法是一种在无向带权图中查找最小生成树的贪心算法。换言之，最小生成树算法能在一个图中找到连接所有节点的边的最小子集。
时间复杂度：O(|V|^2)

Kruskal 算法

Kruskal 算法也是一个计算最小生成树的贪心算法，但在 Kruskal 算法中，图不一定是连通的。
时间复杂度：O(|E|log|V|)

贪心算法

贪心算法总是做出在当前看来最优的选择，并希望最后整体也是最优的。
使用贪心算法可以解决的问题必须具有如下两种特性：
最优子结构
问题的最优解包含其子问题的最优解。
贪心选择
每一步的贪心选择可以得到问题的整体最优解。
实例-硬币选择问题
给定期望的硬币总和为 V 分，以及 n 种硬币，即类型是 i 的硬币共有 coinValue[i] 分，i 的范围是 [0…n – 1]。假设每种类型的硬币都有无限个，求解为使和为 V 分最少需要多少硬币？
硬币：便士（1 美分），镍（5 美分），一角（10 美分），四分之一（25 美分）。
假设总和 V 为 41,。我们可以使用贪心算法查找小于或者等于 V 的面值最大的硬币，然后从 V 中减掉该硬币的值，如此重复进行。
V = 41 | 使用了 0 个硬币
V = 16 | 使用了 1 个硬币(41 – 25 = 16)
V = 6 | 使用了 2 个硬币(16 – 10 = 6)
V = 1 | 使用了 3 个硬币(6 – 5 = 1)
V = 0 | 使用了 4 个硬币(1 – 1 = 0)
位运算

位运算即在比特级别进行操作的技术。使用位运算技术可以带来更快的运行速度与更小的内存使用。
测试第 k 位：s & (1 << k);
设置第 k 位：s |= (1 << k);
关闭第 k 位：s &= ~(1 << k);
切换第 k 位：s ^= (1 << k);
乘以 2n：s << n;
除以 2n：s >> n;
交集：s & t;
并集：s | t;
减法：s & ~t;
提取最小非 0 位：s & (-s);
提取最小 0 位：~s & (s + 1);
交换值：x ^= y; y ^= x; x ^= y;
运行时分析
大 O 表示

大 O 表示用于表示某个算法的上界，用于描述最坏的情况。

小 O 表示

小 O 表示用于描述某个算法的渐进上界，二者逐渐趋近。
大 Ω 表示

大 Ω 表示用于描述某个算法的渐进下界。

小 ω 表示

小 ω 表示用于描述某个算法的渐进下界，二者逐渐趋近。
Theta Θ 表示

Theta Θ 表示用于描述某个算法的确界，包括最小上界和最大下界。

### 求集合的所有子集

```js
function getSubSets(set) {
    var subset = [];
    function count(arr, temp, start) {
        subset.push(temp.slice(0)); //slice()从0开始返回temp中的所有元素
        for (var i = start; i < arr.length; i++) {
            temp.push(set[i]);
            count(arr, temp, i + 1); //递归，从1、2、3。。。开始
            temp.pop(); //返回temp中的最后一个元素
        }
    }
    count(set, [], 0);
    return subset;
}
```
