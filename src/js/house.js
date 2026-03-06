

import Swiper from 'swiper';
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const swiper = new Swiper('.swiper', {
    modules: [Navigation, Pagination], // ✅ обов'язково підключити модулі
    loop: false,
    spaceBetween: 30,
     slidesPerView: 1, 
    breakpoints: {
    320: {
        slidesPerView: 1,
    },
    768: {
        slidesPerView: 1,
    },
    1440: {
        slidesPerView: 1,
    },
    },
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
});

