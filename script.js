const mainHeroLeft = document.querySelectorAll('.hero-left');
const mainHeroRight = document.querySelectorAll('.hero-right');
const cardRight = document.querySelectorAll('.card-right');
const cardLeft = document.querySelectorAll('.card-left');
const cardRightArrow = document.querySelectorAll('.card-right-arrow');
const memberCourse = document.querySelectorAll('.member-course');
const courseSelection = document.querySelectorAll(".left-course-selection");
const rightCourseSelection = document.querySelectorAll(".right-course-selection");
const testimoni = document.querySelectorAll(".testimoni");


window.onscroll = () => {
    mainHeroLeft.forEach(hero => {
        let top = window.scrollY;
        let offset = hero.offsetTop - 200;
        let height = hero.offsetHeight;

        if (top > offset && top < offset + height) {
            hero.classList.add('show-animate');
        } else {
            hero.classList.remove('show-animate');
        }

    mainHeroRight.forEach(hero => {
        let top = window.scrollY;
        let offset = hero.offsetTop - 200;
        let height = hero.offsetHeight;

        if (top > offset && top < offset + height) {
            hero.classList.add('show-animate');
        } else {
            hero.classList.remove('show-animate');
        }
    })

    cardRight.forEach(card => {
        let top = window.scrollY;
        let offset = card.offsetTop + 100;
        let height = card.offsetHeight + 600;

        if (top > offset && top < offset + height) {
            card.classList.add('show-animate');
        } else {
            card.classList.remove('show-animate');
        }
    })

    cardLeft.forEach(card => {
        let top = window.scrollY;
        let offset = card.offsetTop + 100;
        let height = card.offsetHeight + 600;

        if (top > offset && top < offset + height) {
            card.classList.add('show-animate');
        } else {
            card.classList.remove('show-animate');
        }
    })

    cardRightArrow.forEach(card => {
        let top = window.scrollY;
        let offset = card.offsetTop + 100;
        let height = card.offsetHeight + 600;

        if (top > offset && top < offset + height) {
            card.classList.add('show-animate');
        } else {
            card.classList.remove('show-animate');
        }
    })

    memberCourse.forEach(card => {
        let top = window.scrollY;
        let offset = card.offsetTop - 600;
        let height = card.offsetHeight + 500;

        if (top > offset && top < offset + height) {
            card.classList.add('show-animate');
        } else {
            card.classList.remove('show-animate');
        }
    })

    courseSelection.forEach(card => {
        let top = window.scrollY;
        let offset = card.offsetTop - 550;
        let height = card.offsetHeight + 350;

        if (top > offset && top < offset + height) {
            card.classList.add('show-animate');
        } else {
            card.classList.remove('show-animate');
        }
    })

    rightCourseSelection.forEach(card => {
        let top = window.scrollY;
        let offset = card.offsetTop - 150;
        let height = card.offsetHeight + 250;

        if (top > offset && top < offset + height) {
            card.classList.add('show-animate');
        } else {
            card.classList.remove('show-animate');
        }
    })

    
    testimoni.forEach(card => {
        let top = window.scrollY;
        let offset = card.offsetTop - 150;
        let height = card.offsetHeight + 250;


        if (top > offset && top < offset + height) {
            card.classList.add('show-animate');
        } else {
            card.classList.remove('show-animate');
        }
    })

    // top: 2303 offset: 2377 height: 362

    })
}



    


