const fname = document.getElementById("first-name");
const lname = document.getElementById("last-name");
const email = document.getElementById("email");
const address = document.getElementById("address");
const pincode = document.getElementById("pincode");
const gender = document.querySelectorAll(".gender");
const food = document.querySelectorAll(".food");
const state = document.getElementById("state");
const country = document.getElementById("country");
const addButton = document.getElementById("submit");
const table = document.querySelector(".table");
const tableBody = document.querySelector("tbody");
const clearVal = 	document.querySelectorAll(".clr-value");
addButton.addEventListener("click", (event) => {
	event.preventDefault();
	table.style.visibility = "visible";
	let foodChoises = "";
	food.forEach((ele) => {
		if(ele.checked){
			foodChoises = foodChoises + ele.value + "<br>";
		}
	})
	let selectgender = "";
	gender.forEach(ele => {
		if(ele.checked){
			selectgender = ele.value;
		}
	})
	
	const row = document.createElement("tr");
  row.innerHTML = `
		<td>${fname.value}</td>
		<td>${lname.value}</td>
		<td>${email.value}</td>
		<td>${address.value}</td>
		<td>${pincode.value}</td>
		<td>${selectgender}</td>
		<td>${foodChoises}</td>
		<td>${state.value}</td>
		<td>${country.value}</td>
    `;
	tableBody.appendChild(row);
	clearVal.forEach((ele) => {
		ele.value = "";
	})
	address.innerText = "";
	gender.forEach((ele) => {
		ele.checked = false;
	})
	food.forEach((ele) => {
		ele.checked = false;
	})
});
