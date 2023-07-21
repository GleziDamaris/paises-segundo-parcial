const countries = document.querySelector (".countries")
const countcountries = document.querySelector ("#countries")
const showcountries = document.querySelector ("#showcountries")

showcountries.addEventListener ("click", function (){
  result.style.display = "grid"
})
hidecountries.addEventListener ("click", function (){
  result.style.display = "none"
})


async function fetching() {
    const response = await fetch("https://restcountries.com/v3.1/all")
    const json =  await response.json()
    return json
  }
  
  fetching(). then(
        response => {
            let template = ``
            response.forEach(item => {
                template += `
                <div class="item">
                <a href="country.html?name${item.name.common}">
                <img src="${item.flags.png}"/>
                    <div class="item-description">
                        <h2>${item.name.official}</h2>
                        <h2>Región: ${item.region}</h2>
                    </div>
                </a>
                </div>
              `
            })
            result.innerHTML = template
          }
  )
