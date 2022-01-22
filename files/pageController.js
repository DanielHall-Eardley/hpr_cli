exports.pageController = `
const catchAsyncError = require('../../util/catchAsyncError');

exports.getHomePage = catchAsyncError(async (req, res, next) => {
  res.render('home/home.handlebars');
})
`