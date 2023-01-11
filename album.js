const albumDOM = document.getElementById("album");
fetch('https://jsonplaceholder.typicode.com/albums')
//   console.log("albumm")
  .then(res => res.json())
  .then(data => {


    // console.log(data)
    loadAlbum(data)
   
  })
  .catch((error) => console.error(error))
const loadAlbum = (album) => {
  album.forEach((photo) => {
    const photochild = createphoto(photo)
    albumDOM.appendChild(photochild)
    
  })
}
const createphoto = (photoprop) => {
  const photo = document.createElement("div")
  photo.classList.add("col")
  photo.classList.add("col-md-4")
  photo.classList.add("mt-4")
  photo.innerHTML = ` 
    <div class="card">
          <img src="${photoprop.url}" class="card-img-top" alt="...">
          <div class="card-body">
            <h5 class="card-title">${photoprop.title}</h5>
          </div>
        </div>  
    ` 
    return photo;
}
 