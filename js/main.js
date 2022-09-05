let increase = document.getElementById('plus');
let reset = document.getElementById('reset');
let decrease = document.getElementById('minus');
let counter = document.getElementById('score');
let image = document.getElementById('image_random');
let score = 0;

let image_array = [
    '1.webp',
    '2.webp',
    '3.webp',
    '4.webp',
    '5.webp',
    '6.webp',
    '7.webp',
    '8.webp',
    '9.webp',
    '10.webp',
    '11.webp',
    '12.webp',
    '13.webp',
    '14.webp',
    '15.webp',
    '16.webp',
    '17.webp',
    '18.webp',
    '19.webp',
    '20.webp',
    '21.webp',
    '22.webp',
    '23.webp',
    '24.webp',
    '25.webp',
    '26.webp',
    '27.webp',
    '28.webp',
    '29.webp',
    '30.webp',
]

    function get_random_image(){
    let random_index = Math.floor(Math.random() * image_array.length);
    let selected_image = image_array[random_index];
    image.src = `./img/${selected_image}`
    }


    increase.addEventListener('click', get_random_image);
    decrease.addEventListener('click', get_random_image);
    reset.addEventListener('click', get_random_image);

increase.addEventListener('click', ()=>{
    score++;
    counter.innerText = score;
});

decrease.addEventListener('click', ()=>{
    score--;
    counter.innerText = score;
});

reset.addEventListener('click', ()=>{
    score = 0;
    counter.innerText = score;
});

