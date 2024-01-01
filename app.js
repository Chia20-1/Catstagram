const ENDPOINT = "https://api.thecatapi.com/v1/breeds"

async function fetchData() {
    try {
        const response = await fetch(ENDPOINT)
        const data = await response.json()
        console.log(data)
        return data;
    } catch (error) {
        console.log("this is error:", error);
    }
}

function printData(data) {
    console.log('checkpoint', data)
    // Define the variables
    const mainContainer = document.querySelector("#main")
    const catContainer = document.createElement("div");
    const imageContainer = document.createElement("div");
    const catImage = document.createElement("img");
    const catName = document.createElement("div");
    const catDescription = document.createElement("div");

    // Printing data to the respective elements
    catImage.src = `https://cdn2.thecatapi.com/images/${data.reference_image_id}.jpg`
    catImage.setAttribute("alt", "data.name")
    catImage.setAttribute("onerror", "this.onerror=null; this.src='./missingcat.png'")
    catName.textContent = data.name
    catDescription.textContent = data.description

    // Adding CSS class for styling
    catImage.classList.add("cat__image")
    imageContainer.classList.add("image__container")
    catName.classList.add("cat__name")
    catDescription.classList.add("cat__description")
    catContainer.classList.add("cat__container")

    // Pasting the element correctly into each cat container and into the main container
    imageContainer.appendChild(catImage)
    catContainer.appendChild(imageContainer)
    catContainer.appendChild(catName)
    catContainer.appendChild(catDescription)
    mainContainer.appendChild(catContainer)

    // Checking what's the data being passed in
    // console.log(data.reference_image_id)
    // console.log(data.name)
    // console.log(data.description)
}

window.onload = async () => {
    const data = await fetchData()
    data.forEach((cat) => {
        printData(cat)
    })
}

