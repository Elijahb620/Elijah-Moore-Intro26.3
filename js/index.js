let footer = document.querySelector('footer');

let today = new Date();
let thisYear = today.getFullYear();

let copyright = document.createElement('p');
copyright.innerHTML = `&copy; Elijah B Moore ${thisYear}`;
footer.appendChild(copyright);

let skills = ["JS", "C++", "HTML", "CSS", "Adequate Swing Dancer"]

let skillsSection = document.querySelector('#Skills');

let skillsList = skillsSection.querySelector('ul');

for (let i = 0; i<skills.length; i++){
    let skill = document.createElement('li');
    skill.textContent = skills[i];
    skillsList.appendChild(skill);
}