<template>
  <div id="app">
  <div class="wrapper">
    <header class="header">
      <h1 class="logo"><a href="../index.html"><img src="./assets/images/mainlogo.png" alt="SOO BOOK" width="200px" height="40px"></a></h1>
      <div class="login">
        <form>
            <div class="user-login">
                <label for="user-id"></label>
                <input type="email" id="user-id" required placeholder="ID: guest@gmail.com">
            
                <label for="user-pw"></label>
                <input type="password" id="user-pw" required placeholder="PW: 8자리 이상">
                <button type="submit" class="login-btn" @click="clickedLoginButton">로그인</button>
            </div>
        </form>
        <div class="create-account">
          <a href="./signup" class="sign-up-anchor">회원가입</a>
        </div>
        
      </div>
    </header>
    <router-view></router-view>
    <footer>
      <p class="footer-comment">©copyright soobook fastcampus</p>
    </footer>
  </div>
  </div>
</template>

<script>
export default {
  name: 'app',
  data () {
    return {
          setCookie(name, value, expireDays) {
            var exdate=new Date();
            exdate.setDate(exdate.getDate() + expireDays);
            var c_value=escape(value) + ((expireDays==null) ? "" : "; expires="+exdate.toUTCString());
            document.cookie=name + "=" + c_value;
          },
          getCookie(c_name) {
          	var i,x,y,ARRcookies=document.cookie.split(";");
          	for (i=0;i<ARRcookies.length;i++) {
          	  x=ARRcookies[i].substr(0,ARRcookies[i].indexOf("="));
          	  y=ARRcookies[i].substr(ARRcookies[i].indexOf("=")+1);
          	  x=x.replace(/^\s+|\s+$/g,"");
            
          	  if (x==c_name) {
          			return unescape(y);
          		}
          	}
          }

    }
  },
  methods: {
    clickedLoginButton(){
      var username = document.querySelector('#user-id').value;
      var password = document.querySelector('#user-pw').value;
      var user_data = {
          username: username,
          password: password,
      };
    // console.log(user_input);
    // 버튼 클릭시 로그인 함수 실행
    this.Login(user_data);
    },
    Login(user_data){
      console.log(user_data);
        // jQuery ajax를 이용하여 SOOBOOK API 가져오기  
        $.ajax({
            url: "https://soobook.devlim.net/api/user/login/",
            type: 'POST',
            dataType: "json",
            data: user_data
        })
        .done(function(response) {
            console.log(response);
            var tokenKey = response.key;
            // this.setCookie('SoobookToken', tokenKey, 90);
            // location.href = "../my-page.html";
        })
        .fail(function(response) {
            console.log(response);
        });
    },
    
  }
}
</script>

<style lang="sass">
*
  margin: 0
  padding: 0
  box-sizing: border-box

.wrapper
  width: 100%
  margin: 0 auto

.header 
  padding: 0 100px 0 100px
  height: 58px
  display: flex
  flex-flow: row nowrap
  justify-content: space-between
  align-items: center
  background: #181818
  color: #fff
  .logo
    padding-top: 10px
  .login 
    text-align: center
    display: flex
  
input 
  width: 150px
  height: 24px
  border-radius: 3px
  border-style: none

.user-login 
  padding: 0 5px

.login-btn
  width: 55px
  height: 25px
  border-radius: 3px
  border-style: none
  background: #eceef1

.create-account  
  width: 55px
  height: 25px
  padding-top: 2px
  border-radius: 3px
  border-style: none
  background: #eceef1
  .sign-up-anchor
    text-decoration: none
    color: #181818
    font-size: 11px

footer
  position: fixed
  bottom: 0
  width: 100%
  background: #181818

footer p
  margin: 0 auto
  text-align: center
  color:#eee    

// @import "../sass/footer"

</style>
