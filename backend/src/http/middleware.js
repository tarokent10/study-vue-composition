module.exports = function (options) {
  return function (req, res, next) {
    console.log(`LOG:${req.params}`);
    next();
  };
};
