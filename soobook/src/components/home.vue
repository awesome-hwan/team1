<template>
  <div id="app">
    <input v-model="search" type="text" class="searchInput">
    <button type="button" @click="searchTerm">책 검색</button>
    <div class="results">
      <div v-for="post in posts" class="resultsBookList">
        <img :src="post.cover_thumbnail" :alt="post.title">
        <div class="resultsBookListP">
          <h3 class="resultsTitle">{{post.title | cropTitle}}</h3>
          <p class="resultsAuthor">{{post.author}}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'app',
  data: function () {
    return {
      search: '',
      posts: []
    }
  },
  filters: {
    cropTitle(value) {
      if (value.length < 7) {
        return value;
      } else {
        return value.substr(0, 7) + '...';
      }
    }
  },
  methods: {
    searchTerm(){
      var _this = this;
      var search = this.search;
      // axios.get("https://soobook.devlim.net/api/book/search/?keyword=" + search)
      //      .then(function(response) {
      //          return response.json();
      //      })
      //      .then(function(data) {
      //
      //      })

      $.ajax({
        url: "https://soobook.devlim.net/api/book/search/?keyword=" + search,
        dataType: "json",

        success: function(data){
          _this.search = '';
          _this.posts = data.results;
        },
        type: 'GET'
      });
    },
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  color: #2c3e50;
  max-width: 560px;
}
</style>
