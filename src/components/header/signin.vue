<template>

  <div class="bg-wrap">
    <div class="wrap-1200">
      <div class="signin-box">
        <form method="POST" >
          <h2 class="signup-header">로그인</h2>
          <label for="id" class="hidden">아이디</label>
          <input type="email" id="id" placeholder="이메일 아이디">
          <label for="password" class="hidden">패스워드</label>
          <input type="password" id="password" placeholder="비밀번호">
          <router-link to="/mybook"><button type="submit" class="signin-btn" onclick="login()">로그인</button></router-link>
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



    <!-- <div class="modal is-active">
    <router-link to="/"><div class="modal-background"></div></router-link>
    <div class="modal-content">
      <div class="signin-box">
        <form method="POST" >
          <label for="id" class="hidden">아이디</label>
          <input type="email" id="id" placeholder="이메일 아이디">
          <label for="password" class="hidden">패스워드</label>
          <input type="password" id="password" placeholder="비밀번호">
          <button type="submit" class="signin-btn" onclick="login()"><a href="/">로그인</a></button>
        </form>
      </div>
    </div>
    <router-link to="/"><button class="modal-close"></button></router-link>
  </div> -->

</template>
<script>
export default {
  name: "",
  data: function data() {
    return {

    }
  }
}
</script>
<style>

</style>
