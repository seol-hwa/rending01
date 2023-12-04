//swiper js
const swiper = new Swiper(".mySwiper", {
    speed: 3000,
    spaceBetween: 35,
    slidesPerView: 1,
    loop: true,
    autoplay: {
        delay: 0,
        disableOnInteraction: false,
    },
    loopAdditionalSlides: 1,
    breakpoints: {
        600: {
            slidesPerView: 2,
        },
        900: {
            slidesPerView: 3,
        },
        1200: {
            slidesPerView: 4,
        },
        1500: {
            slidesPerView: 5,
        }
    },
});
swiper.autoplay.stop();


//gsap js

//1st section
const visualCon = document.querySelector('.visual-con');
const visualBg = document.querySelector('.visual-con .inner');
const visualCircle = document.querySelector('.visual__circle');
const visualTitle = document.querySelector('.visual-con .con__title');
const visualText = document.querySelector('.visual-con .con__text');
//2nd section
const neceCon = document.querySelector('.necessary-con');
const neceTitle = document.querySelector('.necessary-con .con__title---center');
const neceText = document.querySelector('.necessary-con .con__text---center');
const neceItem = document.querySelectorAll('.necessary-con .con__text-wrap');
//3rd section
const slideList = document.querySelector('.review-list');
const sectionSlide = document.querySelectorAll('.review-list li');
//4th section
const messageWrap = document.querySelector('.how-con .img-wrap---bg');
//5th section
const sectionLayout2 = document.querySelector('.question-con .layout-style-2');
//6th section
const infoBot = document.querySelector('.info-con .con__bot');
//common
const sectionTitle = document.querySelectorAll('.con__top .con__title');
const sectionText = document.querySelectorAll('.con__top .con__text');
const sectionTitleCenter = document.querySelectorAll('.con__top .con__title---center');
const sectionTextCenter = document.querySelectorAll('.con__top .con__text---center');
const sectionLayout3 = document.querySelector('.layout-style-text-3');

//1st section + 2nd section title
function visualGsap() {
    const tl = gsap.timeline();

    if (window.matchMedia('(max-width:500px)').matches == true) {
        //in mobile size
        tl.to(visualCon, {
            duration: 0.4,
            scaleY: 1
        }).to(visualCircle, {
            duration: 0.6,
            opacity: 1,
            y: 0,
        }).to(visualTitle, {
            duration: 0.6,
            opacity: 1,
            y: 0,
        }, '-=0.3').to(visualText, {
            duration: 0.6,
            opacity: 1,
            y: 0,
        }, '-=0.3').to(neceTitle, {
            duration: 0.5,
            opacity: 1,
            y: 0,
        }, '-=0.3').to(neceText, {
            duration: 0.5,
            opacity: 1,
            y: 0,
        });
    } else {
        //in pc size
        tl.to(visualCon, {
            duration: 0.4,
            scaleY: 1
        }).to(visualCircle, {
            duration: 0.6,
            opacity: 1,
            y: 0,
        }).to(visualTitle, {
            duration: 0.6,
            opacity: 1,
            y: 0,
        }, '-=0.3').to(visualText, {
            duration: 0.6,
            opacity: 1,
            y: 0,
        }, '-=0.3').to(neceTitle, {
            duration: 0.5,
            opacity: 1,
            y: 0,
        });
    }

}

visualGsap();

//common function
function scrollAct(element, scrollTop) {

    element.forEach(el => {
        if (el.getBoundingClientRect().top <= scrollTop) {
            gsap.to(el, {
                duration: 0.5,
                opacity: 1,
                y: 0,
            })
        }
    });
}

function orderScrollAct(element, scrollTop) {
    const child = element.children;

    if (element.getBoundingClientRect().top <= scrollTop + 100) {
        for (let i = 0; i < child.length; i++) {
            gsap.to(child[i], {
                duration: 0.5,
                opacity: 1,
                y: 0,
                delay: 0.2 * (i + 1),
            })
        }
    }
}

//scroll evt
window.addEventListener('scroll', function () {
    const scrollTop = (window.innerHeight / 10) * 9; //evt 노출 위치값

    scrollAct(sectionTitle, scrollTop);
    scrollAct(sectionText, scrollTop);
    scrollAct(sectionTitleCenter, scrollTop);
    scrollAct(sectionTextCenter, scrollTop);
    // scrollAct(sectionSlide, scrollTop);

    orderScrollAct(sectionLayout3, scrollTop);
    orderScrollAct(sectionLayout2, scrollTop);
    orderScrollAct(messageWrap, scrollTop);
    orderScrollAct(infoBot, scrollTop);

    //1st section background
    const visualScroll = visualCon.getBoundingClientRect().top;

    gsap.to(visualBg, {
        duration: 0.5,
        opacity: -visualScroll >= 100 ? 1 - (visualScroll / (-800)) : 1,
        y: -visualScroll >= 100 ? (-visualScroll / 40) - 100 : "-10rem",
    })
    if (window.matchMedia('(max-width:500px)').matches == true) {
        gsap.to(visualCon, {
            duration: 0.3,
            height: -visualScroll <= 500 ? 700 + (visualScroll / 3) : '53.3rem',
        })
    } else {
        gsap.to(visualCon, {
            duration: 0.3,
            height: -visualScroll <= 600 ? 762 + (visualScroll / 3) : '57.8rem',
        })
    }

    //3rd section slide
    function slide() {
        const tl = gsap.timeline();
        if (slideList.getBoundingClientRect().top <= scrollTop) {
            sectionSlide.forEach(el => {
                tl.to(el, {
                    duration: 0.2,
                    opacity: 1,
                })
            })
            setTimeout(() => {
                swiper.autoplay.start();
            }, 300);
        }
    }
    slide();

});