// pages/wode/wode.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    imgUrl:[
      'https://img10.360buyimg.com/ddimg/jfs/t1/117312/20/18925/815432/5f73e111E35d9bf6e/ec454d11938054b2.png',
      'https://img13.360buyimg.com/ddimg/jfs/t1/111639/2/19082/393744/5f73e127E304379b2/8d2e2ef8ce957264.jpg',
      'https://img10.360buyimg.com/ddimg/jfs/t1/118444/33/19054/417237/5f73e147E3e3eb06b/cddb13d6d9d8d851.jpg'
    ],
     active: 0,
     indicatorDots: true,
     autoplay: true,
     interval: 3000,
     duration: 1000,
     vertical: true
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
    wx.showShareMenu({

      withShareTicket:true,
      
      menus:['shareAppMessage','shareTimeline']
      
      })
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})