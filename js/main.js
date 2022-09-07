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

let SCORE = 0;

plus.addEventListener('click', ()=>{
    SCORE++;
    scoreContainer.innerHTML = SCORE;
});

minus.addEventListener('click', ()=>{
    SCORE--;
    scoreContainer.innerHTML = SCORE;
});

reset.addEventListener('click', ()=> {
    SCORE = 0;
    scoreContainer.innerHTML = SCORE;

    let resetTag = document.createElement('p');
    resetTag.style.cssText = 'font-size:30px; color:#fff; background-color:#BE7F89; padding: 3px; border-radius:2px'
    resetTag.innerText = 'PROVA ANCORA!';

    setTimeout(function(){
        resetTag.innerText="";
        resetTag.style.padding = '0';
    },3000);

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
