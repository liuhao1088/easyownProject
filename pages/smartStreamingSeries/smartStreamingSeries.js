// pages/smartStreamingSeries/smartStreamingSeries.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    urlList:[
      'https://img14.360buyimg.com/ddimg/jfs/t1/136265/36/17125/33980/5fbb8c1eEc31b4c5f/eab2506a91416e35.png',
      'https://img10.360buyimg.com/ddimg/jfs/t1/151844/4/20529/182396/603c89e4E09732d0a/454b5e6af667c3ec.png',
      'https://img11.360buyimg.com/ddimg/jfs/t1/151447/27/2082/157496/5f83ffaaE65b9786d/ab905d76e6b7c60e.png',
    ]
  },
  toDetaila(event){
    let id = event.currentTarget.id;
    if(id === '0'){
      wx.navigateTo({
        url: "/pages/detailsamEleven/detailsamEleven"
      })
    }else if(id === '1'){
      wx.navigateTo({
        url: "/pages/detailsamSanjiu/detailsamSanjiu"
      })
    }else {
      wx.navigateTo({
        url: "/pages/detailsamSixtysix/detailsamSixtysix"
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