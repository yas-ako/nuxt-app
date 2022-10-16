<script>

const route = useRoute();
const name = route.query;
const { article, fetchArticle } = useArticles();
fetchArticle(+id);
</script>

<template>
  <div>

  </div>
</template>