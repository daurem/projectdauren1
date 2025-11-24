const swiper = new Swiper('.swiper', {
  direction: 'horizontal',
  loop: true,

  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  }
});

// swiper.on("slideNextTransitionEnd", () => {
// });


document.querySelectorAll('.btns').forEach(btns => {
  const minus = btns.querySelector('.btn-minus');
  const plus = btns.querySelector('.btn-plus');
  const countEl = btns.querySelector('.btn-count');
  const btn = btns.querySelector('.btn'); // "incluir" button

  let count = 0;

  plus.addEventListener('click', () => {
    count++;
    countEl.textContent = count;
  });

  minus.addEventListener('click', () => {
    if (count > 0) {
      count--;
      countEl.textContent = count;
    }
  });
});


// document.querySelectorAll('.btns1 .btn').forEach(button => {
//     button.addEventListener('click', () => {
//         window.location.href = 'next.html';
//     });
// });





  
