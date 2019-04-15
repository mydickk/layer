import WxLayer from '../component/wx-layer/wx-layer';
const app = getApp()

Page({
  data: {

  },

  onLoad() {//onload中初始化组件
    new WxLayer();
  },

  _showToast() {
    this.showToast('我是toast', 3000);
  },

  _showModel() {
    this.showModal({title:'提示',content: '模态框'});
  },

  _loading() {
    this.showLoading(false, 'loading');

    setTimeout(() => {
      this.hideLoading();
    }, 2000)
  }
})
