import React, { useState, useEffect } from 'react'

function App() {
  //insert google and location key
  const [location, setLocation] = useState({})

  useEffect(() => {
    var request = new XMLHttpRequest()

    request.open('GET', `https://api.ipdata.co/?api-key=${LOCATION_KEY}`)

    request.setRequestHeader('Accept', 'application/json')

    request.onreadystatechange = function () {
      if (this.readyState === 4) {
        const response = JSON.parse(this.responseText)
        setLocation({
          country: response.country_name,
          city: response.city,
          lat: response.latitude,
          lon: response.longitude
        })
      }
    }

    request.send()
  }, [])

  return (
    <>
      <div>{location.city}, {location.country}</div>
      <iframe
        style={{ height: '450px', width: '600px' }}
        src={`https://www.google.com/maps/embed/v1/place?q=${location.lat},${location.lon}&key=${GOOGLE_KEY}&zoom=6`} allowfullscreen>
      </iframe>
    </>
  )
}

export default App
