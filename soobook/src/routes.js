import Home from './components/Home.vue';
import Mypage from './components/Mypage.vue';
import Search from './components/Search.vue';
import Signup from './components/Signup.vue';

export const routes = [
  { path: '', component: Home },
  { path: '/mypage', component: Mypage },
  { path: '/search', component: Search },
  { path: '/signup', component: Signup },

];