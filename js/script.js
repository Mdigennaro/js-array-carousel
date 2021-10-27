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

const boxItems = document.querySelector(`.box-items`);
let contatore = 0;

for(let i = 0; i < image.length; i++){

  console.log(image[i]);
   
  const items = document.createElement('div');

  items.className = 'items';

  if (contatore === i) {
    items.classList.add('active');
  }

  items.innerHTML = `<img src="${image[i]}" alt="">`;

  console.log(items);

  boxItems.append(items);
}

const nulla = document.getElementsByClassName('items');

const giu = document.querySelector('.arrowdown');
const su = document.querySelector('.arrowup');

giu.addEventListener('click', function(){

  nulla[contatore].classList.remove('active');

  contatore++;
  if (contatore > image.length - 1) contatore = 0;
  nulla[contatore].classList.add('active');
})

su.addEventListener('click', function(){

  nulla[contatore].classList.remove('active');

  contatore--;
  if (contatore < 0) contatore = image.length - 1;
  nulla[contatore].classList.add('active');
})