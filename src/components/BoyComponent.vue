<template>
  <div class="project content-center">
    <h1 class="project-head">
      ПАЦАН К&nbsp;УСПЕХУ ШЕЛ ИЛИ 12&nbsp;СОВЕТОВ, КАК СТАТЬ УСПЕШНЫМ
    </h1>
    <p class="project-text">
      &laquo;Успешный человек&raquo; становится культом современности. В&nbsp;социальных сетях
      накаченные мужики в&nbsp;дорогих костюмах стоят рядом с&nbsp;крутыми тачками во
      дворе загородного дома&nbsp;и, спекулируя образом успешного человека,
      приглашают меня на&nbsp;бесплатные семинары, пройдя которые я&nbsp;неминуемо стану
      успешным. Я&nbsp;решил разобраться, что&nbsp;же такое успех. Я&nbsp;изучил десятки
      тематических сайтов и&nbsp;вывел десять советов, следуя которым попытался
      достичь успеха:
    </p>
    <ol class="project-list">
      <li>Используйте деловой стиль в&nbsp;одежде</li>
      <li>Займитесь любимым делом</li>
      <li>Трудитесь</li>
      <li>Рискуйте</li>
      <li>Определите цель</li>
      <li>Развивайте коммуникабельность</li>
      <li>Займитесь спортом</li>
      <li>Соглашайтесь на&nbsp;любые предложения</li>
      <li>Больше читайте</li>
      <li>Займитесь йогой</li>
      <li>Окружите себя единомышленниками</li>
      <li>Правильно отдыхайте</li>
    </ol>

    <swiper :style="{
      '--swiper-navigation-color': 'rgb(50, 50, 50)',
    }" :autoHeight="true" :spaceBetween="20" :navigation="true" :pagination="pagination" :modules="modules"
      class="mySwiper">
      <swiper-slide><img :src='boy1' alt="boy img 1" class="swiper-img"></swiper-slide>
      <swiper-slide><img :src='boy2' alt="boy img 2" class="swiper-img"></swiper-slide>
      <swiper-slide><img :src='boy3' alt="boy img 3" class="swiper-img"></swiper-slide>
      <swiper-slide><img :src='boy4' alt="boy img 4" class="swiper-img"></swiper-slide>
      <swiper-slide><img :src='boy5' alt="boy img 5" class="swiper-img"></swiper-slide>
      <swiper-slide><img :src='boy6' alt="boy img 6" class="swiper-img"></swiper-slide>
      <swiper-slide><img :src='boy7' alt="boy img 7" class="swiper-img"></swiper-slide>
      <swiper-slide><img :src='boy8' alt="boy img 8" class="swiper-img"></swiper-slide>
      <swiper-slide><img :src='boy9' alt="boy img 9" class="swiper-img"></swiper-slide>
      <swiper-slide><img :src='boy10' alt="boy img 10" class="swiper-img"></swiper-slide>
      <swiper-slide><img :src='boy11' alt="boy img 11" class="swiper-img"></swiper-slide>
      <swiper-slide><img :src='boy12' alt="boy img 12" class="swiper-img"></swiper-slide>
    </swiper>

    <h1 class="project-head">ЭКСПОЗИЦИЯ</h1>
    <figure class="project-figure">
      <img class="project-figure__img" src="../assets/img/exp1.jpg" alt="Экспозиция крупным планом" />
      <figcaption class="project-figure__text">
        <span class="project-figure__text-head">Докучаев Павел. Пацан к&nbsp;успеху шел или двенадцать советов, как стать
          успешным.
          Выставка &laquo;Новые художники&raquo;. Галерея современного искусства &laquo;Виктория&raquo;, Россия, Самара,
          2019</span> <br>
        Вид экспозиции. Общий план<br>
        Одна фотография 40&times;60, восемь фотографий 20&times;30, складень, четки, алтарь
      </figcaption>
    </figure>
    <figure class="project-figure">
      <img class="project-figure__img" src="../assets/img/exp2.jpg" alt="Экспозиция крупным планом" />
      <figcaption class="project-figure__text">
        <span class="project-figure__text-head">Докучаев Павел. Пацан к&nbsp;успеху шел или двенадцать советов, как стать
          успешным.
          Выставка &laquo;Новые художники&raquo;. Галерея современного искусства &laquo;Виктория&raquo;, Россия, Самара,
          2019</span> <br>
        Вид экспозиции. Крупный план, алтарь<br>
        Лавровый лист, красная свеча на&nbsp;подставке, желтая свеча в&nbsp;вазе, белая свеча, свеча в&nbsp;виде фигурки
        петуха, камни,
        тряпичные салфетки, большая денежная лягушка, маленькая денежная лягушка, шкатулка, мраморное яйцо, фигурка мыши,
        караталы, амулет, фигурка поросенка в&nbsp;лампе, благовония, красная ткань, ароматическая палочка, подставка под
        ароматическую палочку, фигурка домового
      </figcaption>
    </figure>
  </div>
</template>

<script>
import { Swiper, SwiperSlide } from 'swiper/vue';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Navigation, Pagination } from 'swiper/modules';

import { useHead } from '@vueuse/head';

import boy1 from '../assets/img/boy1.jpg';
import boy2 from '../assets/img/boy2.jpg';
import boy3 from '../assets/img/boy3.jpg';
import boy4 from '../assets/img/boy4.jpg';
import boy5 from '../assets/img/boy5.png';
import boy6 from '../assets/img/boy6.jpg';
import boy7 from '../assets/img/boy7.jpg';
import boy8 from '../assets/img/boy8.jpg';
import boy9 from '../assets/img/boy9.jpg';
import boy10 from '../assets/img/boy10.png';
import boy11 from '../assets/img/boy11.jpg';
import boy12 from '../assets/img/boy12.jpg';

export default {

  components: { Swiper, SwiperSlide },

  setup() {
    useHead({
      title: 'ПРОЕКТ: ПАЦАН К УСПЕХУ ШЕЛ ИЛИ 12 СОВЕТОВ, КАК СТАТЬ УСПЕШНЫМ | ФОТОГРАФ ПАВЕЛ ДОКУЧАЕВ',
      meta: [
        {
          name: 'Boy',
          content: 'ПРОЕКТ: ПАЦАН К УСПЕХУ ШЕЛ ИЛИ 12 СОВЕТОВ, КАК СТАТЬ УСПЕШНЫМ',
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
      boy1: boy1,
      boy2: boy2,
      boy3: boy3,
      boy4: boy4,
      boy5: boy5,
      boy6: boy6,
      boy7: boy7,
      boy8: boy8,
      boy9: boy9,
      boy10: boy10,
      boy11: boy11,
      boy12: boy12,
    }
  },
}
</script>

<style lang="scss">
.project-figure {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
  margin-bottom: 50px;

  &__img {
    max-width: 800px;
    margin-bottom: 12px;
  }

  &__text {
    color: rgb(92, 92, 92);
    font-size: 15px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    line-height: 20px;

    &-head {
      font-weight: 700;
    }
  }
}</style>