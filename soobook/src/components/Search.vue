<template>
    <div>
        <div class="visual">
            <h2 class="book-find-area">{{msg}}</h2>
            <router-link to="/mypage" class="nav-book">{{boxMsg}}</router-link> 
        </div>
        <main class="added__book">
            <h1>Book Finder</h1>
            <input v-model="search" type="text" class="added__book--input" placeholder="Title or Author">
            <button type="submit" class="added__book--btn" @click="bookSearch">Search</button>
            <ul class="results">
                <li v-for="post in posts" class="result-list" @click="addBook">
                    <img :src="post.cover_thumbnail" :alt="post.title">
                    <div class="results-info">
                        <h3 class="title">{{post.title | cropTitle}}</h3>
                        <p class="author">{{post.author}}</p>
                    </div>  
                </li>
            </ul>
        </main>
    </div>
</template>

<script>
export default {
    data() {
        return {
            search:'',
            posts: [],
            id: '',
            msg: "책을 저장 합니다.",
            boxMsg: "저장",
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
        bookSearch(){
            var _this = this;
            var search = this.search;
            var id = this.id;
            console.log(id)
            $.ajax({
                url: "https://soobook.devlim.net/api/book/search/?keyword=" + search,
                dataType: "json",
            
                success: function(data) {
                    console.log(data);
                    _this.search = '';
                    _this.posts = data.results;
                    // _this.id = data.results[i].id;
                    for (var i=0; i<data.results.length[i]; i++) {
                        _this.id = data.results[i].id;
                    }
                },
            });
        },
        addBook(id) {
            var token = 'Token ' + getCookie('SoobookToken');
            // localStorage.getItem("key");
            $.ajax({
                url: "https://soobook.devlim.net/api/book/mybook/",
                type: 'POST',
                dataType: "json",
                headers: {
                  Authorization: token
                },
                body: {
                    book_id: id,
                }
                
            })
            .done(function(response) {
                console.log(response)
            })
            .fail(function(error) {
                console.log(error.message)
            })
        }
    }
}
</script>

<style lang="sass">
@import "../sass/visual"

.added__book
    margin-top: 30px
    display: flex
    justify-content: component
    align-items: center
    flex-flow: column wrap
    .added__book--input
        width: 200px
        height: 30px
        text-align: center
        border: 1px solid #181818
    .added__book--btn
        margin-top: 10px
        width: 50px
        height: 30px

.results
    display: flex
    flex-flow: row wrap


</style>