/* DEFINIZIONE DI ELEMENTI */
/*
const personName = "Asabeneh Yetayeh";

const descriptionText = "I'm Asabeneh Yetayeh I am instructor, developer, motivator and contenet creator.\
I love educating people and creating educational materials. In January 2019, I also created a teaching material <b>Javascript for Everyone</b>.\
In December 2019, I created <b>30 Days Of Python</b> challenge and in January 2020 <b>30 Days Of JavaScript</b> challenge.";

const skillSetPhrase = "The Tecnologies I teach: ";

const talents = ["Instructor", "Developer", "Motivator", "Content Creator"];

const skills = ["HTML", "CSS", "Javascript", "React", "Redux", "NodeJS", "Python", "MongoDB", "Pandas", "Numpy"];

const links = {
    "JAVASCRIPT FOR EVERYONE": "https://github.com/Asabeneh/JavaScript-for-Everyone",
    "30 DAYS OF PYTHON": "https://github.com/Asabeneh/30-Days-Of-Python",
    "30 DAYS OF JAVASCRIPT": "https://github.com/Asabeneh/30-Days-Of-JavaScript/tree/master" 
};

const images = {
    "Instructor": "./images/plant.svg",
    "Developer": "./images/laptop.svg",
    "Motivator": "./images/fire.png",
    "Content Creator": "./images/book.svg"
};
*/


/* DEFINIZIONE DI ELEMENTI (Alt)*/

const personName = "Filippo <i>&nbsp;Anonip27&nbsp;</i> Monkey";

const descriptionText = "Sono Filippo <b><i>Pussy Destoyer</b></i> Monkey. Ho passato gli ultimi anni a spreddare disinformazione in rete.\
Sono un esperto nella difezione delle fondamenta del sapere. Nel Gennaio 2019 sono stato imputato per un mio <b>presunto</b> \
coinvolgimento negli attacchi dell'11 Settembre. Il mio motto è 'Non possono incriminarti <b>se non trovano</b> il cadavere'.";

const skillSetPhrase = "Top Waifus: ";

const talents = ["Inseminator", "Internet Racist", "Sex Offender", "9/11 Denier"];

const skills = ["Rin Tohsaka", "Asuka Langley Soryu", "Kaguya Shinomiya", "Saber", "Inaban", "Kurisu Makise", "Miyo"];

const links = {
    "FUNNI 6 DIGITS CODES SITE": "https://nhentai.net/g/177013",
    "YOUTUBE CHANNEL": "https://www.youtube.com/@pinonabubu6262/videos",
    "ROMANIA": "https://www.romania.org" 
};

const images = {
    "Inseminator": "./images/plant.svg",
    "Internet Racist": "./images/laptop.svg",
    "Sex Offender": "./images/fire.png",
    "9/11 Denier": "./images/book.svg"
};


const h1 = document.querySelector("#name");

const talentBar = document.querySelector("#talentBar");
const talent = document.querySelector("#talent");
const talentImage = document.querySelector("#talentImage");

const description = document.querySelector("#description");

const linkDiv = document.querySelector("#linkDiv");

const skillSet = document.querySelector("#skillSet");

const skill = document.querySelector("#skill");



/* FUNZIONI */

function displayTalents(talentSet=talents) {
    let index = (new Date().getSeconds()) % talentSet.length;
    talent.textContent = talentSet[index];
    talentImage.src = images[talentSet[index]];

    talent.style.animationName = 'none';
    void talent.offsetWidth;    //Triggera il reflow
    talent.style.animationName = 'slideIn';
}

function getRandomColor() {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i=0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * letters.length)];
    }
    return color;
}

function displaySkills(skillSet=skills) {
    let index = (new Date().getSeconds()) % skillSet.length;
    skill.textContent = skillSet[index];
    skill.style.color = getRandomColor();

    skill.style.animationName = 'none';
    void skill.offsetWidth;     //Triggera il reflow
    skill.style.animationName = 'fadeIn';
}

function populateLinkDiv(linkSet=links) {
    for(const key in linkSet) {
        const buttomLink = document.createElement("a");
        buttomLink.classList.add("buttomLink");
        buttomLink.href = linkSet[key];
        buttomLink.textContent = key;
        linkDiv.appendChild(buttomLink);
    }
}



/* ESECUZIONE */

h1.innerHTML = personName;

description.innerHTML = descriptionText;

skillSet.childNodes[0].nodeValue = skillSetPhrase;

populateLinkDiv();

setInterval(displayTalents, (talents.length * 1000) + 1000);

setInterval(displaySkills, 1000);










  