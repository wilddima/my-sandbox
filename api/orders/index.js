let router = require('../../middlewares/router')
const db = require('../../db')

router.get('/orders', function *(next) {
  this.response.status = 200
  this.response.body = db.orders
  yield next
})
