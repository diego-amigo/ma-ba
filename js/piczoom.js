const dblTouch = document.querySelectorAll('.gallery-top__img'),
    dblScreen = document.querySelector('.bdl-touch_on-screen'),
    dblPic = document.querySelector('.dbl-pic'),
    dblExit = document.querySelector('.picture-x');

for (let i = 0; i < dblTouch.length; i++) {

    dblTouch[i].addEventListener('dblclick', function (e) {
        e.preventDefault();
        touch(this);
    })
}

function touch(elem) {
    const adress = elem.getAttribute('src');
    dblPic.setAttribute('src', adress);
    dblScreen.style.left = 0;
    document.body.style.overflow = 'hidden';
}

dblExit.addEventListener('click', function () {
    dblScreen.style.left = '-100%';
    document.body.style.overflow = 'visible';
})
dblScreen.addEventListener('click', function (e) {
    if (e.target === e.currentTarget) {
        dblScreen.style.left = '-100%';
        document.body.style.overflow = 'visible';
    }
})

// fzoom for portfolio images

let pfImg = document.querySelectorAll('.portfolio__example-img img'),
    bookingImg = document.querySelectorAll('.booking__img');

Array.from(pfImg).forEach(img => {
    img.addEventListener('dblclick', function (e) {
        e.preventDefault
        touch(this);
    })
})
Array.from(bookingImg).forEach(pic => {
    pic.addEventListener('dblclick', function (e) {
        e.preventDefault
        touch(this);
    })
})


