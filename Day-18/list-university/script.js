// Get the necessary elements from the HTML DOM
const input = document.querySelector("div .country");
const listContainer = document.querySelector("div .list-container");
const error = document.querySelector("div .error-display");

// Call the function to fetch data from the server whenever the button is clicked
function fetchData(){
    if(input.value){
        fetch(`http://universities.hipolabs.com/search?country=${input.value}`)
        .then(res => res.json())
        .then(res => {
            console.log(res);
            if(res.length){
                error.textContent = "";
                appendList(res);
            }else{
                listContainer.innerHTML = "";
                displayError();
            }
        })
        .catch(err => {
            console.log(err.message);
        })
    }
    else{
        displayError();
    }
}

// This function would be called when the data is received from the server
function appendList(res){
    listContainer.innerHTML = "";
    const data = [];
    const resLength = res.length;
    for (let i = 0; i < resLength; i++){
        const list = document.createElement("li");
        list.innerHTML = res[i].name;
        data.push(list);
    }
    listContainer.append(...data);
}

// This function would be called and display the error message whenever the user is submitted with the invalid country name
function displayError(){
    error.textContent = "Enter the valid country name";
}