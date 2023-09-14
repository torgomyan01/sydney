const {
    active
} = {
    active: 'active'
}


$('.gradient-card-running-line').each((index, elem) => {
    const gradientCardRunningLine = $(elem).text();

    $(elem).text('');

    for (let i = 0; i < gradientCardRunningLine.length - 1; i++) {
        $(elem).append(`<span>${gradientCardRunningLine[i]}</span>`)
    }

    const thisChild = $(elem).children('span');

    let count = 0;
    thisChild.each((index, elemSpan) => count += $(elemSpan).width())

    $(elem).css('width', `${count}px`);
    $(elem).css('animation', `gradient-card-line ${count / 80}s linear`);
    $(elem).css('animation-iteration-count', `infinite`);
    $(elem).css('animation-play-state', `paused`);

})

const slider = $('.feedback-slider');

slider.slick({
    centerMode: true,
    prevArrow: $('#prev'),
    nextArrow: $('#next'),
    centerPadding: '120px',
    slidesToShow: 3,
    slidesToScroll: 2,
    infinite: true,
    speed: 300,
    responsive: [
        {
            breakpoint: 1025,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 2,
            }
        },
        {
            breakpoint: 769,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
            }
        },
        {
            breakpoint: 577,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                centerPadding: '20px',
            }
        }
    ]
});



const logo_number = document.querySelector('.logo-number')

window.addEventListener('scroll', (e)=>{

    const scroly = window.scrollY;
    if(scroly >= 10){
    logo_number.classList.remove('active')
    } else if(scroly <= 10){
    logo_number.classList.add('active')
        }
})

//..... Gaps

// if(window.screenX <= 576){
//     gsap.registerPlugin(ScrollTrigger);
//
//     gsap.to(".box", {
//         x: -500,
//         scrollTrigger: {
//             trigger: '.box',
//             scrub: true,
//             toggleActions: 'restart none none none',
//         },
//         duration: 1
//     });
//
// }


if(window.screenX <= 576){
    gsap.registerPlugin(ScrollTrigger);

    gsap.to(".content .box", {
        x: -400,
        scrollTrigger: {
            trigger: '.content .box',
            scrub: true,
            end: '-200%',
            toggleActions: 'restart none none none',
        },
        duration: 1
    });

}


const sliders = document.getElementById('slider');
const sliders2 = document.getElementById('slider2');
const sliders3 = document.getElementById('slider3');

noUiSlider.create(sliders2, {
    start: [38700000, 98700000],
    connect: true,
    format: wNumb({
        prefix: '$ ',
        decimals: 0,
        thousand: ','
    }),
    tooltips: true,
    range: {
        'min': 28700000,
        'max': 110000000
    }
});

noUiSlider.create(sliders, {
    start: [5, 15],
    connect: true,
    tooltips: true,
    format: wNumb({
        decimals: 0,
    }),
    range: {
        'min': 1,
        'max': 30
    }
});


noUiSlider.create(sliders3, {
    start: [5000000, 9000000],
    connect: true,
    tooltips: true,
    format: wNumb({
        prefix: '$ ',
        decimals: 0,
        thousand: ','
    }),
    range: {
        'min': 5000000,
        'max': 13000000
    }
});


//........ Input Range
//
