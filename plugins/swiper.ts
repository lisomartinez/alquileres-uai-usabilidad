// import Vue from 'vue'
// import VueAwesomeSwiper from 'vue-awesome-swiper'
//
// // import style
// import 'swiper/css/swiper.css'
// Vue.use(VueAwesomeSwiper /* { default options with global component } */)
//
import Vue from 'vue'
import {
  Swiper as SwiperClass,
  Pagination,
  Navigation,
  Mousewheel,
  Autoplay,
} from 'swiper'
import getAwesomeSwiper from 'vue-awesome-swiper/dist/exporter'

// import style
import 'swiper/swiper-bundle.min.css'

SwiperClass.use([Pagination, Mousewheel, Navigation, Autoplay])
Vue.use(getAwesomeSwiper(SwiperClass))
const { Swiper, SwiperSlide } = getAwesomeSwiper(SwiperClass)
