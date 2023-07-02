async function fetching() {

  const response = await fetch("https://restcountries.com/v3.1/currency/all")
    const json =  await response.json()
    return json
  }
  
  fetching(). then(
    response => {
      let template = ``
      response.forEach(item => {
      template += `
            <div class="item-detail">
                <img src="${item.flags.png}"/>
                    <div class="item-detail-description">
                      <h2>${item.name.official}</h2>
                      <h3>${item.currencies.ALL.name}</h3>
                    </div>  
            </div>
          `
          
        })
        result_detail.innerHTML = template
      }

  )
