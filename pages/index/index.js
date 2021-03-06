// pages/wode/wode.js
Page({

  /** 
   * 页面的初始数据
   */
  data: {
    imgUrl:[
      'https://img11.360buyimg.com/ddimg/jfs/t1/141106/6/10567/458756/5f83f33bEe17ec49e/0f7c2eb5d48f2da1.png',
      'https://img12.360buyimg.com/ddimg/jfs/t1/159324/17/10670/198709/6043618dE34b3f6ac/578ed5ef83a80c37.png'
    ],
    urlList:[
      'https://img11.360buyimg.com/ddimg/jfs/t1/132661/11/12118/143871/5f83f68fE4790534b/030efa483da12289.png',
      'https://img12.360buyimg.com/ddimg/jfs/t1/139394/3/10650/161521/5f83f6bbEb36e67e1/6703a86ca722cf45.png',
      'https://img10.360buyimg.com/ddimg/jfs/t1/154113/9/1995/124369/5f83f6d9E0f31d2a2/bb168a49b24f71fb.png',
      'https://img14.360buyimg.com/ddimg/jfs/t1/152217/19/2017/208075/5f83f6faEee16f7b1/2a19117114a89a75.png',
      'https://img13.360buyimg.com/ddimg/jfs/t1/169501/9/9536/125485/6041a86aEcad18dfd/93ae491b82c98682.png'
    ]
  },

  toDetaila(event){
    let id = event.currentTarget.id;
    if(id === '0'){
      wx.navigateTo({
        url: "/pages/hdRecorderSeries/hdRecorderSeries"
      })
    }else if(id === '1'){
      wx.navigateTo({
        url: "/pages/smartStreamingSeries/smartStreamingSeries"
      })
    }else if(id === '2'){
      wx.navigateTo({
        url: "/pages/hiddenRecorderSeries/hiddenRecorderSeries"
      })
    }else if(id === '3'){
      wx.navigateTo({
        url: "/pages/truckReconrderSeries/truckReconrderSeries"
      })
    }else{
      wx.navigateTo({
        url: "/pages/usbSeries/usbSeries"
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
    return {
      title: "神州行小程序", //分享标题
      imageUrl: 'https://img12.360buyimg.com/ddimg/jfs/t1/159324/17/10670/198709/6043618dE34b3f6ac/578ed5ef83a80c37.png', //图片路径
      path: 'pages/index/index'
    }
  }
})