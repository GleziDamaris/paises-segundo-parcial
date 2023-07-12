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
              <img src="${item.flags.png}"/>
                  <div class="item-description">
                      <h2> ${item.name.official}</h2>
                      <h3> capital city: ${item.capital}</h3>
                      <h3> latitud/longitud: ${item.capitalInfo.latlng}</h3>
                  </div>
              </div>
            `
          })
          result_capital.innerHTML = template
        }
)
