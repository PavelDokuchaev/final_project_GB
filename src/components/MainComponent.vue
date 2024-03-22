<template>
  <main class="main"></main>
</template>

<script>
import { useHead } from '@vueuse/head';

export default {

  setup() {
    useHead({
      title: 'ФОТОГРАФ ПАВЕЛ ДОКУЧАЕВ | ГЛАВНАЯ СТРАНИЦА',
      meta: [
        {
          name: 'Main',
          content: 'Сайт фотографа Павла Докучаева, г. Самара. В проектах обращается к теме идентификации субъекта и самосознания через исследование общечеловеческих ценностей современного общества. Самый известный проект: "Пацан к успеху шел или 12 советов, как стать успешным".',
        },
      ],
    })
  }
}
</script>

<style lang="scss">
.main {
  background-image: url("../assets/img/main1.jpg");
  background-position: center center;
  background-repeat: no-repeat;
  min-height: 455px;
  background-size: cover;
  flex: 1 1 auto;
  margin-bottom: 30px;
}
</style>