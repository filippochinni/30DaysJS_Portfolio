/* DEFINIZIONE DI ELEMENTI */

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

description.innerHTML = descriptionText;

skillSet.childNodes[0].nodeValue = skillSetPhrase;

populateLinkDiv();

setInterval(displayTalents, (talents.length * 1000) + 1000);

setInterval(displaySkills, 1000);










  