<template>
  <div>
    <div class="bg-wrap">
      <div class="wrap-1200">
        <div class="book-search">
          <input v-model="search" type="text" class="search-input" placeholder="책이름, 저자, 출판사 를 입력해주세요">
          <button type="button" @click="searchTerm" class="search-btn">책 검색</button>
        </div>
        <div class="searchResults">
          <div class="results">
              <div class="resultsBookList" v-for="post in posts" draggable="true"  @dragstart="drag($event, post.id)" :id="post.id">
                <img :src="post.cover_thumbnail" :alt="post.title">
                <div class="resultsBookListP">
                  <h3 class="resultsTitle">{{post.title | cropTitle}}</h3>
                  <p class="resultsAuthor">{{post.author}}</p>
                </div>
              </div>
            <!--App.vue에 있는  results에서 padding, height 값 지움. -->
          </div>
          <div class="hiddenArea" style="right: -84%;">
            <button type="button" class="hiddenMenuButton" @click="lookMenu"><i class="fa fa-angle-double-left fa-2x" aria-hidden="true"></i></button>
            <div class="resultsRight">
              <div class="picked-result" id="div1" @drop="drop($event)" @dragover="allowDrop($event)">
                <!--App.vue에 있는  picked-result에서 높이값 지움.(이 파일 밑에서 높이값 설정) -->

                <router-link to="/mybook">
                  <button type="button" class="booksave-btn">저장</button>
                  <!--App.vue에 있는  booksave-btn에서 가운데 정렬하는 값, position 지움. -->
                </router-link>
              </div>
            </div>
          </div>
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
      posts: [],
      post:[]
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
    allowDrop(ev) {
      ev.preventDefault();
    },
    drag(ev, id) {
      ev.dataTransfer.setData("drag_target", id);
    },
    drop(ev) {
      ev.preventDefault();
      var data = ev.dataTransfer.getData("drag_target");
      // console.log('data: ', data);
      // console.log('ev.target:',ev.target);
      var clonebook = document.getElementById(data).cloneNode(true);
      // console.log("clonebook:",clonebook);
      ev.target.appendChild(clonebook);
      // ev.target.appendChild(document.getElementById(data));
    },
    lookMenu(){
      var hiddenMenu, togglebtn;
      hiddenMenu = document.querySelector('.hiddenArea').style;
      if(hiddenMenu.right === "-84%"){
        hiddenMenu.right = "-10%";
        hiddenMenu.animation = "toggle-in 0.7s ease-in-out"
        togglebtn = document.querySelector('.fa-angle-double-left');
        togglebtn.outerHTML = '<i class="fa fa-angle-double-right fa-2x" aria-hidden="true"></i>';
      }else{
        hiddenMenu.right = "-84%";
        hiddenMenu.animation = "toggle-out 0.7s ease-in-out"
        togglebtn = document.querySelector('.fa-angle-double-right');
        togglebtn.outerHTML = '<i class="fa fa-angle-double-left fa-2x" aria-hidden="true"></i>';
      }
    }
    //  selectBook(e){
    //     var selectBook = document.querySelectorAll('.resultsBookList');
    //     // for (var i = 0; i < selectBook.length; i++) {
    //     //   selectBook.length[i].@onclick = function() {
    //     //     console.log(e.target)
    //     //   }
    //     // }
    //       console.log('dataTransfer: ', e.dataTransfer)
    //  }
  }
}
</script>
<style>
.searchResults{
  display: flex;
  min-height: 600px;
}
.results{
  width: 70%;
  max-height: 500px;
  margin-top: 20px;
}
.resultsRight{
  width: 100%;
  position: relative;
}
.booksave-btn{
  display: block;
  margin: 0 auto;
}
.resultsBookList{
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 22%;
  height: 270px;
  margin: 10px;
  border:1px solid #ccc;
  /*box-shadow:0 1px 1px;*/
  border-radius: 5px;
  text-align: center;
}
.picked-result{
  min-height: 475px;
  margin-top: 30px;
  width: 90%;
}
.hiddenMenuButton{
  display: none;
}
.hiddenArea{
  width: 30%;
  display: flex;
}
.picked-result div{
  /*display: inline-block;*/
  width: 60%;
  height: 270px;
  margin: 10px auto;
}
</style>
