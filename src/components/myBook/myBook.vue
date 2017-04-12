<template>
  <div class="bg-wrap">
    <div class="booksearch-box">

      <div class="booksearch-inner">
        <p class="booksearch-title">책장에 등록하고 싶은 책을 검색해보세요</p>
        <router-link to="/booksearch" tag="button" type="button" class="search-btn">검색</button></router-link>
        </div>

    </div>
    <div class="utility">
    <div class="utility-inner">
      <p class="total-msg">Total 등록 책 : <span>103권</span></p>

        <div>
          <router-link to="/mybook"><button type="button" class="view-btn"><i class="fa fa-th fa-2x" aria-hidden="true" ></i></button></router-link>
          <router-link to="/mybook/listview"><button type="button" class="view-btn"><i class="fa fa-th-list fa-2x" aria-hidden="true"></i></button></router-link>
        </div>
        <div class="listbook-search">
         <label><input type="text" placeholder="책장 내 검색"><button type="button"><i class="fa fa-search" aria-hidden="true"></i></button></label>
       </div>
    </div>


    </div>
    <div class="wrap-1200">


      <transition name = "slide" mode="out-in">
      <router-view></router-view>
    </transition>
      <h2>페이지네이션</h2>
    </div>

  </div>
</template>
<script>
export default {
  name: "",
  data: function data() {
    return {

    }
  },
//   mounted:
//   function() {
// jQuery(window).scroll(function() {
// var position = jQuery(window).scrollTop();
// if(position >= 100) {
// jQuery('.utility').addClass('fixed');
// } else {
// jQuery('.utility').removeClass('fixed');
// }
// })
// }
}
</script>
<style>
@keyframes slide-in{
  from{
    transform: translateY(500px);
  }

  to{
    transform: translateY(-21px);
    opacity: 1;
  }
}
.slide-enter-active{
  animation: slide-in 0.4s
}

.slide-leave{
  opacity: 1
}

.slide-leave-active{
    animation: slide-out 0.4s
}
</style>
