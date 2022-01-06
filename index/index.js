const app = getApp()

Page({
  data: {
    noScrollHeight: 0,
    list: Array(20).fill('').map((_, index) => index + 1),
    scrollIntoView: '',
  },
  onLoad() {
    const self = this;
    wx.createSelectorQuery().select('.header').boundingClientRect(res => {
      self.setData({
        noScrollHeight: res.height,
      });
    }).exec();
  },
  handleClick() {
    this.setData({
      scrollIntoView: 'stickyWrapper'
    })
  }
})
