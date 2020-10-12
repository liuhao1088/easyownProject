// pages/wode/wode.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    imgUrl:[
      'https://img11.360buyimg.com/ddimg/jfs/t1/141106/6/10567/458756/5f83f33bEe17ec49e/0f7c2eb5d48f2da1.png',
      'https://img11.360buyimg.com/ddimg/jfs/t1/134409/33/12264/573162/5f83f3f3Eba2e86e1/1db56261b23a5887.png',
      'https://img11.360buyimg.com/ddimg/jfs/t1/155527/31/2019/911490/5f83f40cE99a615d8/b4fb5de2c80c17fe.png'
    ],
     active: 0,
     indicatorDots: true,
     autoplay: true,
     interval: 3000,
     duration: 1000,
     vertical: true
  },
  hdRecorderSeriesdj:function(e){
    wx.navigateTo({
      url: "../hdRecorderSeries/hdRecorderSeries"
    })
  },
  smartStreamingSeriesdj:function(e){
    wx.navigateTo({
      url: "../smartStreamingSeries/smartStreamingSeries"
    })
  },
  hiddenRecorderSeriesdj:function(e){
    wx.navigateTo({
      url: "../hiddenRecorderSeries/hiddenRecorderSeries"
    })
  },
  truckReconrderSeriesdj:function(e){
    wx.navigateTo({
      url: "../truckReconrderSeries/truckReconrderSeries"
    })
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