let films = document.querySelector("#films")
let input = document.querySelector('.input')
let button = document.querySelector('.search')

//film part

fetch("https://api.tvmaze.com/shows?q=")
    .then((response) => response.json())
    .then((data) => array(data));

function array(arr) {
    for (let i = 0; i < arr.length; i++) {
        films.innerHTML +=
            `
                <div class="col-3" style="margin-top: 30px;" >
            <div class="card" style="width: 18rem;">
            <img src="${arr[i].image.medium}" class="card-img-top" alt="...">
            <div class="card-body">
              <h5 class="card-title">Name: ${arr[i].name}</h5>
              <p class="card-text">Type of movie: ${arr[i].genres}</p>
              <p class="card-text">IMDB: ${arr[i].rating.average}</p>     
              <p class="card-text">Language: ${arr[i].language}</p>
              <a href="${arr[i].url}" class="btn btn-primary">Go to movie</a>
            </div>
          </div>
          </div>
            `
    }
}

// search part

button.onclick = function () {

    $.ajax({
        method: "GET",
        url: "https://api.tvmaze.com/search/shows?q=" + input.value
    }).done((data) => {
        data.forEach(element => {
            
            films.innerHTML =
                `
            <div class="col-4" style="margin-top: 30px;" >
            <div class="card" style="width: 18rem;">
            <img src="${element?.show?.image?.medium}" class="card-img-top" alt="...">
            <div class="card-body">
              <h5 class="card-title">Name: ${element.show.name}</h5>
              <p class="card-text">Type of movie: ${element.show.genres}</p>
              <p class="card-text">IMDB: ${element.show.rating.average}</p>     
              <p class="card-text">Language: ${element.show.language}</p>
              <a href="${element.show.url}" class="btn btn-primary">Go to movie</a>
            </div>
          </div>
          </div>
            
            `
        });

    })

}

