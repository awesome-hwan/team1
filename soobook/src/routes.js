import Home from './components/Home.vue';
import Mypage from './components/Mypage.vue';
import Search from './components/Search.vue';
import Signup from './components/Signup.vue';
import Header from './components/header/Header.vue'
import LoggedHeader from './components/header/LoggedHeader.vue'


// Setting routes

export const routes = [
  { path: '/', 
    name: 'home', 
    components: {
      default: Home,
      header: Header
    } 
  },
  { path: '/mypage', 
    components: {
      default: Mypage,
      header: LoggedHeader
    } 
  },
  { path: '/search', 
    components: {
      default: Search,
      header: LoggedHeader
    } 
  },
  { path: '/signup', 
    components: {
      default: Signup,
      header: Header
    } 
  },

];