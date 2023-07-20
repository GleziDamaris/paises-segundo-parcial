async function fetching () {
  const url = window.location.search
  const urlParams = new URLSearchParams(url)
  const name = urlParams.get('name') || "Jordan"
  const response = await fetch(`https://restcountries.com/v3.1/name/${name}?fullText=true`)
  const json = await response.json()
  return json
}

fetching().then(
  item => {
    console.log(item)
    let template = `
                <div class="item">
                <img src="${item[0].flags.png}"/>
                    <div class="item-description">
                        <h2>${item[0].name.official}</h2>
                        <h2>Región: ${item[0].region}</h2>
                    </div>
                </div>
              `
    result.innerHTML = template
  }
)
