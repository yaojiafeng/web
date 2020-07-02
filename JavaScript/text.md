<a name="module_compAirshipSeat"></a>

## compAirshipSeat
<p>课前分组落座飞船  AB座位组件，课中双人上台时出现在上台视频窗口下方，支持直播、录播，不支持多语言。<br/><img src="#" alt="avatar">&lt;br/</p>

**Author**: 李德涛 <lidetao@vipkid.com.cn>  

* [compAirshipSeat](#module_compAirshipSeat)
    * _static_
        * [.props](#module_compAirshipSeat.props)
    * _inner_
        * [~lingoBusAvatar](#module_compAirshipSeat..lingoBusAvatar)
        * [~init(groupInfo, studentInfo)](#module_compAirshipSeat..init)
        * [~shipEnter()](#module_compAirshipSeat..shipEnter)
        * [~cbReadyGo()](#module_compAirshipSeat..cbReadyGo)
        * [~cbShipLeave()](#module_compAirshipSeat..cbShipLeave)
        * [~cbNextAnimate()](#module_compAirshipSeat..cbNextAnimate)

<a name="module_compAirshipSeat.props"></a>

### compAirshipSeat.props
**Kind**: static property of [<code>compAirshipSeat</code>](#module_compAirshipSeat)  
**Default**: <code>{locale:&#x27;cn&#x27;,isDowngrade:false}</code>  
**Properties**

| Name | Type | Description |
| --- | --- | --- |
| locale | <code>String</code> | <p>语言,默认cn</p> |
| isDowngrade | <code>Boolean</code> | <p>是否降级,默认false</p> |

<a name="module_compAirshipSeat..lingoBusAvatar"></a>

### compAirshipSeat~lingoBusAvatar
<p>默认头像</p>

**Kind**: inner constant of [<code>compAirshipSeat</code>](#module_compAirshipSeat)  
<a name="module_compAirshipSeat..init"></a>

### compAirshipSeat~init(groupInfo, studentInfo)
<p>重新初始化数据 <br/>触发方式: this.$EVENTBUS.emit('comp:compAirshipSeat:init', Parameters)</p>

**Kind**: inner method of [<code>compAirshipSeat</code>](#module_compAirshipSeat)  

| Param | Type | Description |
| --- | --- | --- |
| groupInfo | <code>Object</code> | <p>小组信息</p> |
| studentInfo | <code>Object</code> | <p>学生信息</p> |

**Example**  
```js
this.$EVENTBUS.emit('comp:compAirshipSeat:init',
   groupInfo
   studentInfo
)
```
<a name="module_compAirshipSeat..shipEnter"></a>

### compAirshipSeat~shipEnter()
<p>飞船进入 <br/>触发方式: this.$EVENTBUS.emit('comp:compAirshipSeat:shipEnter')</p>

**Kind**: inner method of [<code>compAirshipSeat</code>](#module_compAirshipSeat)  
**Example**  
```js
this.$EVENTBUS.emit('comp:compAirshipSeat:shipEnter')
```
<a name="module_compAirshipSeat..cbReadyGo"></a>

### compAirshipSeat~cbReadyGo()
<p>触发readyGo动作 <br/>触发方式: this.$EVENTBUS.emit('comp:compAirshipSeat:cbReadyGo')</p>

**Kind**: inner method of [<code>compAirshipSeat</code>](#module_compAirshipSeat)  
**Example**  
```js
this.$EVENTBUS.emit('comp:compAirshipSeat:cbReadyGo')
```
<a name="module_compAirshipSeat..cbShipLeave"></a>

### compAirshipSeat~cbShipLeave()
<p>触发飞船离开 <br/>触发方式: this.$EVENTBUS.emit('comp:compAirshipSeat:cbShipLeave')</p>

**Kind**: inner method of [<code>compAirshipSeat</code>](#module_compAirshipSeat)  
**Example**  
```js
this.$EVENTBUS.emit('comp:compAirshipSeat:cbShipLeave')
```
<a name="module_compAirshipSeat..cbNextAnimate"></a>

### compAirshipSeat~cbNextAnimate()
<p>组件调度 <br/>触发方式: this.$EVENTBUS.emit('comp:compAirshipSeat:cbNextAnimate')</p>

**Kind**: inner method of [<code>compAirshipSeat</code>](#module_compAirshipSeat)  
**Example**  
```js
this.$EVENTBUS.emit('comp:compAirshipSeat:cbNextAnimate')
```
