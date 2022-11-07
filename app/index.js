console.log("test");

const allAvailableAlbums = []; // array that will hold ALL albums received from the API call

/*---------------------------------
Pink Floyd
---------------------------------*/
const options = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": "d0ae19ece6msh1e9e4a680f20c33p167ea2jsne5ff1736876f",
    "X-RapidAPI-Host": "deezerdevs-deezer.p.rapidapi.com",
  },
};

const containerPink = document.getElementById("pinkContainer");
const rowPink = document.getElementById("mainRowPink");

// const pinkHeading = document.createElement("h2");
// pinkHeading.innerText = "Pink Floyd Collection";
// containerPink.appendChild(pinkHeading);

containerPink.classList.add("mt-5");
// const pinkHeader = document.getElementById("pinkHeader");
// pinkHeader.innerHTML = "Pink Floyd Collection";

const pinkIdsArray = [];

fetch("https://striveschool-api.herokuapp.com/api/deezer/search?q=pink%20floyd", options)
  .then((response) => response.json())
  .then((response) => {
    console.log(response.data);

    for (let pink of response.data) {
      rowPink.innerHTML += ` <div class="col12 col-sm-6 col-md-4 col-lg-3">
                                <div class="card" >
                                    <img src=${pink.album.cover} class="card-img-top resize-img" alt="...">
                                    <div class="card-body">
                                        <h5 class="card-title">${pink.album.title}</h5>
                                        <p class="card-text"><i class="bi bi-hourglass-split"></i> Duration: ${pink.duration} min.</p>
                                        <a href="#" class="btn btn-dark">Go somewhere</a>
                                    </div>
                                </div>
                            </div>    `;
      pinkIdsArray.push(pink.album.id);
      allAvailableAlbums.push(pink.album.title);
    }
  })
  .catch((err) => console.error(err));

/*---------------------------------
Daft Punk
---------------------------------*/
const containerPunk = document.getElementById("punkContainer");
const rowPunk = document.getElementById("mainRowPunk");

// const punkHeading = document.createElement("h2");
// punkHeading.innerText = "Pink Floyd Collection";
// containerPunk.appendChild(pinkHeading);

containerPunk.classList.add("mt-5");
// const punkHeader = document.getElementById("punkHeader");
// punkHeader.innerHTML = "Daft Punk Collection";

const punkIdsArray = [];

fetch("https://striveschool-api.herokuapp.com/api/deezer/search?q=daft%20punk", options)
  .then((response) => response.json())
  .then((response) => {
    console.log(response.data);

    for (let punk of response.data) {
      rowPunk.innerHTML += ` <div class="col12 col-sm-6 col-md-4 col-lg-3">
                                <div class="card" >
                                    <img src=${punk.album.cover} class="card-img-top resize-img" alt="...">
                                    <div class="card-body">
                                        <h5 class="card-title">${punk.album.title}</h5>
                                        <p class="card-text"><i class="bi bi-hourglass-split"></i> Duration: ${punk.duration} min.</p>
                                        <a href="#" class="btn btn-dark">Go somewhere</a>
                                    </div>
                                </div>
                            </div>    `;
      punkIdsArray.push(punk.album.id);
      allAvailableAlbums.push(punk.album.title);
    }
  })
  .catch((err) => console.error(err));

/*---------------------------------
Metallica
---------------------------------*/
const containerMetal = document.getElementById("metalContainer");
const rowMetal = document.getElementById("mainRowMetal");

// const punkHeading = document.createElement("h2");
// punkHeading.innerText = "Pink Floyd Collection";
// containerPunk.appendChild(pinkHeading);

containerMetal.classList.add("mt-5");
// const metalHeader = document.getElementById("metalHeader");
// metalHeader.innerHTML = "Metallica Collection";

const metalIdsArray = [];

fetch("https://striveschool-api.herokuapp.com/api/deezer/search?q=metallica", options)
  .then((response) => response.json())
  .then((response) => {
    console.log(response.data);

    for (let metal of response.data) {
      rowMetal.innerHTML += ` <div class="col12 col-sm-6 col-md-4 col-lg-3">
                                <div class="card" >
                                    <img src=${metal.album.cover} class="card-img-top resize-img" alt="...">
                                    <div class="card-body">
                                        <h5 class="card-title">${metal.album.title}</h5>
                                        <p class="card-text"><i class="bi bi-hourglass-split"></i> Duration: ${metal.duration} min.</p>
                                        <a href="#" class="btn btn-dark">Go somewhere</a>
                                    </div>
                                </div>
                            </div>    `;
      metalIdsArray.push(metal.album.id);
      allAvailableAlbums.push(metal.album.title);
    }
  })
  .catch((err) => console.error(err));

/*---------------------------------
EXTRAS 1
---------------------------------*/
const pinkAlert = document.getElementById("pinkAlert");
const punkAlert = document.getElementById("punkAlert");
const metalAlert = document.getElementById("metalAlert");
const pinkBtn = document.getElementById("pinkBtn");
const punkBtn = document.getElementById("punkBtn");
const metalBtn = document.getElementById("metalBtn");

// const seePunkUniques = function () {
//   let uniqueIds = [];
//   for (let i = 0; i < punkIdsArray.length; i++) {
//     console.log(punkIdsArray[i]);
//     if (!uniqueIds.includes(punkIdsArray[i])) {
//       uniqueIds.push(punkIdsArray[i]);
//     }
//   }
//   console.log({ punkIdsArray });
//     console.log({ uniqueIds });

// };
const seeUniques = function (arr) {
  let uniqueIds = [];
  for (let i = 0; i < arr.length; i++) {
    console.log(arr[i]);
    if (!uniqueIds.includes(arr[i])) {
      uniqueIds.push(arr[i]);
    }
  }
  console.log({ arr });
  console.log({ uniqueIds });
  return uniqueIds.length;
};

pinkBtn.addEventListener("click", () => {
  let unique = seeUniques(pinkIdsArray);
  pinkAlert.innerText = unique;
  //   pinkAlert.style.display = "block";
});

punkBtn.addEventListener("click", () => {
  let unique = seeUniques(punkIdsArray);
  punkAlert.innerText = unique;
  //   punkAlert.style.display = "block";
});

metalBtn.addEventListener("click", () => {
  let unique = seeUniques(metalIdsArray);
  metalAlert.innerText = unique;
  //   metalAlert.style.display = "block";
});

/*---------------------------------
EXTRAS 2
---------------------------------*/
const modalRow = document.getElementById("modalRow");

const allUniqueAlbums = function () {
  const arr = allAvailableAlbums;
  const uniqueAlbums = [];
  for (let album of arr) {
    if (!uniqueAlbums.includes(album)) {
      uniqueAlbums.push(album);
    }
  }
  console.log({ allAvailableAlbums });
  console.log({ uniqueAlbums });
  return uniqueAlbums;
};
allUniqueAlbums();

const listUniqueAlbums = function () {};
