<template>
  <div class="project content-center">
    <h1 class="project-head">МАЧО НА&nbsp;ДОСУГЕ</h1>
    <p class="project-text">В&nbsp;приложениях для знакомств к&nbsp;мужскому телу предъявляется много требований. Чтобы
      понравиться
      девушкам, я&nbsp;решил соответствовать самым популярным из&nbsp;них:
    </p>
    <ol class="project-list">
      <li>Носить бороду</li>
      <li>Длинные пальцы</li>
      <li>Большой член</li>
      <li>Мускулистые руки</li>
      <li>Крепкая попа</li>
      <li>Кубики на&nbsp;животе</li>
      <li>Широкие плечи</li>
      <li>Высокий рост</li>
    </ol>

    <swiper :style="{
      '--swiper-navigation-color': 'rgb(50, 50, 50)',
    }" :autoHeight="true" :spaceBetween="20" :navigation="true" :pagination="pagination" :modules="modules"
      class="mySwiper">
      <swiper-slide><img :src='macho1' alt="macho img 1" class="swiper-img"></swiper-slide>
      <swiper-slide><img :src='macho2' alt="macho img 2" class="swiper-img"></swiper-slide>
      <swiper-slide><img :src='macho3' alt="macho img 3" class="swiper-img__h"></swiper-slide>
      <swiper-slide><img :src='macho4' alt="macho img 4" class="swiper-img"></swiper-slide>
      <swiper-slide><img :src='macho5' alt="macho img 5" class="swiper-img"></swiper-slide>
      <swiper-slide><img :src='macho6' alt="macho img 6" class="swiper-img__h"></swiper-slide>
      <swiper-slide><img :src='macho7' alt="macho img 7" class="swiper-img"></swiper-slide>
      <swiper-slide><img :src='macho8' alt="macho img 8" class="swiper-img"></swiper-slide>
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

import macho1 from '../assets/img/macho1.jpg';
import macho2 from '../assets/img/macho2.jpg';
import macho3 from '../assets/img/macho3.jpg';
import macho4 from '../assets/img/macho4.jpg';
import macho5 from '../assets/img/macho5.jpg';
import macho6 from '../assets/img/macho6.jpg';
import macho7 from '../assets/img/macho7.jpg';
import macho8 from '../assets/img/macho8.jpg';

export default {
  components: { Swiper, SwiperSlide },

  setup() {
    useHead({
      title: 'ПРОЕКТ: МАЧО НА ДОСУГЕ | ФОТОГРАФ ПАВЕЛ ДОКУЧАЕВ',
      meta: [
        {
          name: 'Macho',
          content: 'ПРОЕКТ: МАЧО НА ДОСУГЕ',
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
      macho1: macho1,
      macho2: macho2,
      macho3: macho3,
      macho4: macho4,
      macho5: macho5,
      macho6: macho6,
      macho7: macho7,
      macho8: macho8,
    }
  },
}
</script>

<style lang="scss">
.content-center {
  padding-left: calc(50% - 400px);
  padding-right: calc(50% - 400px);
}

.project {
  display: flex;
  flex-direction: column;
  flex: 1 1 auto;

  &-head {
    color: rgb(50, 50, 50);
    font-size: 30px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    margin-bottom: 15px;
    margin-top: 15px;
    text-align: center;
  }

  &-text {
    color: rgb(92, 92, 92);
    font-size: 15px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    line-height: 20px;
    margin-bottom: 15px;
  }

  &-list {
    color: rgb(92, 92, 92);
    font-size: 15px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    margin-bottom: 25px;
    line-height: 20px;

    li {
      list-style-position: inside;
    }
  }
}

.swiper {
  width: 100%;
  height: auto;
  margin-bottom: 50px;
}

.swiper-slide {
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.swiper-img {
  max-width: 800px;
}

.swiper-img__h {
  max-height: 530px;
}

.swiper .swiper-slide {
  height: auto;
  line-height: 300px;
}

.swiper .swiper-slide:nth-child(2n) {
  height: auto;
  line-height: 500px;
}

.swiper-button-prev,
.swiper-button-next {
  background-color: rgb(92, 92, 92);
  color: rgb(255, 254, 242);
  padding: 25px;
}

.swiper-pagination-bullet {
  width: 20px;
  height: 20px;
  text-align: center;
  line-height: 20px;
  font-size: 12px;
  color: #000;
  opacity: 1;
  background: rgb(92, 92, 92, 0.7);
  transition: all .3s ease-in-out;
}

.swiper-pagination-bullet-active {
  color: rgb(255, 254, 242);
}
</style>