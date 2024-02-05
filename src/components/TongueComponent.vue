<template>
  <div class="project content-center">
    <h1 class="project-head">КОСТЯНОЙ ЯЗЫК</h1>
    <p class="project-text">
      Я&nbsp;часто испытываю чувство тревожности в&nbsp;абсолютно безобидных ситуациях.
      Например, совершая покупки в&nbsp;магазине, передавая деньги за&nbsp;проезд в
      транспорте, даже общаясь с&nbsp;близкими родственниками. В&nbsp;моменты начала
      коммуникации я&nbsp;ощущаю сильный прилив адреналина, как будто мне прямо
      сейчас предстоит прыгнуть с&nbsp;парашютом. Язык становится костяным, из-за
      чего я&nbsp;могу сказать что-то непонятное, мозг отказывается строить
      логические цепочки, поэтому меня могут ввести в&nbsp;ступор даже самые
      обычные вопросы. Мне нужно довольно продолжительное время, чтобы
      успокоиться, отстраниться и&nbsp;забыть, вызывающие тревожность ситуации. На
      фотографиях я&nbsp;постарался запечатлеть моменты, в&nbsp;которые у&nbsp;меня возникало
      чувство тревожности.
    </p>

    <swiper :style="{
      '--swiper-navigation-color': 'rgb(50, 50, 50)',
    }" :autoHeight="true" :spaceBetween="20" :navigation="true" :pagination="pagination" :modules="modules"
      class="mySwiper">
      <swiper-slide><img :src='lang1' alt="tongue img 1" class="swiper-img"></swiper-slide>
      <swiper-slide><img :src='lang2' alt="tongue img 2" class="swiper-img"></swiper-slide>
      <swiper-slide><img :src='lang3' alt="tongue img 3" class="swiper-img__h"></swiper-slide>
      <swiper-slide><img :src='lang4' alt="tongue img 4" class="swiper-img"></swiper-slide>
      <swiper-slide><img :src='lang5' alt="tongue img 5" class="swiper-img"></swiper-slide>
      <swiper-slide><img :src='lang6' alt="tongue img 6" class="swiper-img__h"></swiper-slide>
      <swiper-slide><img :src='lang7' alt="tongue img 7" class="swiper-img"></swiper-slide>
    </swiper>
  </div>
</template>

<script>
import { Swiper, SwiperSlide } from 'swiper/vue';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Navigation, Pagination } from 'swiper/modules';

import { useHead } from '@vueuse/head';

import lang1 from '../assets/img/lang1.jpg';
import lang2 from '../assets/img/lang2.jpg';
import lang3 from '../assets/img/lang3.jpg';
import lang4 from '../assets/img/lang4.jpg';
import lang5 from '../assets/img/lang5.jpg';
import lang6 from '../assets/img/lang6.jpg';
import lang7 from '../assets/img/lang7.jpg';

export default {
  components: { Swiper, SwiperSlide },
  setup() {
    useHead({
      title: 'ПРОЕКТ: КОСТЯНОЙ ЯЗЫК | ФОТОГРАФ ПАВЕЛ ДОКУЧАЕВ',
      meta: [
        {
          name: 'Tongue',
          content: 'ПРОЕКТ: КОСТЯНОЙ ЯЗЫК',
        },
      ],
    });

    return {
      pagination: {
        clickable: true,
        renderBullet: function (index, className) {
          return '<span class="' + className + '">' + (index + 1) + '</span>';
        },
      },
      modules: [Navigation, Pagination],
    };
  },
  data() {
    return {
      lang1: lang1,
      lang2: lang2,
      lang3: lang3,
      lang4: lang4,
      lang5: lang5,
      lang6: lang6,
      lang7: lang7,
    }
  },
}
</script>

<style lang="scss"></style>