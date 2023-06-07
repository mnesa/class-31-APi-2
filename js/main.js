//kanye
//loadKanye()
const loadKanye = () => {
  fetch('https://api.kanye.rest/')
  .then(res => res.json())
  .then(data => displayKanye(data))
}

const displayKanye = (kanye) => {
  document.getElementById('quote').innerText = kanye.quote;
}

//randomuser APi
//friends
//loadFriends
const loadFriends = () => {
  fetch('https://randomuser.me/api/?results=10')
  .then(res => res.json())
  .then(data => displayFriends(data))
}
loadFriends()

const displayFriends = (data) => {
  // console.log(data);
  const friends = data.results;
  const friendsDiv = document.getElementById('friends');
  for (const friend of friends) {
    // console.log(friend);
    const p = document.createElement('p');
    p.innerText = `
    Name: ${friend.name.title} ${friend.name.first} ${friend.name.last}
    Email: ${friend.email} 

    `
    friendsDiv.appendChild(p);
  }
}


//country
//load all
const loadCountries = () => {
  fetch('https://restcountries.com/v3.1/all')
  .then(res => res.json())
  .then(data => displayCountries(data))
}
loadCountries()


//display all
const displayCountries = (countries) => {
  // console.log(countries);
  const countryDiv = document.getElementById('country');
  countries.forEach(country => {
    console.log(country);
    const div = document.createElement('div');
    div.classList.add('country-details')
    div.innerHTML = `
    <h3>${country.name.common}</h3>
    <p>${country.capital}</p>
    
    <a href="#country-details" onclick="loadcountryByName('${country.name.common}')">Show Details</a>
    `
    countryDiv.appendChild(div)
  })
}

const loadcountryByName = (name) => {
  const url = `https://restcountries.com/v3.1/name/${name}`
  // console.log(url);
  fetch(url)
  .then(res=>res.json())
  .then(data => displayCountryDetails(data[0]))
}

const displayCountryDetails = (country) => {
  console.log(country);
  const detailDiv = document.getElementById('country-details');
  detailDiv.innerHTML = `
  <h3>${country.name.common}</h3>
  <p>${country.capital}</p>
  <p>${country.population}</p>
  <img src="${country.flags.png}" alt="">
  `
  
}