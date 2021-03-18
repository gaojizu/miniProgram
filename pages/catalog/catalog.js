Page({
  data: {
    currId: 0
  },
  onLoad(query) {
    console.info(query)
    this.setData({
      currId : query.classId
    })
    this._getcataLog()
  },
  _getcataLog() {
    my.request({
      url: '/api/catalog.json',
      method: 'POST',
      timeout: 0,
      params: {
        classId: this.currId
      },
      dataType: 'json',
      success: (result) => {
        console.info(result)
      },
      fail: (error) => {
        console.info(error)
      },
      complete: (com) => {
        console.info(com)
      }
    })
  }
})