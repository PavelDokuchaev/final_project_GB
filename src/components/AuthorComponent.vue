<template>
  <div class="content content-center">
    <div class="content-title">
      <div><img class="content-title__img" src="../assets/img/self.jpg" alt="portrait img" /></div>
      <div class="content-title__text">
        <h1 class="content-title__text-head">ОБ&nbsp;АВТОРЕ</h1>
        <p class="content-title__text-desc">
          Родился в&nbsp;1989 году в&nbsp;Куйбышеве.<br>
          В&nbsp;2019 году закончил школу проектной фотографии, базирующуюся в
          галерее современного искусства &laquo;Виктория&raquo; (г. Самара).<br>
          В&nbsp;проектах обращается к&nbsp;теме идентификации субъекта и&nbsp;самосознания
          через исследование общечеловеческих ценностей современного общества.
          Использует фотографию как медитативную практику.<br>
          Живет и&nbsp;работает в&nbsp;Самаре.
        </p>
        <h2 class="content-title__text-subhead">ГРУППОВЫЕ ВЫСТАВКИ</h2>
        <h2 class="content-title__text-subhead">2023</h2>
        <p class="content-title__text-desc">
          &mdash;&nbsp;&laquo;Молодая фотография&raquo;, Инновационный культурный центр, Калуга,
          Россия</p>
        <h2 class="content-title__text-subhead">2020</h2>
        <p class="content-title__text-desc">
          &mdash;&nbsp;&laquo;Самарский взгляд&raquo;, галерея &laquo;Новое пространство&raquo;, Самара,
          Россия;<br>
          &mdash;&nbsp;&laquo;Молодые фотографы России&raquo;, Инновационный культурный центр,
          Калуга, Россия;<br>
          &mdash;&nbsp;&laquo;Повседневные эпизоды&raquo;, проект &laquo;Скрытый сад&raquo;, Ботанический сад
          Самарского университета, Самара, Россия;<br>
          &mdash;&nbsp;&laquo;Post/DIGITAL/&raquo;, Тольяттинский художественный музей, Тольятти,
          Россия<br></p>
        <h2 class="content-title__text-subhead">2019</h2>
        <p class="content-title__text-desc">
          &mdash;&nbsp;&laquo;Молодые фотографы России&raquo;, Музей изобразительных искусств,
          Калуга, Россия;<br>
          &mdash;&nbsp;&laquo;Самарский взгляд&raquo;, галерея &laquo;Новое пространство&raquo;, Самара,
          Россия;<br>
          &mdash;&nbsp;&laquo;Коллективность. Ось мира&raquo; в&nbsp;рамках международного фестиваля
          современной фотографии Присутствие&nbsp;/ Presence, общественное
          пространство Севкабель порт, Санкт-Петербург, Россия;<br>
          &mdash;&nbsp;&laquo;Новые художники&raquo;, галерея современного искусства &laquo;Виктория&raquo;,
          Самара, Россия<br>
        </p>
        <h2 class="content-title__text-subhead">НАГРАДЫ</h2>
        <p class="content-title__text-desc">
          &mdash;&nbsp;2023 &laquo;Молодая фотография&raquo; (3&nbsp;место в&nbsp;номинации &laquo;Свободная
          тема&raquo;);<br>
          &mdash;&nbsp;2020 &laquo;Молодые фотографы России&raquo; (особое мнение жюри)
        </p>
        <h2 class="content-title__text-subhead">ПУБЛИКАЦИИ</h2>
        <p class="content-title__text-desc">
          <a class="content-title__text-link" href="https://takiedela.ru/2023/02/macho-na-dosuge/" target="_blank">Такие
            дела</a> <br>
          <a class="content-title__text-link" href="https://www.rbth.com/lifestyle/331579-successful-man-in-russia"
            target="_blank">RUSSIA BEYOND</a> <br>
          <a class="content-title__text-link" href="https://lifehacker.ru/sovety-kouchej-v-rossijskix-realiyax/"
            target="_blank">Лайфхакер</a> <br>
          <a class="content-title__text-link"
            href="https://www.gazetametro.ru/legacy/articles/prishel-k-uspehu-samarskij-fotograf-originalno-vysmejal-sovety-motivatsionnyh-trenerov-17-01-2020"
            target="_blank">Metro</a> <br>
          <a class="content-title__text-link" href="https://www.new-east-archive.org/features/show/12803/samara-russia-z"
            target="_blank">The Calvert Journal</a> <br>
          <a class="content-title__text-link"
            href="https://www.dk.ru/news/neminuemyy-patsanskiy-uspeh-fotograf-izobrazil-sovety-biznes-kouchey-v-rossiyskih-realiyah-237131422"
            target="_blank">Деловой квартал</a>
        </p>
      </div>
    </div>
  </div>
</template>

<script>
import { useHead } from '@vueuse/head';

export default {

  setup() {
    useHead({
      title: 'ОБ АВТОРЕ | ФОТОГРАФ ПАВЕЛ ДОКУЧАЕВ',
      meta: [
        {
          name: 'Author',
          content: 'Краткая биография, участие в выставках, награды, публикации.',
        },
      ],
    })
  }
}
</script>

<style lang="scss">
.content-center {
  padding-left: calc(50% - 400px);
  padding-right: calc(50% - 400px);
}

.content {
  margin-bottom: 20px;

  &-title {
    display: flex;
    flex-direction: row;
    gap: 30px;
    align-items: flex-start;
    padding-top: 15px;

    &__img {
      width: 150px;
      border-radius: 50px;
    }

    &__text {

      &-head {
        color: rgb(50, 50, 50);
        font-size: 30px;
        font-style: normal;
        font-weight: 400;
        line-height: normal;
        margin-bottom: 10px;
      }

      &-subhead {
        color: rgb(50, 50, 50);
        font-size: 20px;
        font-style: normal;
        font-weight: 400;
        line-height: normal;
        margin-bottom: 15px;
      }

      &-desc {
        color: rgb(92, 92, 92);
        font-size: 15px;
        font-style: normal;
        font-weight: 400;
        line-height: normal;
        margin-bottom: 20px;
        line-height: 25px;
        padding-bottom: 7px;
      }

      &-link {
        color: rgb(92, 92, 92);
        border-bottom: 1px solid #000;
      }
    }
  }
}
</style>