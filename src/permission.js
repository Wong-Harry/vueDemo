import NProgress from 'nprogress'; // Progress 进度条
import 'nprogress/nprogress.css'; // Progress 进度条样式
import router from './router';

router.beforeEach((to, from, next) => {
  console.log('next: ', next);
  console.log('from: ', from);
  console.log('to: ', to);
  NProgress.start();

  if (window.localStorage.getItem('userInfo')) {
  }
});

router.afterEach(() => {
  NProgress.done();
});
