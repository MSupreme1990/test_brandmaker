import $ from 'jquery';
import 'slick-carousel';
import 'magnific-popup';

$(document)
    .on('click', '[data-modal]', e => {
        e.preventDefault()

        let $link = $(e.target).closest('a'),
            href = $link.attr('href'),
            type = href.charAt(0) == '#' ? 'inline' : 'ajax'

        $.magnificPopup.open(
            {
                items: {
                    src: href,
                },
                delegate: 'a',
                type: type,
                removalDelay: 0,
                midClick: true,
                mainClass: 'mfp-zoom-in',
                callbacks: {
                    open: function() {
                        // lockBody();
                    },
                    close: function() {
                        // unlockBody();
                    },
                }
            },
            0
        )
    });
