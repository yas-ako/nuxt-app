<script setup lang="ts">

const { data: posts } = await useFetch("/api/newsList")

</script>

<template>
  <div>
    <h1 class="title">お知らせ</h1>
    <div class="divider">
      <section class="container">
        <!-- 記事一覧 -->
        <NewsList :posts="posts" />
      </section>
      <aside class="aside">
        <!-- キーワード検索、タグ一覧 -->
      </aside>
    </div>
  </div>
</template>

<style>

</style>
