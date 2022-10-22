<script setup lang="ts">
const route = useRoute();
const slug: string | string[] = route.params.slug;
const { data: article } = await useFetch('/api/newsDetail', { params: { slug: String(slug) }, });
const cheerio = require('cheerio');
const $ = cheerio.load(article.value.text);
// $('h1').addClass('ha1');
</script>

<template>
  <div class="main">
    <!-- <div class="revised gray small">{{ $formatDate(article.revisedAt) }}</div> -->
    <div class="details gray small">
      <div class="tags">
        <span v-for="(tag, i) in article.tag" :key="tag.id" class="tag"> {{ tag.name }} </span>
      </div>
      <div class="times">
        <div class="time">
          <!-- <img class="svg" src="~assets/img/clock.svg" /> -->
          {{ $formatDate(article.publishedAt) }}
        </div>
        <div class="time" v-if="$formatDate(article.publishedAt)!=$formatDate(article.revisedAt)">
          <!-- <img class="svg" src="~assets/img/reload.svg" /> -->
          {{ $formatDate(article.revisedAt) }}
        </div>
        <!-- <div class="time"> <img class="svg" src="~assets/img/reload.svg" /> {{ $formatDate(article.revisedAt) }}</div> -->
      </div>
    </div>
    <div class="title">{{ article.title }}</div>

    <div class="main-content" v-html="$.html()" />
  </div>
</template>

<style scoped>
.svg {
  width: 14px;
  filter: invert(57%) sepia(0%) saturate(0%) hue-rotate(80deg) brightness(94%) contrast(92%);
}

.gray {
  color: #888;
}

.small {
  font-size: 13px;
}

.tag {
  /* margin: 5px 8px 5px 0; */
  /* word-break: break-all; */
  /* white-space: normal; */
  padding: 2px;
  /* border: #5d67bc solid 1px; */
  /* border-radius: 3px; */
  /* background-color: #5d67bc; */
  /* color: #f2f3f7; */
}

.tags {
  display: inline-flex;
  flex-wrap: wrap;
  flex-direction: row;
  margin: auto 0 auto 0;
}

.details {
  display: flex;
  justify-content: space-between;
}

.time {
  width: max-content;
  padding: 2px;
}
</style>

<style>
.main-content h1 {
  /* background-color: #d9dff5;
  padding: 0.5em 1.2em;
  font-size: 20px;
  margin: 2px 0 7px 0; */
  font-size: 22px;
  padding: 15px 17px;
  /* margin-top: 20px; */
  margin-bottom: 7px;
  background: rgba(27, 39, 55, .05);
  border-radius: 4px;
  line-height: 1.5em;
  font-weight: 500;
}

.main-content h2 {
  /* border-left: 3px solid #bfc6e0; */
  padding: 0.2em 0.7em;
  font-weight: 500;
  margin: 2px 0 12px 0;
  font-size: 17px;
}

/* .main-content h2::before {
  width: 4px;
  height: 90%;
  border-radius: 4px;
  background: #1d2737;
  content: '';
  position: absolute;
  left: 0;
  top: 50%;
  transform: translateY(-50%);
} */
/* .main-content h2 {
  font-size: 17px;
  font-weight: normal;
  border-left: #293d8b solid 5px;
  padding: .5em .75em;
}
.main-content h1 {
  font-size: 19px;
  padding: .5em .75em;
  background-color:#e2e7fa;
  border-left: 4px solid #293d8b;
}
.main-content h3 {
  border-bottom: solid #293d8b 2px;
  display: inline-block;
  padding-right: 10px;
} */
</style>