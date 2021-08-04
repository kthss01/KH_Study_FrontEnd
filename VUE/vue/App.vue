<!-- 1. template : 화면에 표시할 요소를 정의 -->
<template>
    <div id="app">
        {{message}}
    </div>
</template>

<!-- 2. script : 뷰 컴포넌트 내용 정의 -->
<!--
    script 치면 자동 완성됨
    계속 업데이트 되고 있다고 함
 -->
<script>
// ecma 6에서 설명이 있음
// import 외부에 파일 읽어올 때 씀
// export 현재 파일에 있는 기능을 외부에서 쓸 수 있게 할 때 씀

// login.vue가 있을 때 Login을 가져오는거
// 컴포넌트가 될 수도 있음
import { Login } from './login.vue'

export default ({
    data() {
        return {
            message : "intro to vue with vue3"
        }
    }
})
</script>

<!-- 3. style : 템플릿에 적용할 css 스타일 정의 -->
<style>
    div {
        font-size: 20px;
    }
</style>