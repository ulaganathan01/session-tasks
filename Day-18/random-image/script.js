// Select an image element from the DOM
const img = document.querySelector("div .image");

// fetch an image from the server when page loads
fetch("https://dog.ceo/api/breeds/image/random")
.then(res => res.json())
.then(res => {
    if(res.status == "success"){
        img.src = res.message;
    }
    else{
        throw new Error("Error: There is an Error")
    }
})
.catch(err => {
    document.write(err.message);
})

// Again hit the same api to fetch an image from the server when button is clicked
function generateRandom(){
    fetch("https://dog.ceo/api/breeds/image/random")
    .then(res => res.json())
    .then(res => {
        if(res.status == "success"){
            img.src = res.message;
        }
        else{
            throw new Error("Error: There is an Error")
        }
    })
    .catch(err => {
        document.write(err);
    })
}