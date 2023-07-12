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
                        <h3><a href="${item.maps.googleMaps}" target="_BLANK">Link de GoogleMaps</a></h3>
                        <h4><a href="${item.maps.openStreetMaps}" target="_BLANK">Link de openStreetMaps</a></h4>
                    </div>
                </div>
            `
            })
            result_GoogleMaps.innerHTML = template
        }
)
