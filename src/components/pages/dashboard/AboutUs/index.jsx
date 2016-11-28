import NProgress from 'nprogress';

module.exports = {
  path: '/dashboard/AboutUs',
  getComponent(location, cb) {
  	NProgress.start();
    require.ensure([], (require) => {
    	require('nprogress').done();
      cb(null, require('./AboutUs'));
    });
  }
}