<template>
    <div>
        <div class="visual">
            <h2 class="book-find-area">책을 저장 합니다</h2>
            <a class="nav-book" href="./Mypage">저장</a>
        </div>
        <main class="added__book">
            <h1>Book Finder</h1>
            <input type="text" class="added__book--input" placeholder="Title or Author">
            <button type="submit" class="added__book--btn" @click="bookSearch">Search</button>
            <div class="results"></div>
        </main>
    </div>
</template>

<script>
export default {
    data() {
        return {
        
        }
    },
    methods: {
        bookSearch(){
            var search = document.querySelector('.added__book--input').value
            var results= document.querySelector('.results');
            document.querySelector('.results').innerHTML = "";
            console.log(search);
        
            $.ajax({
                url: "https://soobook.devlim.net/api/book/search/?keyword=" + search,
                dataType: "json",
            
                success: function(data) {
                    console.log(data);
                    for (var i=0; i < data.results.length; i++){
                        results.innerHTML += "<img src=" + data.results[i].cover_thumbnail + " >"
                    }
                },
            });
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


</style>