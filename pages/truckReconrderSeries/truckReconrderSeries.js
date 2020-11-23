// pages/truckReconrderSeries/truckReconrderSeries.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    urlList:[
      'https://img13.360buyimg.com/ddimg/jfs/t1/117028/2/19763/206910/5f84079dE7ad9fe22/b6d61ee4c964ffec.png',
      'https://img14.360buyimg.com/ddimg/jfs/t1/114897/23/19108/183927/5f8407c1E2ce0e49e/a06fea7086a112d2.png',
    ]
  },
  toDetaila(event){
    let id = event.currentTarget.id;
    if(id === '0'){
      wx.navigateTo({
        url: "/pages/detailsagNinetyeight/detailsagNinetyeight"
      })
    }else{
      wx.navigateTo({
        url: "/pages/detailsagNinetys/detailsagNinetys"
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