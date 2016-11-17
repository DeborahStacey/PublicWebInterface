import NProgress from 'nProgress';

module.exports = {
  path: '/dashboard/PublicStats',
  getComponent(location, cb) {
  	NProgress.start();
    require.ensure([], (require) => {
    	require('nProgress').done();
      cb(null, require('./PublicStats'));
    });
  }
}