// pages/hiddenRecorderSeries/hiddenRecorderSeries.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    urlList:[
      'https://img12.360buyimg.com/ddimg/jfs/t1/134506/36/16949/160699/5fbb29baE90a7278e/0d0f9e934344d97d.png',
      'https://img14.360buyimg.com/ddimg/jfs/t1/153376/28/2054/132123/5f84045bE2ffb6fa9/4b20098f614a27d0.png',
      'https://img14.360buyimg.com/ddimg/jfs/t1/138191/3/10435/123680/5f84046dE83ac15b3/c307d96ef007657d.png',
      'https://img10.360buyimg.com/ddimg/jfs/t1/126203/10/15109/93150/5f8a5e80E8beec6e9/34b5fadd8421f5b9.png',
      'https://img10.360buyimg.com/ddimg/jfs/t1/125035/9/15096/125750/5f8a5e94E17ac264d/fa44631dda89a394.png',
    ]
  },
  toDetaila(event){
    let id = event.currentTarget.id;
    if(id === '0'){
      wx.navigateTo({
        url: "/pages/detailsamSix/detailsamSix"
      })
    }else if(id === '1'){
      wx.navigateTo({
        url: "/pages/detailsamFives/detailsamFives"
      })
    }else if(id === '2'){
      wx.navigateTo({
        url: "/pages/detailsaeOne/detailsaeOne"
      })
    }
    else if(id === '3'){
      wx.navigateTo({
        url: "/pages/detailsaeTwo/detailsaeTwo"
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