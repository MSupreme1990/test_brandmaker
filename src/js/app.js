import $ from 'jquery';
import 'slick-carousel';
import 'jquery.cookie';
import 'magnific-popup';
import 'flexy-framework/js/tab'

$(() => {
    $('.b-dashboard__mainslider').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        dots: false,
        fade: true,
        // dotsClass: 'b-quotes__dots',
        infinite: true
    });

    $('.b-api__slider').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        dots: false,
        fade: true,
        infinite: true
    });


    $(function () {
        let mdate = new Date();
        $('.b-footer__year').text(mdate.getFullYear());
    });

});



$(document)
    .on('click', '.b-dashboard__link', e => {
        e.preventDefault();

        let $target = $(e.target);
        $('.b-dashboard__mainslider').slick('slickGoTo', $target.index());

        $(".b-dashboard__link").removeClass('b-dashboard__link_active');
        $target.addClass('b-dashboard__link_active');
    })
    .on('click', '.b-api__link', e => {
        e.preventDefault();

        let $target = $(e.target);
        $('.b-api__slider').slick('slickGoTo', $target.index());

        $(".b-api__link").removeClass('b-api__link_active');
        $target.addClass('b-api__link_active');

    })
    .on('click', '.b-menu-mobile__button-block', e => {
        e.preventDefault();
        let $menu = $('.b-menu-mobile__menu'),
            $bg = $('.b-menu-mobile__bg');

        $bg.addClass('b-menu-mobile__bg_open');
        $menu.addClass('b-menu-mobile__menu_open');

    })
    .on('click', '.b-menu-mobile__bg', e => {
        e.preventDefault();
        let $bg = $('.b-menu-mobile__bg'),
            $menu = $('.b-menu-mobile__menu');


        $bg.removeClass('b-menu-mobile__bg_open');
        $menu.removeClass('b-menu-mobile__menu_open');

    })
    .on('click', '.b-menu-mobile__link', e => {
        e.preventDefault();
        let $bg = $('.b-menu-mobile__bg'),
            $menu = $('.b-menu-mobile__menu');

        $bg.removeClass('b-menu-mobile__bg_open');
        $menu.removeClass('b-menu-mobile__menu_open');

    });
