<template>
  <div>
    <div class="bg-wrap">
      <div class="wrap-1200">
        <div class="book-search">
      <input class="search-input" type="text" placeholder="책이름, 저자, 출판사 를 입력해주세요">
      <button class="search-btn" type="button">책 검색</button>
    </div>
    <div class="results" ondrop="drop(this, event);" ondragenter="return false;" ondragover="return false;">

    </div>
    <div class="picked-result" ondrop="drop(this, event);" ondragenter="return false;" ondragover="return false;">

    </div>
    <router-link to="/mybook"><button type="submit" class="booksave-btn">저장</button></router-link>


  </div>
</div>
</div>
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
