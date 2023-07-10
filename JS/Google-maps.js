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
                <div class="item-detail-googlemaps">
                <img src="${item.flags.png}"/>
                    <div class="item-detail-description-googlemaps">
                        <h2> ${item.name.official}</h2>
                        <h3>Link de GoogleMaps: ${item.maps.googleMaps}</h3>
                        <h4>Link de openStreetMaps: ${item.maps.openStreetMaps}</h4>
                    </div>
                </div>
            `
            })
            result_GoogleMaps.innerHTML = template
        }
)
