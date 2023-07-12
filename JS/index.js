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
                        <h1>${item.name.official}</h1>
                        <h2>Región: ${item.region}</h2>
                    </div>
                </div>
              `
            })
            result.innerHTML = template
          }
  )
