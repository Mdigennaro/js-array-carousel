const image = [
  'img/01.jpg',
  'img/02.jpg',
  'img/03.jpg',
  'img/04.jpg',
  'img/05.jpg'
];

const title = [
  'Svezia',
  'Svizzera',
  'Gran Bretagna',
  'Germania',
  'Paradise'
]

const text = [
  'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam, cumque provident totam omnis, magnam dolores dolorum corporis.',
  'Lorem ipsum',
  'Lorem ipsum, dolor sit amet consectetur adipisicing elit.',
  'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam,',
  'Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam,',
]

const boxItems = document.querySelector('.box-items');
const boxScroll = document.querySelector('.box-scroll');

let counter = 0;


const imageEl = document.querySelector('.box-items');
const thumbsEl = document.querySelector('.box-scroll');

for (let i = 0; i < image.length; i++) {
  const items = document.createElement('div');

  const html =
  `
  <img src="${image[i]}" alt="">
  <div class="text">
    <h2>${title[i]}</h2>
    <p>${text[i]}</p>
  </div>
  `
  
  items.className = 'items';
  items.innerHTML = html;

  imageEl.append(items);

  console.log(items);

  const thumb = document.createElement('div');
  
  thumb.innerHTML = 
  `
  <img src="${image[i]}" alt="">
  `
  thumb.className = 'thumb';

  thumbsEl.append(thumb);

  console.log(thumb);

  if(i === counter) {
  items.classList.add('active');
  thumb.classList.add('bordo');
}

}

const up = document.querySelector('.arrowup');
const down = document.querySelector('.arrowdown');

const itemsCollection = document.getElementsByClassName('items');
const thumbsCollection = document.getElementsByClassName('thumb');

up.addEventListener('click',function(){
  itemsCollection[counter].classList.remove('active');
  thumbsCollection[counter].classList.remove('bordo');

  counter--;

  if (counter < 0) counter = image.length - 1;
  console.log(counter)
  itemsCollection[counter].classList.add('active');
  thumbsCollection[counter].classList.add('bordo')
})

down.addEventListener('click',function(){
  itemsCollection[counter].classList.remove('active');
  thumbsCollection[counter].classList.remove('bordo');

  counter++;

  if (counter === image.length) counter = 0;
  console.log(counter)
  itemsCollection[counter].classList.add('active');
  thumbsCollection[counter].classList.add('bordo')
})


