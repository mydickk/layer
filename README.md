# 微信小程序自定义弹框组件

  由于微信小程序自带的toast及model都有很大的限制，很多产品对弹框的要求是多样化的，于是自己动手封装实现一组弹框功能。该组件只是提供一种实现方式，对样式不满意可自行修改。

### 实现效果图
- toast
![toast](https://img-blog.csdnimg.cn/20190415115720759.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3UwMTQ2NDMzNTE=,size_16,color_FFFFFF,t_70)
- model
-![model](https://img-blog.csdnimg.cn/20190415115819962.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3UwMTQ2NDMzNTE=,size_16,color_FFFFFF,t_70)
- loading
 ![loading](https://img-blog.csdnimg.cn/20190415115857597.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3UwMTQ2NDMzNTE=,size_16,color_FFFFFF,t_70)
 
[开发者工具查看效果](https://developers.weixin.qq.com/s/iJ0gCEmD7A7a) 

### 如何使用
1、在需要使用的页面引入wxss
```
@import '../component/wx-layer/wx-layer.wxss';
```
2、wxml引入模块
```
<import src='../component/wx-layer/wx-layer.wxml' />
<template is="wxLayer" data="{{...wxLayer}}"/>
```
3、js引入
```
import WxLayer from '../component/wx-layer/wx-layer';

Page({
  onLoad() { //onload中初始化组件
    new WxLayer();
  }
})
```

### 使用
1、toast: this.showToast(title, duration, mask); 

|参数|类型 |默认|是否必须| 说明| 
|--|--|--|--|--| 
| title| string| |yes|内容| 
|duration| number|2000|no| 持续时间| 
|mask|boolean|false|no|是否使用遮罩层|

2、model: this.showModal({title, content, confirmText, cancelText, confirm, showCancel, mask});

|参数|类型|默认|是否必须|说明| 
|--|--|--|--|--| 
|title|string||no|标题| 
|content|string||yes|提示内容| 
|confirmText|string|确认|no|确认按钮文案| 
|cancelText|string||no|取消按钮文案| 
|confirm|function| |no|点击确认回调| 
|showCancel|boolean|false|no|是否显示取消按钮| 
|mask|boolean|false|no|是否使用遮罩层|

3、loading: this.showLoading(mask,text); 

|参数|类型 |默认|是否必须| 说明| 
|--|--|--|--|--| 
| text| string| |no|loading文案| 
|mask|boolean|false|no|是否使用遮罩层|


[查看元整代码](https://github.com/mydickk/wx-layer)

如果我的代码对你有帮助，请给个start吧！ ^^
