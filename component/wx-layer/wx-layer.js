/*
 *  遮罩层组件
 *  
 */

let __data__ = {
  _toast_show_: false,// 控制组件显示隐藏
  _toast_content: '',// 显示的内容
  _loading_show: false,
  _modal_show: false,
  _modal_content: '',
  _modal_title: '',
  _modal_confirm_text: '我知道了',
  _modal_cancel_text: '取消',
  _modal_show_concal: false
}

let __fn__ = {
  // toast显示的方法
  showToast(data, duration = 2000, mask = false) {
    const wxLayer = this.data.wxLayer;
    wxLayer._toast_content = data;
    wxLayer._toast_show_ = true;
    wxLayer._mask_show_ = mask;
    this.setData({ wxLayer });
    console.log(wxLayer)
    setTimeout(() => {
      wxLayer._toast_show_ = false;
      this.setData({ wxLayer });
    }, duration);
  },

  hideToast() {
    const wxLayer = this.data.wxLayer;
    wxLayer._toast_show_ = false;
    wxLayer._mask_show_ = false;
    this.setData({ wxLayer });
  },

  showLoading(mask = true, text = "") {
    let wxLayer = this.data.wxLayer;
    if (typeof (arguments[0]) === "object") {
      wxLayer._mask_show_ = arguments[0].mask;
      wxLayer._loading_text = arguments[0].text || '';
    } else {
      wxLayer._mask_show_ = mask;
      wxLayer._loading_text = text;
    }
    wxLayer._loading_show = true;
    this.setData({ wxLayer });
  },

  isLoading() {
    return this.data.wxLayer._loading_show;
  },

  hideLoading() {
    const wxLayer = this.data.wxLayer;
    wxLayer._loading_show = false;
    wxLayer._mask_show_ = false;
    this.setData({ wxLayer });
  },

  showModal({ title, content, confirmText, cancelText, confirm, showCancel, mask }) { //自定义confirm需要使用this.hideModal()
    let wxLayer = this.data.wxLayer;
    wxLayer._modal_show = true;
    wxLayer._modal_content = content;
    wxLayer._modal_title = title;
    wxLayer._modal_confirm_text = confirmText || '我知道了';
    wxLayer._modal_cancel_text = cancelText || '取消';
    wxLayer._modal_show_concal = showCancel || false;
    wxLayer._modal_mask = mask;
    this.setData({ wxLayer });
    if (confirm) this._modalcomfirm_ = confirm;
  },

  _modalcancel_(e) {
    this.hideModal();
  },

  _modalcomfirm_(e) {
    this.hideModal();
  },

  hideModal() {
    let wxLayer = this.data.wxLayer;
    wxLayer._modal_show = false;
    wxLayer._modal_content = '';
    wxLayer._modal_title = '';
    wxLayer._modal_confirm_text = '我知道了';
    wxLayer._modal_cancel_text = '取消';
    wxLayer._modal_mask = false;
    this._modalcomfirm_ = () => { this.hideModal(); }
    this.setData({ wxLayer });
  },

}

function WxLayer() {
  let pages = getCurrentPages();
  let curPage = pages[pages.length - 1];
  Object.assign(curPage, __fn__);
  curPage.setData({ wxLayer: __data__ });
  return this;
}

module.exports = WxLayer;
