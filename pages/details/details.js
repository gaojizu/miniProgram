Page({
  data: {
    datilsList: [],
    id: 0,
    type: ''
  },
  onLoad(query) {
    console.log(query)
    this.setData({
      id: query.id,
      type: query.type
    })
    this._init()
  },
  _init() {
    this._getDetails()
  },
  _getDetails() {
    my.request({
      url: '/api/details.json',
      method: 'POST',
      params: {
        classId: this.data.id,
        type: this.data.type
      },
      dataType: 'json',
      success: (result) => {
        console.log(result)
        this.setData({
          datilsList : result.data.details
        })
      },
      fail: (error) => {
        console.error(error)
      },
      complete: (msg) => {
        console.log(msg)
      }
    });
  }
})