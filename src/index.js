const colors = [
  '#FFFFFF',
  '#2196F3',
  '#4CAF50',
  '#FF9800',
  '#009688',
  '#795548',
];

const refs = {
  body: document.querySelector('body'),
  start: document.querySelector('[data-action="start"]'),
  stop: document.querySelector('[data-action="stop"]'),
}

refs.start.addEventListener('click', () => {
  changeColor.start();
})

refs.stop.addEventListener('click', () => {
  changeColor.stop();
})

const randomIntegerFromInterval = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

const changeColor = {
  intervalId: null,
  
  start() {
    refs.start.setAttribute('disabled', true);
    
    this.intervalId = setInterval(() => {
      refs.body.style.backgroundColor = colors[randomIntegerFromInterval(0, colors.length - 1)];
    }, 1000);
  },

  stop() {
    clearInterval(this.intervalId);
  refs.start.removeAttribute('disabled')
  }
}




