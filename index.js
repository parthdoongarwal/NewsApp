const conEl = document.querySelector("#con")
const inputEl = document.querySelector("#input")
const searchEl = document.querySelector("#search")
const boxEl = document.querySelector("#box")
const langEl = document.getElementById("toggle")
let lang = 'en'
const loaderEl = document.getElementById("loading")



langEl.addEventListener("click", () => {
    if (langEl.classList.contains("english")) {
        langEl.textContent = "hindi"
        langEl.classList.add("hindi")
        langEl.classList.remove("english")
        lang = "hi"
        console.log(lang)
    } else {
        langEl.textContent = "english"
        langEl.classList.add("english")
        langEl.classList.remove("hindi")
        lang = "en"
        console.log(lang)
    }
})


searchEl.addEventListener("click", () => {
    console.log(inputEl.value)
    if (inputEl.value !== "") {
        all(`https://newsapi.org/v2/everything?q="${inputEl.value.toLowerCase()}"&language=${lang}&apiKey=a4198e91e5d44411b900a05b3bb23e21`)
        console.log(lang)

    } else {
        conEl.innerHTML = `<h3 id = "notype">type something</h1>`
    }
})




async function all(code) {
    conEl.innerHTML = ""
    inputEl.value = ""

    //  fetch(code)
    //     .then(response => response.json())
    //     .then(data => {
    //         console.log(data.articles.length)
    //         if (data.articles.length != 0) {
    //             for (let i = 0; i < data.articles.length; i++) {
    //                 const g = data.articles[i]
    //                 conEl.innerHTML += `
    //             <div class = "card" id = "${g.source.name}">
    //             <h2 class = "title">${g.title}</h2>
    //             <img src = '${g.urlToImage}' class = "img" alt = "img could not be found"/>
    //             <h3 class= "link"><a href="${g.url}" target="_blank">Read more..</a></h3>

    //             <div>
    //             `

    //             }
    //         } else {
    //             conEl.innerHTML = `<h1 id = "noFound">Zero search results found</h1>`
    //         }
    //     }
    //     )
    //     .catch(err => console.error(err));
    loaderEl.classList.add("loader")
    const fetc = await fetch(code , {
  mode: 'cors',
  headers: {
    'Access-Control-Allow-Origin':'*'
  }
})
    const data = await fetc.json()
    loaderEl.classList.remove("loader")
    console.log(data)

    if (data.articles.length != 0) {

        for (let i = 0; i < data.articles.length; i++) {
            const g = data.articles[i]
            conEl.innerHTML += `
                    <div class = "card" id = "${g.source.name}">
                    <h2 class = "title">${g.title}</h2>
                    <img src = '${g.urlToImage}' class = "img" alt = "img could not be found"/>
                    <h3 class= "link"><a href="${g.url}" target="_blank">Read more..</a></h3>
    
                    <div>
                    `

        }
    } else {
        conEl.innerHTML = `<h1 id = "noFound">Zero search results found</h1>`
    }
}


// all('https://newsapi.org/v2/top-headlines?country=in&apiKey=a4198e91e5d44411b900a05b3bb23e21')

function starting() {
    all('https://newsapi.org/v2/top-headlines?country=in&apiKey=a4198e91e5d44411b900a05b3bb23e21')
}

starting()
// <img src = '${g.urlToImage != null ? g.urlToImage : "https://icons.veryicon.com/png/o/education-technology/alibaba-cloud-iot-business-department/image-load-failed.png"}' class = "img" alt = "img could not be found"/>

