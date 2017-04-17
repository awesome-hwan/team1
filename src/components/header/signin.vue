<template>

  <div class="bg-wrap">
    <div class="wrap-1200">
      <div class="signin-box">
        <form method="POST" >
          <h2 class="signup-header">로그인</h2>
          <label for="user-id" class="hidden">아이디</label>
          <input type="email" id="user-id" placeholder="이메일 아이디" required>
          <label for="user-pw" class="hidden">패스워드</label>
<<<<<<< HEAD
          <input type="password" id="user-pw" placeholder="비밀번호" @keyup.enter="clickedLoginButton" required>
          <button type="button" class="signin-btn" @click="clickedLoginButton">로그인</button>
=======
          <input type="password" id="user-pw" placeholder="비밀번호">
          <router-link to="/mybook"><button type="button" class="signin-btn" @click="clickedLoginButton">로그인</button></router-link>
>>>>>>> 2bfa52c100d59d91da77eaa79db7db917b42ad3e
        </form>
        <div class="signin-info">
          <p>아직 아이디가 없으신가요? </p>
          <p>
            <router-link to="/signup" tag="a"><span>회원가입 바로가기</span></router-link>
          </p>
        </div>

      </div>
    </div>
  </div>

</template>
<script>
export default {
<<<<<<< HEAD
    data() {
        return {

        }
=======
  name: 'app',
  data () {
    return {
          // setCookie(name, value, expireDays) {
          //   var exdate=new Date();
          //   exdate.setDate(exdate.getDate() + expireDays);
          //   var c_value=escape(value) + ((expireDays==null) ? "" : "; expires="+exdate.toUTCString());
          //   document.cookie=name + "=" + c_value;
          // },
          // getCookie(c_name) {
          // 	var i,x,y,ARRcookies=document.cookie.split(";");
          // 	for (i=0;i<ARRcookies.length;i++) {
          // 	  x=ARRcookies[i].substr(0,ARRcookies[i].indexOf("="));
          // 	  y=ARRcookies[i].substr(ARRcookies[i].indexOf("=")+1);
          // 	  x=x.replace(/^\s+|\s+$/g,"");
          //
          // 	  if (x==c_name) {
          // 			return unescape(y);
          // 		}
          // 	}
          // }
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
>>>>>>> 2bfa52c100d59d91da77eaa79db7db917b42ad3e
    },
    methods: {
        clickedLoginButton(){
          var username = document.querySelector('#user-id').value;
          var password = document.querySelector('#user-pw').value;
          var user_data = {
              username: username,
              password: password,
          };
        // Implemented Login function, after click button
        this.Login(user_data);
        },
        Login(user_data){
            console.log(user_data);
            // debugger;
            // Bring the soobook api using ajax
            $.ajax({
                url: "https://soobook.devlim.net/api/user/login/",
                type: 'POST',
                dataType: "json",
                data: user_data
            })
            .done(function(response) {
                console.log('done', response);
                // save tokenKey
                var tokenKey = response.key;
                // nickname setting
                var user_nickname = response.user.nickname;
                console.log(user_nickname);

                // Cookie setting
                setCookie('SoobookToken', tokenKey, 90);

                // save key value & nickname to localStorage
                localStorage.setItem("key", response.key);
                localStorage.setItem("user", response.user.nickname);

                location.href = "/mybook"
            })
            .fail(function(error) {
                console.log('fail', error.message);
            });
            function setCookie(name, value, expireDays) {
              var exdate=new Date();
              exdate.setDate(exdate.getDate() + expireDays);
              var c_value=escape(value) + ((expireDays==null) ? "" : "; expires="+exdate.toUTCString());
              document.cookie=name + "=" + c_value;
            }
        },
    }
}
</script>
<style>

</style>
