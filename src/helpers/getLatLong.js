async function getPosition() {
    // Simple wrapper
    return new Promise((res, rej) => {
        navigator.geolocation.getCurrentPosition(res, rej)
    })
}

async function getLatLong() {
    let lat, long
    try {
        const position = await getPosition()
        lat = position.coords.latitude
        long = position.coords.longitude
    } catch {
        ;[lat, long] = [51.506321, -0.12714] // London cords
    }

    return [lat, long]
}

export default getLatLong
