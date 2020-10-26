const dblTouch = document.querySelectorAll('.gallery-top__img'),
    dblScreen = document.querySelector('.dbl-touch_on-screen'),
    dblPic = document.querySelector('.dbl-pic'),
    dblPic2 = document.querySelector('.dbl-pic2'),
    dblExit = document.querySelector('.picture-x');

Array.from(dblTouch).forEach(photo =>{
    photo.addEventListener('click', function (e){ 
       const srcImg = photo.getAttribute('src'); 
       dblPic.setAttribute('src', `${srcImg}`)
    })
})

    

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
// dblScreen.addEventListener('click', function (e) {
//     if (e.target === e.currentTarget) {
//         dblScreen.style.left = '-100%';
//         document.body.style.overflow = 'visible';
//     }
// })

// fzoom for portfolio images

let pfImg = document.querySelectorAll('.portfolio__example-img img'),
    bookingImg = document.querySelectorAll('.booking__img');

Array.from(pfImg).forEach(img => {
    img.addEventListener('click', function (e) {
        const srcImg = img.getAttribute('src');  
        dblPic.setAttribute('src', srcImg)
    })
})
Array.from(bookingImg).forEach(pic => {
    pic.addEventListener('click', function (e) {
        const srcImg = pic.getAttribute('src');  
       dblPic.setAttribute('src', srcImg)
    })
})


