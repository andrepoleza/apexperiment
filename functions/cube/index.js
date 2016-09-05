console.log('starting function')

exports.handle = function(e, ctx, cb) {
  console.log('processing event: %j', e)
  var number = parseInt(e.number)
  cb(null, { number: number * number * number })
}
