// https://swiperjs.com/swiper-api
import Swiper, { Autoplay, Pagination, Parallax, } from "swiper";

export const introSwiper = new Swiper(".intro__swiper", {
    modules: [ Pagination, Autoplay],
    pagination: {
        el: ".intro__swiper-pagin",
        clickable: true,
    },
    autoplay: {
        delay: 4000,
    },
    loop: true,
    observer: true,
    observeSlideChildren: true,
    observeParents: true,
});