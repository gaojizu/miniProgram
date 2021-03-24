Page({
  data: {
    currId: 0,
    currType:'',
    catLogLists: [],
  },
  onLoad(query) {
    this.setData({
      currId: query.classId,
      currType:query.type
    })
    this._getcataLog()
  },
  _getcataLog() {
    my.request({
      url: '/api/catalog.json',
      method: 'POST',
      timeout: 0,
      params: {
        classId: this.data.currId
      },
      dataType: 'json',
      success: (result) => {
        this.setData({
          catLogLists: result.data.catlogs
        })
      },
      fail: (error) => {
        console.log(error)
      },
      complete: (com) => {
        console.log(com)
      }
    })
  },
  _toStudy(event) {
    let catlogId = event.target.dataset.info.id
    my.navigateTo({
      url: '../details/details?id='+ catlogId + "&" + "type=" + this.data.currType,
      success: (res) => {
        console.log("success")
      }
    });
  }
})