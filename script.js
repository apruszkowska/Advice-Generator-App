const getData = async () => {
    const response = await fetch("https://api.adviceslip.com/advice")
    const data = await response.json()
    
    document.querySelector(".title").innerHTML = `Advice #${data.slip.id}`
    document.querySelector(".text").innerHTML = `"${data.slip.advice}"`
}
