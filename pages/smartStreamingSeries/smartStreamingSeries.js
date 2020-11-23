// pages/smartStreamingSeries/smartStreamingSeries.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    urlList:[
      'https://img11.360buyimg.com/ddimg/jfs/t1/132778/17/12212/153706/5f83ff6aE2d87b18e/98246c8ef3fc027a.png',
      'https://img13.360buyimg.com/ddimg/jfs/t1/116210/23/19969/176081/5f83ff92E408e5b62/18ba5811c3677a1d.png',
      'https://img11.360buyimg.com/ddimg/jfs/t1/151447/27/2082/157496/5f83ffaaE65b9786d/ab905d76e6b7c60e.png',
      'https://img10.360buyimg.com/ddimg/jfs/t1/143263/39/10358/153933/5f83ffc1Eaafbe7bb/296a06397eb9c527.png',
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
        url: "/pages/detailsamThirty/detailsamThirty"
      })
    }else if(id === '2'){
      wx.navigateTo({
        url: "/pages/detailsamSixtysix/detailsamSixtysix"
      })
    }else{
      wx.navigateTo({
        url: "/pages/detailsamEightyeight/detailsamEightyeight"
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