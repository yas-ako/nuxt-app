<script setup lang="ts">
const props = defineProps({
  posts: Object
})
</script>

<template>
  <div class="contents">
    <div class="article" v-for="post in posts.contents" :key="post.id">
      <div class="details">
        <nuxt-link :to="`/news/${post.id}/`">
          <div class="news-title">
            {{ post.title }}
          </div>
        </nuxt-link>
        <div class="times gray small">
          <!-- <div class="time"> <img class="svg" src="~assets/img/pencil.svg" /> {{ $formatDate(post.publishedAt) }}</div> -->
          <!-- <div class="time" v-if="$formatDate(post.publishedAt)!=$formatDate(post.revisedAt)"> <img class="svg" src="~assets/img/reload.svg" /> {{ $formatDate(post.revisedAt) }}</div> -->
          <!-- <div class="time"> <img class="svg" src="~assets/img/pencil.svg" /> {{ $formatDate(post.publishedAt) }}</div> -->
          <div class="time"> <img class="svg" src="~assets/img/clock.svg" /> {{ $formatDate(post.revisedAt) }}</div>
        </div>
      </div>
      <div class=" article_fotter">
        <div class="tags">
          <div class="tag small" v-for="tag in post.tag" :key="tag.id">{{ tag.name }} </div>
        </div>
        <div class="writer gray small">{{ post.writer.name}}</div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.gray {
  color: #888;
}

.small {
  font-size: 15px;
}

.contents {
  display: grid;
  gap: 18px;
}

.article {
  /* background-color: #e8eaf0; */
  background-color: #fff;
  padding: 10px;
}

.details {
  display: flex;
  margin-bottom: 3px;
  justify-content: space-between;
}

.news-title {
  margin: 0 0 2px 5px;
  font-size: 20px;
  word-break: break-all;
}

.times {
  margin: 5px;
}

.time {
  width: max-content;
}

.article_fotter {
  margin: 0 5px 5px 5px;
}

.tag {
  margin: 0 5px 5px 0;
  /* word-break: break-all; */
  /* white-space: normal; */
  padding: 2px;
  border: #5d67bc solid 1px;
  border-radius: 3px;
  background-color: #5d67bc;
  color: #f2f3f7;
}


.tags {
  display: inline-flex;
  flex-wrap: wrap;
  flex-direction: row;
  /* word-break:keep-all */
}

.svg {
  width: 14px;
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