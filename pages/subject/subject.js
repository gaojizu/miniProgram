Page({
  data: { msg: 'HELLO', classinfos: [] },
  onLoad(query) {
    this._init()
  },
  onReady() {
    if (my.canIUse('hideBackHome')) {
      my.hideBackHome();
    }
  },
  /**
   * @function 函数初始化
   */
  _init() {
    this._getclassInfosList()
  },
  onTabItemTap(item) {
    console.log(item)
  },
  _getclassInfosList() {
    my.request({
      url: '/api/classlistinfos.json',
      method: 'GET',
      timeout: 0,
      dataType: 'json',
      success: (result) => {
        this.setData({
          classinfos: result.data
        })
        console.info(result)
      },
      fail: (error) => {
        console.info(error)
      },
      complete: (com) => {
        console.info(com)
      }
    });
  },
  _getDetails(event) {
    let currId = event.target.dataset.info.id
    let type = event.target.dataset.info.type
    my.navigateTo({
      url: '/pages/catalog/catalog?classId=' + currId + "&" + "type=" + type,
      success: (res) => {
        console.log(res)
      }
    });
  },
  _getNotice() {
    my.redirectTo({
      url: '../notice/notice',
      success: (res) => {
        console.log("success")
      }
    });
  }
})