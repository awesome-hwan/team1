<template>
  <div id="app">
    <input type="text" class="searchInput">
    <button v-on:click="searchTerm">책 검색</button>
    <div class="results"></div>
  </div>
</template>

<script>
export default {
  name: 'app',
  data: function () {
    return {
      // posts: []
    }
  },
  methods: {
    searchTerm(){
      var search = document.querySelector('.searchInput').value;
      var results = document.querySelector('.results');
      $.ajax({
        url: "https://soobook.devlim.net/api/book/search/?keyword=" + search,
        dataType: "json",

        success: function(data){
          for(var i=0; i<data.results.length; i++){
            var bookInfo = [
              '<div class="resultsBookList">',
              '<img src="' + data.results[i].cover_thumbnail + '">',
              '<div class="resultsBookListP">',
              '<h3>' + data.results[i].title + '</h3>',
              '<p>' + data.results[i].author + '</p>',
              '</div>',
              '</div>'
            ].join('');
            results.innerHTML += bookInfo;
          }
        },
        type: 'GET'
      });
    }
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
