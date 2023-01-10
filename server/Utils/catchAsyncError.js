// catch Async Error with a single function
module.exports = (func) => {
  return (req, res, next) => {
    func(req, res, next).catch((err) => next(err));
    console.log("Catch Async Error chalu hai");
  };
};
