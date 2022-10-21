<template>
  <footer>
    <div class="fotter">
      <div class="fotter-item left">
        <p class="subheading">記念祭について</p>
        <ul class="children">
          <li>
            <NuxtLink to="/about/">記念祭とは</NuxtLink>
          </li>
          <li>幹部とは</li>
          <li>会計のしくみ</li>
          <li>
            <NuxtLink to="/news/"> お知らせ</NuxtLink>
          </li>
        </ul>
      </div>

      <div class="fotter-item center">
        <p class="subheading">団体紹介</p>
        <ul class="children">
          <li>学年団体</li>
          <li>有志団体</li>
          <li>イベント団体</li>
        </ul>
      </div>

      <div class="fotter-item right">
        <p class="subheading">SNS</p>
        <ul class="icons children">
          <li>Twitter</li>
          <li>LINE</li>
          <li>Instagram</li>
        </ul>
      </div>

    </div>
    <div class="copy">Copyright © 2022 Oshukan Memorial Festival Committee</div>
  </footer>
</template>

<style scoped>
footer {
  background-color: #fff;
  height: 100lvh;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  /* font-size: 4vw; */
}

p {
  margin: 0;
  padding: 1px;
}

ol,
ul {
  list-style-type: none;
  margin: 0;
  padding: 0;
}

.fotter {
  width: 85%;
  margin: auto auto 0 auto;
  display: flex;
  flex-direction: column;
}

.fotter-item {
  margin: 10px 0;
}

.subheading {
  color: #293d8b;
  font-size: 19px;
  /* font-size: 5.2vw; */
  border-bottom: 0.5px #293d8b solid;
}

.children {
  margin: 5px 8px;
}

@media (min-width:520px) {
  footer {
    height: auto;
  }

  .fotter {

    width: 90%;
    flex-direction: row;
    justify-content: space-around;
    text-align: center;

  }
}

@media (min-width:960px) {
  .fotter {
    width: 900px;
  }
}

/* footer {
  text-align: center;
  padding: 10px 10%;
  background: #fff;
  display: flex;
  justify-content: space-around;
  width: 85%;
}

.fotter-item {
  margin: 10px;
  padding: 0 10px;
}

@media (min-width: 520px) {
  .fotter {
    width: 90%;
  }
}

@media (min-width: 960px) {
  .fotter {
    width: 894px;
  }
} */


.copy {
  text-align: center;
  font-size: 10px;
  color: #898989;
  margin: 5px;
}
</style>