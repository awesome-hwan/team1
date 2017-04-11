<template>
    <div>
        <form class="sign-up">
            <label for="">아이디</label>
            <input type="text" class="userinfo user-id">
            <label for="">비밀번호</label>
            <input type="text" class="userinfo user-pw">
            <label for="">닉네임</label>
            <input type="text" class="userinfo user-nickname">
        </form>
    </div>
</template>

<script>
export default {
    data() {
        return {
        
        }
    }
}
</script>

<style lang="sass">
.sign-up
    margin-top: 100px
    display: flex
    flex-flow: column wrap
    justify-content: center
    align-items: center
    
.userinfo
    border: 1px solid #181818
</style>