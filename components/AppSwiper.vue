<template>
  <swiper class="swiper" :options="swiperOption">
    <swiper-slide
      v-for="photo in slides"
      :key="photo"
      :style="backgrounds(photo)"
    >
    </swiper-slide>
    <div slot="pagination" class="swiper-pagination"></div>
    <div slot="button-prev" class="swiper-button-prev"></div>
    <div slot="button-next" class="swiper-button-next"></div>
  </swiper>
</template>

<script>
export default {
  name: 'AppSwiper',
  props: {
    slides: {
      required: true,
      type: Array,
    },
  },
  data() {
    return {
      swiperOption: {
        spaceBetween: 10,
        pagination: {
          el: '.swiper-pagination',
          clickable: true,
        },
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        },
      },
    }
  },
  methods: {
    backgrounds(image) {
      return {
        backgroundImage: 'url(' + image + ')',
        backgroundSize: 'cover',
      }
    },
  },
}
</script>

<style lang="scss" scoped>
@import '~swiper/swiper';

.swiper {
  height: 200px;
  width: 300px;

  .swiper-slide {
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    font-weight: bold;
    font-size: 1rem;
    background-color: white;
  }
}
</style>
