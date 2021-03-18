Page({
  data: {
    avatar: "",
    nickName: "",
    address: ""
  },
  _getAuthor() {
    my.getAuthCode({
      scopes: ['auth_user'],
      success: (res) => {
        my.alert({
          content: res.authCode,
        });
      },
    });
  },
  /**
   * @function 获取到用户基本信息
   */
  _getUserinfos() {
    let _this = this
    my.getOpenUserInfo({
      success: (res) => {
        let tempInfos = JSON.parse(res.response).response
        _this.setData({
          avatar: tempInfos.avatar,
          nickName: tempInfos.nickName
        })
      },
      fail: (res) => {
        console.log(res)
      },
    });
  },
  onLoad(query) {
    // 页面加载  
    console.info(`Page onLoad with query: ${JSON.stringify(query)}`);
  },
  onReady() {
    // 页面加载完成
  },
  onShow() {
    // 页面显示
    this._getUserinfos()
  },
  onHide() {
    // 页面隐藏
  },
  onUnload() {
    // 页面被关闭
  },
  onTitleClick() {
    // 标题被点击
  },
  onPullDownRefresh() {
    // 页面被下拉
  },
  onReachBottom() {
    // 页面被拉到底部
  },

  onShareAppMessage() {
    // 返回自定义分享信息
    return {
      title: 'My App',
      desc: 'My App description',
      path: 'pages/index/index',
    };
  },
});
