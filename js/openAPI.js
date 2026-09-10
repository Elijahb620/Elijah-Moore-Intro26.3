let main = document.querySelector('main')

let base_url = 'https://www.swapi.tech/api/'

let search = document.querySelector('#search')

let fightButton = document.querySelector('button[type=fight]')

let results = document.querySelector('results')

let nameField = document.createElement("h2")
let massField = document.createElement('p')
let winField = document.createElement('p')

let hairColorField = document.createElement('p')

fightButton.addEventListener("click", function(event){
    event.preventDefault()
    let query = search.value

    let url = base_url + '/people?name=' + query

    fetch(url)
    .then(res => res.json())
    .then(data => {
        
        // let nameField = document.createElement("h2") 
        let name = data.result[0].properties.name
        

        nameField.textContent = name
        main.appendChild(nameField)



        let mass = parseInt(data.result[0].properties.mass)
        
        let height = parseInt(data.result[0].properties.height)

        totalMass = mass + height
        massField.textContent = `Mass + height = ${totalMass} \r\n`
        // main.appendChild(massField)

        if (totalMass<250){
            massField.textContent += "I'd win!"

        } else{
            massField.textContent += "I'd lose!"
        }

        main.appendChild(massField)

    })

    .catch(err => console.error(err))
})
let hairButton = document.querySelector('button[type=hair]')

hairButton.addEventListener("click", function(event){
    event.preventDefault()
    
    let query = search.value

    let url = base_url + '/people?name=' + query

    fetch(url)
    .then(res => res.json())
    .then(data => {
         
        let name = data.result[0].properties.name
        
        nameField.textContent = name
        main.appendChild(nameField)



        massField.setAttribute('style','white-space: pre;')
        let hairColor = data.result[0].properties.hair_color

        massField.textContent = `${name}'s hair color: ${hairColor} \r\n` 
        massField.textContent += "My hair color: brown \r\n" 

        if (hairColor == "brown") {
            massField.textContent += "We have the same hair color!" 
        } else {
            massField.textContent += "We do not have the same hair color." 
        }


        main.appendChild(massField)

    })
    .catch(err => console.error(err))

})

