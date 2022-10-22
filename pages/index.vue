<script setup lang="ts">
const { fetchArticles, articles } = useArticles();
fetchArticles();
</script>

<template>
  <div>
    <h1 class="title">新着記事</h1>
    <ul>
      <li v-for="article in articles" :key="article.id">
        <NuxtLink :to="{path: '/details', query: { id:article.id }}">{{
            article.title
          }}
        </NuxtLink>
      </li>
    </ul>
  </div>
</template>