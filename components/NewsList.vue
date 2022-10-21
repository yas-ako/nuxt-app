<script setup lang="ts">
const props = defineProps({
  posts: Object
})
</script>

<template>
  <div class="contents">
    <div class="article" v-for="post in posts.contents" :key="post.id">
      <div class="details">
        <nuxt-link :to="`/news/${post.id}`">
          <div class="title">
            {{ post.title }}
          </div>
        </nuxt-link>
        <div class="times gray small">
          <div class="time"> {{ $formatDate(post.publishedAt) }}</div>
          <div class="time"> {{ $formatDate(post.revisedAt) }}</div>
        </div>
      </div>
      <div class="article_fotter">
        <div class="tags">
          <div class="tag small" v-for="tag in post.tag" :key="tag.id">{{ tag.name }} </div>
        </div>
        <span class="writer gray small">{{ post.writer.name}}</span>
      </div>
    </div>
  </div>
</template>

<style scoped>
.gray{
  color: #888;
}
.small{
  font-size: 15px;
}
.contents {
  display: grid;
  gap: 18px;
}

.article {
  /* background-color: #e8eaf0; */
  background-color: #fff;
}

.details {
  display: flex;
}

.title {
  margin: 5px 0 2px 5px;
  font-size: 20px;
  word-break: break-all;
}

.times {
  margin: 5px;
}

.time {
  width: 125px;
}

.article_fotter {
  margin: 0 5px 5px 5px;
}

.tag {
  margin-right: 5px;
  /* word-break: break-all; */
  /* white-space: normal; */
}

.tags {
  display: inline-flex;
  flex-wrap: wrap;
  flex-direction: row;
  /* word-break:keep-all */
}

/* .article { */
/* background-color: ; */
/* border-bottom: solid 1px #ababab; */
/* border-top: solid 1px #ababab; */
/* margin: 10px 0; */
/* } */
/*
.time {
  font-size: 10px;
}

.details {
  display: flex;
  justify-content: space-between;
}
.tag{
  margin: 0 10px 0 0;
}
/* .tag {
  color: #888;
  font-size: 12px;

  padding: 5px;
}


.writer {
  color: #888;
  font-size: 12px;

  padding: 5px;
} */
/*
.article_fotter {
  color: #888;
  font-size: 12px;

  padding: 5px;
}

.title {
  font-size: 20px;
  margin: 4px;
}
*/
</style>