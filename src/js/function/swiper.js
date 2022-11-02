// https://swiperjs.com/swiper-api
import Swiper, { Autoplay, Pagination } from "swiper";

export const introSwiper = new Swiper(".intro__swiper", {
    modules: [Pagination, Autoplay],
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

export const colectionSwiper = new Swiper(".colection-swiper", {
    slidesPerView: 5,
    loop: true,
    observer: true,

    observeSlideChildren: true,
    observeParents: true,
    breakpoints: {
        "310": {
            slidesPerView: 1,
        },
        "725": {
            slidesPerView: 2,
        },
        "1100": {
            slidesPerView: 3,
        },
        "1400": {
            slidesPerView: 4,
        },
        "1800": {
            slidesPerView: 5,
        }
    }

});

export const blogSwiper = new Swiper(".blog-swiper", {
    modules: [Autoplay],
    slidesPerView: 2,
    spaceBetween: 30,
    autoplay: {
        delay: 5000,
    },
    loop: true,
    observer: true,
    observeSlideChildren: true,
    observeParents: true,
    breakpoints: {
        '320': {
            slidesPerView: 1,
        },
        '768': {
            slidesPerView: 2,
        }
    }
});