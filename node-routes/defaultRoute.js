const {routeToDefaultPath} = require('../helpers/route');



module.exports = (req, res) => {
  console.log('routeToDefaultPath >>>', req.url);
  routeToDefaultPath(req, res, undefined, req.url === '/' ? "/" : '/');
}