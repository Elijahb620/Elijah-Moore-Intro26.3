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

let messageForm = document.forms["leave_message"]

messageForm.addEventListener("submit", function (event) {
    event.preventDefault()


    console.log(event)
    let name = event.target.usersName.value
    let email = event.target.usersEmail.value
    let message = event.target.usersMessage.value

    console.log(name, email, message);


    let messageSection = document.querySelector("#messages")
    let messageList = messageSection.querySelector("ul")
    let newMessage = document.createElement("li")
    newMessage.innerHTML = 
        `<a href="mailto:${email}">${name}</a> 
        <span>${message}</span>`;

    

    let removeButton = document.createElement("button")
    removeButton.innerText = "remove"
    removeButton.type = "button"

    removeButton.addEventListener("click", function (event) {
        let entry = removeButton.parentNode;
        entry.remove();
    })

    newMessage.appendChild(removeButton);
    messageList.appendChild(newMessage);
    
    let h2 = document.querySelector("#messages h2")
        h2.style.display = "inline"

    messageForm.reset()
    
})

if (!document.querySelector("#messages ul li")) {
    document.querySelector("#messages ul").innerHTML = ""
    let h2 = document.querySelector("#messages h2")
    h2.style.display = "none"
}
fetch('https://api.github.com/users/Elijahb620/repos')
    .then(response => {
        if (!response.ok) {
            throw new Error("Error!")
        }
        return response.json()
    })
    .then(data => {
        const repositories = data;
        return repositories;
    })

    .then(repositories =>{
        let projectSection = document.querySelector("#Projects")
        let projectList = projectSection.querySelector('ul')

        for (let i = 0; i < repositories.length; i++) {
            let project = document.createElement('li')
            project.innerText = repositories[i].name
            projectList.appendChild(project)
        }
    })
      .catch(error => console.error(error))


  