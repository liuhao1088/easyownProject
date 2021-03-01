// pages/hiddenRecorderSeries/hiddenRecorderSeries.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    urlList:[
      'https://img14.360buyimg.com/ddimg/jfs/t1/138540/23/15596/39927/5fbb8c02E0c82e396/bc48911eeedc20a4.png',
      'https://img10.360buyimg.com/ddimg/jfs/t1/125035/9/15096/125750/5f8a5e94E17ac264d/fa44631dda89a394.png',
    ]
  },
  toDetaila(event){
    let id = event.currentTarget.id;
    if(id === '0'){
      wx.navigateTo({
        url: "/pages/detailsamSix/detailsamSix"
      })
    }else{
      wx.navigateTo({
        url: "/pages/detailsaeThree/detailsaeThree"
      })
    }
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