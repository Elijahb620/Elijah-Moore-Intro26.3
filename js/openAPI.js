let main = document.querySelector('main')

let base_url = 'https://www.swapi.tech/api/'

let search = document.querySelector('#search')


let fightButton = document.querySelector('button[type=fight]')

let results = document.querySelector('results')

fightButton.addEventListener("click", function(event){
    event.preventDefault()
    
    let query = search.value

    let url = base_url + '/people?name=' + query

    fetch(url)
    .then(res => res.json())
    .then(data => {
        
        let nameField = document.createElement("h2") 
        let name = data.result[0].properties.name
        

        nameField.textContent = name
        main.appendChild(nameField)


        let massField = document.createElement('p')
        let winField = document.createElement('p')
        let mass = parseInt(data.result[0].properties.mass)
        
        let height = parseInt(data.result[0].properties.height)

        totalMass = mass + height
        massField.textContent = `Mass + height = ${totalMass}`
        main.appendChild(massField)

        if (totalMass<250){
            winField.textContent = "I'd win!"

        } else{
            winField.textContent = "I'd lose!"
        }

        main.appendChild(winField)
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
        
        let nameField = document.createElement("h2") 
        let name = data.result[0].properties.name
        

        nameField.textContent = name
        main.appendChild(nameField)


        let hairColorField = document.createElement('p')
        let hairColor = data.result[0].properties.hair_color

        hairColorField.textContent = hairColor
        main.appendChild(hairColorField)

    })
    .catch(err => console.error(err))

})

