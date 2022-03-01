const timer = document.getElementById('timer');
const orderBtns = document.getElementsByClassName('js-order-scroll');
const orderForm = document.getElementById('orderForm');

for (var i = 0; i < orderBtns.length; i++) {
  orderBtns[i].addEventListener(
    'click',
    () => {
      window.scrollTo({ top: orderForm.offsetTop, behavior: 'smooth' });
    },
    false
  );
}

let countdown = 30 * 60 * 1000;
let timerId = setInterval(function () {
  countdown -= 1000;
  const min = Math.floor(countdown / (60 * 1000));
  const sec = Math.floor((countdown - min * 60 * 1000) / 1000)
    .toString()
    .padStart(2, '0');
  if (countdown <= 0) {
    countdown = 30 * 60 * 1000;
    timer.innerHTML = `Акция завершена`;
    clearInterval(timerId);
  } else {
    timer.innerHTML = `${min}:${sec}`;
  }
}, 1000);

new Glide('.glide').mount();
