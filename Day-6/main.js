const http = new XMLHttpRequest();

http.onreadystatechange = function () {
  if (this.readyState === 4 && this.status === 200) {
    const data = JSON.parse(this.response);
    const asianCountryList = [];
    const populationLessThanTwoLakh = [];
    const USCurrency = [];
    data.filter((country) => {
      if (country.region === "Asia") {
        asianCountryList.push(country.name.common);
      }
      if (country.population < 200000) {
        populationLessThanTwoLakh.push(country.name.common);
      }
      if (country.currencies?.USD) {
        USCurrency.push(country.name.common);
      }
    });
    console.log("Asian country list: " + asianCountryList);

    console.log("\n");

    console.log(
      "Country with population less than 2 lakhs: " + populationLessThanTwoLakh
    );

    console.log("\n");

    data.forEach((country) => {
      console.log("Country name: " + country.name.common);
      console.log("Country capital: " + country.capital);
      console.log("Country flag: " + country.flag);
      console.log("\n");
    });

    const totalPopulation = data.reduce((totalPopulation, currPopulation) => {
      return Number(totalPopulation) + Number(currPopulation.population);
    }, 0);

    console.log("Total population is: " + totalPopulation);

    console.log("\n");

    console.log("Country that uses USD: " + USCurrency);
  }
};

http.open("GET", "https://restcountries.com/v3.1/all");
http.send();