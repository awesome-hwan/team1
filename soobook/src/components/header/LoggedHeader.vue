<template>
    <div class="header-wrap">
        <header class="header">
          <h1 class="logo">
            <router-link to="/" active-class="current-page" exact>
                <img src="../../assets/images/mainlogo.png" alt="SOO BOOK" width="200px" height="40px">
            </router-link>
          </h1>

          <div class="logged">
            <span class="nickname-area">{{msg}} 님</span>
            <a href class="log-out" @click="LogOut">로그아웃</a>
            <!-- <router-link to="/" class="log-out" @click="LogOut">로그아웃</router-link> -->
          </div>
        </header>
    </div>

</template>

<script>
export default {
    data() {
        return {
            msg: localStorage.getItem("user")
        }
    },
    methods: {
        LogOut(){
            var token = 'Token ' + getCookie('SoobookToken');
            $.ajax({
              url: 'https://soobook.devlim.net/api/user/logout/',
              type: 'POST',
              headers: {
                Authorization: token,
              }
            })
            .done(function(response) {
              console.log(response);
            //   location.href= "./"
            })
            .fail(function(response) {
              console.log(response);
            });
        }
    }
}
</script>

<style lang="sass">
@import "../../sass/header"

</style>