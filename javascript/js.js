

$(document).ready(function () {
    $('.slick_slider').slick({
        dots: true,
        arrows: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: false,
        autoplaySpeed: 3000
    });
});



function handleFooterCollapse() {
    const isMobile = window.innerWidth <= 767;
    const toggles = document.querySelectorAll('.footer-toggle');

    toggles.forEach(toggle => {
        const targetId = toggle.getAttribute('data-bs-target');
        const collapseEl = document.querySelector(targetId);
        const bsCollapse = bootstrap.Collapse.getOrCreateInstance(collapseEl, { toggle: false });

        // Ensure icon is reset
        toggle.classList.remove('active');

        if (isMobile) {
            collapseEl.classList.remove('show'); // hide by default

            // Remove existing event listeners first (avoid multiple binds)
            toggle.replaceWith(toggle.cloneNode(true));
            const newToggle = document.querySelector(`[data-bs-target="${targetId}"]`);

            newToggle.onclick = function () {
                const isOpen = collapseEl.classList.contains('show');
                if (isOpen) {
                    bsCollapse.hide();
                } else {
                    bsCollapse.show();
                }
            };

            // Collapse event listeners for rotation
            collapseEl.addEventListener('shown.bs.collapse', () => {
                newToggle.classList.add('active');
            });

            collapseEl.addEventListener('hidden.bs.collapse', () => {
                newToggle.classList.remove('active');
            });

        } else {
            collapseEl.classList.add('show');
            toggle.onclick = null;
        }
    });
}

window.addEventListener('load', handleFooterCollapse);
window.addEventListener('resize', handleFooterCollapse);



// mobile slider------------
$(document).ready(function () {
    $('.mobile-slider').slick({
        dots: false,
        infinite: true,
        speed: 300,
        slidesToShow: 3,
        slidesToScroll: 1,
        arrows: true,
        autoplay: true,
        responsive: [
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    });
});

// card slider------------
$(document).ready(function () {
    $('.customer-slider').slick({
        dots: false,
        infinite: true,
        speed: 300,
        slidesToShow: 3,
        slidesToScroll: 1,
        arrows: true,
        autoplay: true,
        responsive: [
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    });
});