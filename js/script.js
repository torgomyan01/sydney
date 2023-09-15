const {
    active
} = {
    active: 'active'
}

AOS.init();

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

const slider = $('.rich-commercial-slider');

slider.slick({
    centerMode: true,
    // prevArrow: $('#prev'),
    // nextArrow: $('#next'),
    centerPadding: '450px',
    slidesToShow: 1,
    slidesToScroll: 1,
    infinite: true,
    speed: 1000,
    autoplay: true,
    responsive: [
        {
            breakpoint: 1352,
            settings: {
                centerPadding: '350px',
            }
        },
        {
            breakpoint: 1100,
            settings: {
                centerPadding: '250px',
            }
        },
        {
            breakpoint: 850,
            settings: {
                centerPadding: '150px',
            }
        },
        {
            breakpoint: 768,
            settings: {
                centerPadding: '100px',
            }
        },
        {
            breakpoint: 576,
            settings: {
                centerPadding: '50px',
            }
        },
    ]
});



$(".fix-top").click(function() {
    $("html, body").animate({ scrollTop: 0 }, "smoth");
    return false;
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

if ($(window).width() <= 576){

    gsap.registerPlugin(ScrollTrigger);

    gsap.to(".box-gsap", {
        x: -350,
        scrollTrigger: {
            trigger: '.box-gsap',
            scrub: true,
            toggleActions: 'play none none none',
        },
        duration: 1
    });


}


if ($(window).width() <= 768){

    gsap.registerPlugin(ScrollTrigger);

    gsap.to(".box-content", {
        x: -350,
        scrollTrigger: {
            trigger: '.box-content',
            scrub: true,
            toggleActions: 'play none none none',
        },
        duration: 1
    });


}

if ($(window).width() <= 576){

    gsap.registerPlugin(ScrollTrigger);

    gsap.to(".box-compromising", {
        x: -350,
        scrollTrigger: {
            trigger: '.box-compromising',
            scrub: true,
            toggleActions: 'play none none none',
        },
        duration: 1
    });


}



    gsap.registerPlugin(ScrollTrigger);

    gsap.to(".gallery-box", {
        x: -600,
        duration: 3,
        scrollTrigger: {
            trigger: '.gallery-box',
            scrub: true,
        },
        toggleActions : 'play none none none'
    });


    gsap.registerPlugin(ScrollTrigger);

    gsap.to(".gallery-box-prev", {
        x: 600,
        duration: 3,
        scrollTrigger: {
            trigger: '.gallery-box-prev',
            scrub: true,
            end: '200%'
        },
        toggleActions : 'onEnter none none none'
    });




const sliders = document.getElementById('slider');
const sliders2 = document.getElementById('slider2');
const sliders3 = document.getElementById('slider3');
const sliders4 = document.getElementById('slider4');
const sliders5 = document.getElementById('slider5');


noUiSlider.create(sliders2, {
    start: [38700000, 98700000],
    connect: true,
    format: wNumb({
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
        decimals: 0,
        thousand: ','
    }),
    range: {
        'min': 5000000,
        'max': 13000000
    }
});


noUiSlider.create(sliders4, {
    start: [56, 157],
    connect: true,
    tooltips: true,
    format: wNumb({
        decimals: 0,
    }),
    range: {
        'min': 56,
        'max': 157
    }
});

noUiSlider.create(sliders5, {
    start: [28, 94],
    connect: true,
    tooltips: true,
    format: wNumb({
        decimals: 1,
        thousand: ','
    }),
    range: {
        'min': 28,
        'max': 94
    }
});


//........ Input Range
//


// sindey-prime-slider

const sindeyPrimeSlider = $('.sindey-prime-slider');
let sindeyPrimeSliderCount = 0;
const sindeyPrimeSliderImages = [
    {
        url: 'image/slider1.png',
        text: 'Закрытый двор с озеленением',
    },
    {
        url: 'image/slider2.jpg',
        text: 'Всестороннее благополучие ',
    },
    {
        url: 'image/slider3.png',
        text: 'Закрытый двор с озеленением',
    },
    {
        url: 'image/slider4.png',
        text: 'Планировка по высоким стандартам бизнес-класса',
    },
    {
        url: 'image/slider5.png',
        text: 'Фудхолл с фокусом на здоровое питание',
    },
]


setInterval(() => {
    sindeyPrimeSlider.css('background-image', `url(${sindeyPrimeSliderImages[sindeyPrimeSliderCount].url})`)
    sindeyPrimeSlider.children('.count').text(`${sindeyPrimeSliderCount + 1}/${sindeyPrimeSliderImages.length}`)
    sindeyPrimeSlider.children('.slider-text').text(`${sindeyPrimeSliderImages[sindeyPrimeSliderCount].text}`)




    sindeyPrimeSliderCount++;
    if(sindeyPrimeSliderCount === sindeyPrimeSliderImages.length){
        sindeyPrimeSliderCount = 0;
    }
}, 1000)



