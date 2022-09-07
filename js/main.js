let counter = document.getElementById('counter');
let iconContainer = document.getElementById('icon_container');
let image = document.getElementById('image_random');

//score
let scoreContainer = document.createElement("p");
let scoreText = document.createTextNode("0");

scoreContainer.appendChild(scoreText);
counter.appendChild(scoreContainer);

scoreContainer.setAttribute("id", "score");

//plus icon
let plus = document.createElement("i");
plus.classList.add('fa-regular', 'fa-thumbs-up')

iconContainer.appendChild(plus);

//reset icon
let reset = document.createElement("i");
reset.classList.add('fa-solid', 'fa-repeat');

iconContainer.appendChild(reset);

//minus icon
let minus = document.createElement("i");
minus.classList.add('fa-regular', 'fa-thumbs-down');

iconContainer.appendChild(minus);

//counter

let score = 0;

plus.addEventListener('click', ()=>{
    score++;
    scoreContainer.innerHTML = score;
});

minus.addEventListener('click', ()=>{
    score--;
    scoreContainer.innerHTML = score;
});

reset.addEventListener('click', ()=> {
    score = 0;
    scoreContainer.innerHTML = score;

    let resetTag = document.createElement('p');
    resetTag.classList.add('reset-tag');
    resetTag.innerText = 'PROVA ANCORA!';

    setTimeout(function(){
        resetTag.innerText="";
        resetTag.style.padding = '0';
    },2000);

    counter.appendChild(resetTag);
});

//random image
const N = 30;
let imageArray = Array.from({length: N}, (_, index) => index + 1);
imageArray = imageArray.map(i => i + '.webp');

function getRandomImage(){
    let randomIndex = Math.floor(Math.random() * imageArray.length);
    let selectedImage = imageArray[randomIndex];
    image.src = `./img/${selectedImage}`
}

plus.addEventListener('click', getRandomImage);
minus.addEventListener('click', getRandomImage);
reset.addEventListener('click', getRandomImage);
