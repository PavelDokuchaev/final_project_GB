<template>
  <div class="pagenotfound center">
    <div class="pagenotfound-content">
      <h1 class="pagenotfound-content__header">404</h1>
      <p class="pagenotfound-content__text">Извините, но&nbsp;такой страницы не&nbsp;существует</p>
      <button class="pagenotfound-content__button"><router-link class="button-link" :to="link.url">ВЕРНУТЬСЯ НА
          ГЛАВНУЮ</router-link>
      </button>
    </div>
  </div>
</template>

<script>
import { useHead } from '@vueuse/head';

export default {
  data() {
    return {
      link: {
        name: 'Main',
        url: '/'
      }
    }
  },
  setup() {
    useHead({
      title: '404 | ТАКОЙ СТРАНИЦЫ НЕ СУЩЕСТВУЕТ',
      meta: [
        {
          name: '404',
          content: '404',
        },
      ],
    })
  }
}
</script>

<style lang="scss">
.pagenotfound {
  display: flex;
  gap: 81px;
  flex: 1 1 auto;
  background-image: url("../assets/img/main5.jpg");
  background-position: center center;
  background-repeat: no-repeat;
  min-height: 485px;
  background-size: cover;
  flex: 1 1 auto;
  margin-bottom: 30px;

  &-content {

    &__header {
      font-size: 249px;
      color: #00794d;
    }

    &__text {
      font-size: 35px;
      margin-bottom: 20px;
      color: rgb(255, 254, 242);
    }

    &__button {
      border-radius: 18px;
      border: none;
      padding: 26px 30px 26px 30px;
      background-color: rgb(255, 254, 242);
      transition: all .3s ease-in-out;
      cursor: pointer;

      .button-link {
        color: rgb(50, 50, 50);
        font-size: 30px;
        display: flex;
        gap: 10px;
        align-items: center;
      }

      .button-link:hover {
        color: rgb(255, 254, 242);
      }
    }

    &__button:hover {
      background-color: rgb(50, 50, 50);

    }
  }
}
</style>