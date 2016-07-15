console.log('starting function')

function factorial(number) {
  return number === 0 ? 1 : number * factorial(number - 1)
}

exports.handle = function(e, ctx, cb) {
  console.log('processing event: %j', e)
  cb(null, factorial(e.number))
}
