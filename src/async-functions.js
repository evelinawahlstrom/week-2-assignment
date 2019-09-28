const getTatooineResidents = () => {
    fetch('https://swapi.co/api/planets/1/ ')
        .then(response => response.json())
        .then(data => {
            const section = document.getElementByName('Tatooine')
            section.innerHTML =
        })
        .catch(error => alert(error))
}


module.exports = { getTatooineResidents }


/* Basic blueprint
fecth(url)
.then(response.something) // Define response type (JSON, Headers, Status codes)
.then(data) // get the response type */




/*
    _Note: There should be **1** named export it should be a function

2. The function `getTatooineResidents` 
- Makes a request to the starwars api endpoint:  
to get info about the planet Tatooine
- Feel free to use npm to install a http client like
 superagent to make the request
- Making a request with superagent should create a Promise, 
return that promise from the function `getTatooineResidents`
- Add a `then()` block to the promise you return from `getTatooineResidents`
- `return` an array of urls for the residents of Tatooine 
(not the whole response) from the last `.then()` block in the promise chain*/